import { AdminService } from './../../services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private router:Router,private toaster:ToastrService,private spinner:NgxSpinnerService,private adminService:AdminService) { }
  attempt:any={}
  question:Array<any>=[]
  title:any=""
  ngOnInit(): void {
    let id=sessionStorage.getItem("attemptid")
    if(id==null){
      this.toaster.error("Something went wrong")
      this.router.navigateByUrl("/user")
    }else{
      this.spinner.show().then(()=>{
        this.adminService.currentQuizDetails(id).subscribe((e)=>{
          this.spinner.hide()
          if(e.status==200){
            this.attempt = e.data
            this.question = JSON.parse(e.data.content)
            console.log(this.question)
            
          }else{
            Swal.fire("Error","Something went wrong","error")
            this.router.navigateByUrl("/user")
          }
        },()=>{
          this.spinner.hide()
          Swal.fire("Error","Something went wrong","error")
          this.router.navigateByUrl("/user")
        })
      })
    }
  }

}
