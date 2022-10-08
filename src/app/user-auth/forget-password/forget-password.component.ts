import { ForgotpasswordService } from './../../services/forgotpassword.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private toaster:ToastrService,private forgotpasswordService:ForgotpasswordService) { }
  public user={
    username:""
  }
  ngOnInit(): void {
  }

  emailRegex:any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  forgotPassword(){
    if(this.user.username.trim().length==0 || this.user.username ==""){
      this.toaster.error("Please Enter Email")
      return;
    }
    if(!this.emailRegex.test(this.user.username)){
      this.toaster.error("Please Enter Email as XXX@XX.XXX")
      return;
    }else{
      //api call
      this.toaster.success("Success")
      this.forgotpasswordService.generateTokenForForgetPassword(this.user).subscribe((e)=>{
        if(e != null){
          const headers={
            "Authorization":e.token
          }
          this.forgotpasswordService.forgotPassword(this.user,headers).subscribe((e)=>{
            if(e.status == 200){
              Swal.fire("Success",e.msg,"success")
            }else if(e.status == 404){
              Swal.fire("Error",e.msg,"error")
            }else{
              Swal.fire("Error","Something went wrong","error")
            }
          })
        }
        else{
          Swal.fire("Error","Something went wrong","error")
        }
      },()=>{
        Swal.fire("Error","Something went wrong","error")
      })
    }
  }
}
