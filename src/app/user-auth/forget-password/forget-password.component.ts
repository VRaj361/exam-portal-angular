import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private toaster:ToastrService) { }
  public user={
    email:""
  }
  ngOnInit(): void {
  }

  emailRegex:any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  forgotPassword(){
    if(this.user.email.trim().length==0 || this.user.email ==""){
      this.toaster.error("Please Enter Email")
      return;
    }
    if(!this.emailRegex.test(this.user.email)){
      this.toaster.error("Please Enter Email as XXX@XX.XXX")
      return;
    }else{
      //api call
      this.toaster.success("Success")
    }
  }
}
