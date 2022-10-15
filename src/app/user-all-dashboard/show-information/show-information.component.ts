import { LoginService } from './../../services/login.service';
import { AdminService } from './../../services/admin.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-show-information',
  templateUrl: './show-information.component.html',
  styleUrls: ['./show-information.component.css']
})
export class ShowInformationComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private router: Router, private toater: ToastrService, private adminService: AdminService,private loginService:LoginService) { }
  quiz: any = {}
  ngOnInit(): void {
    let id = sessionStorage.getItem("quizid")

    if (id != null || id != "") {

    this.spinner.show().then(()=>{
      this.adminService.getQuiz(id).subscribe((e) => {
        this.spinner.hide()
        if (e.status == 200) {
          this.quiz = e.data
        } else if (e.status == 404) {
          Swal.fire("Error", e.msg, "error")
        } else {
          Swal.fire("Error", "Somethings went wrong", "error")
        }
      }, () => {
        this.spinner.hide()
        Swal.fire("Error", "Somethings went wrong", "error")
      })
    })
    } else {
      Swal.fire("Error", "Somethings went wrong", "error")
      this.router.navigateByUrl("/user/showQuizzes")
    }
  }
  attempt:any={
    "quiz":{
      "quizid":""
    },
    "user":{
      "userid":""
    }
  }
  startExam(){
    this.spinner.show().then(() => {
      this.loginService.getCurrentUser().subscribe((data) => {

        this.attempt.quiz.quizid = sessionStorage.getItem("quizid")
        this.attempt.user.userid = data.userid

        this.adminService.checkDuplication(this.attempt).subscribe((e)=>{
          this.spinner.hide()
          if(e.status==200){
            Swal.fire({
              icon:'info',
              title:'Please Read Instruction very Carefully!',
              confirmButtonText:"Start Exam",
              confirmButtonColor:"#03c3ec",
              showCancelButton:true
            }).then((result)=>{
              if(result.isConfirmed){
                this.router.navigateByUrl("startExam")
              }
            })
          }else{
            this.spinner.hide()
            Swal.fire("Error",e.msg,"error")
            this.router.navigateByUrl("/user")
          }
        },error=>{
          this.spinner.hide()
          Swal.fire("Error","Something went wrong","error")
          this.router.navigateByUrl("/user")
        })

      },error=>{
        this.spinner.hide()
        Swal.fire("Error","Something went wrong","error")
        this.router.navigateByUrl("/user")
      })
    })




  }

}
