
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from './../../services/admin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';


@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  constructor(private router: Router, private locationSta: LocationStrategy, private adminService: AdminService, private spinner: NgxSpinnerService, private toaster: ToastrService) {

  }
  ele = document.documentElement
  questions: Array<any> = []
  attemptQuestions = 0
  correctAnswers = 0;
  totalMarks = 0;
  isSubmitted = false;
  percentage = 0;
  isCheck = false

  timer: any;
  ngOnInit(): void {
    this.preventBack();
    let id = sessionStorage.getItem("quizid")
    this.spinner.show().then(() => {
      this.adminService.getSomeQuestionsOfQuiz(id).subscribe((e) => {
        this.spinner.hide()
        if (e.status == 200) {
          this.questions = e.data
          this.timer = this.questions.length * 60;
          this.questions.forEach((d) => {
            d.giveAnswer = ""
          })
          if (this.ele.requestFullscreen) {
            this.ele.requestFullscreen()
            this.isCheck = true;
            this.startTimer()
            document.addEventListener('contextmenu', event => event.preventDefault());
          }
        } else {
          Swal.fire("Error", "Somethings went wrong", "error")
        }
      }, () => {
        this.spinner.hide()
        Swal.fire("Error", "Somethings went wrong", "error")
      })

    })
    //full screeen

    //reload


    //for click of some button
    if(this.router.url.includes("/startExam") && this.isSubmitted ==false){
      let misuse = setInterval(() => {

        if (window.innerWidth == screen.width && window.outerHeight == screen.height) {

        } else {
          this.evaluate()
          Swal.fire("Error", "Misbehave found.. Exam Submitted", "error")
          clearInterval(misuse)
          return;
        }
      }, 1000)
      if (this.isCheck && performance.navigation.TYPE_RELOAD == performance.navigation.type) {
        this.evaluate()
        Swal.fire("Error", "Misbehave found.. Exam Submitted", "error")
        return;
      }
      this.changeEvent()
    }
  }


  changeEvent(){
    document.addEventListener(
      'keydown',
      (e:any) => {
        if (e.keyCode === 123 || e.keyCode === 18 || e.keyCode === 17) {
          this.isSubmitted = true
          this.evaluate()
        }
      },
      true
    );

    document.addEventListener("visibilitychange",()=>{
      this.isSubmitted = true
      this.evaluate()
    })




  }

  preventBack() {

    history.pushState(null, "", location.href);
    this.locationSta.onPopState(() => {
      history.pushState(null, '', location.href);
      Swal.fire("Success", "Exam submit Successfully", "success")
      this.evaluate()
      this.isSubmitted = true
      //redirct on result side
    })
  }



  exitScreen() {
    Swal.fire({
      title: "Do you want to Submit this Quiz?.",
      showCancelButton: true,
      confirmButtonText: "Submit",
      denyButtonColor: "Back",
      confirmButtonColor: "#03c3ec",
      icon: "info"
    }).then((e) => {
      if (e.isConfirmed) {
        this.evaluate()
      }
    })

  }

  startTimer() {
    let timer = window.setInterval(() => {
      if (this.timer <= 0) {
        //submit without ask
        Swal.fire("Success", "Times Up..", "success")
        this.evaluate()
        clearInterval(timer)
      } else {
        this.timer--;
      }
    }, 1000)
  }


  getPerfectTime() {
    let hour = Math.floor(this.timer / 3600)
    if (hour > 0) {
      let minute = Math.floor((hour * 3600 - this.timer) / 60)
      let second = this.timer - minute * 60;
      return `${hour} hour : ${minute} min : ${second} sec`
    } else {
      let minute = Math.floor((this.timer) / 60)
      let second = this.timer - minute * 60;
      return `${minute} min : ${second} sec`
    }

  }

  evaluate() {
    this.questions.forEach((e) => {
      if (e.giveAnswer === e.answer) {
        this.correctAnswers++;
        this.attemptQuestions++;
      } else if (e.giveAnswer != e.answer && e.giveAnswer != "") {
        this.attemptQuestions++;
      }
    })



    if (document.exitFullscreen) {
      this.isSubmitted = true
      document.exitFullscreen()
      this.totalMarks = this.correctAnswers * this.questions[0].quiz.maxMarks / this.questions[0].quiz.numberOfQuestions
      this.percentage = this.totalMarks * 100 / this.questions[0].quiz.maxMarks
      Swal.fire("Success", "Exam submit Successfully", "success")
    }



  }


  printResult() {
    window.print()
  }

}
