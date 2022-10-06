import { UserServicesService } from './../../services/user-services.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toaster:ToastrService,private userService:UserServicesService,private router:Router) { }

  is_checked:boolean=false;
  public user={
    email:"",
    password:""
  }


  ngOnInit(): void {
  }

  //for show and hide password
  getShowPassword(passClasses:any, passInput:any){
    if(passClasses.value.includes("bx-show")){
      passClasses.value = "bx bx-hide"
      passInput.type = "password"
    }else{
      passClasses.value = "bx bx-show"
      passInput.type = "text"
    }
  }

  //form submittion
  emailRegex:any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  login(){

    if(this.is_checked==false){
      this.toaster.warning("Please Check Remember me");
    }else{
      if(this.user.email.trim().length==0 || this.user.email ==""){
        this.toaster.error("Please Enter Email")
        return;
      }
      if(!this.emailRegex.test(this.user.email)){
        this.toaster.error("Please Enter Email as XXX@XX.XXX")
        return;
      }
      if(this.user.password.trim().length==0 || this.user.password ==""){
        this.toaster.error("Please Enter Password")
        return;
      }else{
        this.userService.loginUser(this.user).subscribe((e)=>{
          if(e.status == 200){
            Swal.fire("Success",e.msg,"success")
          }else if(e.status == 404){
            Swal.fire("Error",e.msg,"error")
          }else{
            Swal.fire("Error","Something went wrong","error")
          }
        })
      }
    }
  }


}
