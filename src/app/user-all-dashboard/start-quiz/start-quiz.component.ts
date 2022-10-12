
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

  constructor(private router: Router, private locationSta: LocationStrategy, private adminService: AdminService, private spinner: NgxSpinnerService,private toaster:ToastrService) {

  }
  ele = document.documentElement
  questions: Array<any> = []
  attemptQuestions=0
  correctAnswers=0;
  totalMarks=0;
  isSubmitted=false;
  percentage=0;
  ngOnInit(): void {
    this.preventBack();
    let id = sessionStorage.getItem("quizid")
    this.spinner.show().then(() => {
      this.adminService.getSomeQuestionsOfQuiz(id).subscribe((e) => {
        this.spinner.hide()
        if (e.status == 200) {
          this.questions = e.data
          this.questions.forEach((d)=>{
            d.giveAnswer = ""
          })
          if (this.ele.requestFullscreen) {
            this.ele.requestFullscreen()
          }
        } else {
          Swal.fire("Error", "Somethings went wrong", "error")
        }
      }, () => {
        this.spinner.hide()
        Swal.fire("Error", "Somethings went wrong", "error")
      })

    })

  }

  preventBack() {
    history.pushState(null, "", location.href);
    this.locationSta.onPopState(() => {
      history.pushState(null, '', location.href);
      Swal.fire("Success", "Exam submit Successfully", "success")
      //redirct on result side
    })
  }



  exitScreen() {
    Swal.fire({
      title:"Do you want to Submit this Quiz?.",
      showCancelButton:true,
      confirmButtonText:"Submit",
      denyButtonColor:"Back",
      confirmButtonColor:"#03c3ec",
      icon:"info"
    }).then((e)=>{
      if(e.isConfirmed){
        this.questions.forEach((e)=>{
          console.log(e.giveAnswer + " "+ e.answer)
          if(e.giveAnswer === e.answer){
            this.correctAnswers++;
            this.attemptQuestions++;
          }else if(e.giveAnswer != e.answer && e.giveAnswer != ""){
            this.attemptQuestions++;
          }
        })



        if (document.exitFullscreen) {
          this.isSubmitted = true
          document.exitFullscreen()
          this.totalMarks = this.correctAnswers * this.questions[0].quiz.maxMarks/this.questions[0].quiz.numberOfQuestions
          this.percentage = this.totalMarks * 100 / this.questions[0].quiz.maxMarks
          // console.log(this.questions)
          // this.toaster.success("Correct Answers "+this.correctAnswers)
          // this.toaster.success("Attampt Answers "+this.attemptQuestions)
          // this.toaster.success("Marks Answers "+this.correctAnswers * this.questions[0].quiz.maxMarks/this.questions[0].quiz.numberOfQuestions)
          Swal.fire("Success", "Exam submit Successfully", "success")
          //redirect on result page
        }
      }
    })

  }




}
