import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private toaster:ToastrService) { }

  ngOnInit(): void {
  }

  is_checked:boolean=false;
  public user={
    email:"",
    password:"",
    firstName:"",
    lastName:"",
    phoneNum:"",
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


  //for signup
  emailRegex:any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  passwordRegex:any = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
  phoneRegex:any = /^\d{10}$/;
  signup(){
    if(this.is_checked == false){
      this.toaster.warning("Please Read Terms and Condition Onces")
    }else{
      
      if(this.user.firstName.trim().length==0 || this.user.firstName ==""){
        this.toaster.error("Please Enter FirstName")
        return;
      }
      if(this.user.lastName.trim().length==0 || this.user.lastName ==""){
        this.toaster.error("Please Enter LastName")
        return;
      }if(this.user.email.trim().length==0 || this.user.email ==""){
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
      }
      if(!this.passwordRegex.test(this.user.password)){
        this.toaster.error("Password contain 8 to 16 characters, at least one numeric digit, one uppercase and one lowercase letter")
        return;
      }
      if(this.user.phoneNum.trim().length==0 || this.user.phoneNum ==""){
        this.toaster.error("Please Enter Phone number")
        return;
      }
      if(!this.phoneRegex.test(this.user.phoneNum)){
        this.toaster.error("Please Enter Phonenumber with 10 Digits")
        return;
      }else{
        this.toaster.success("Success")
        //api call
        return
      }

    }
  }
}
