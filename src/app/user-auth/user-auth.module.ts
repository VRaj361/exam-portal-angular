import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    ForgetPasswordComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ForgetPasswordComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class UserAuthModule { }
