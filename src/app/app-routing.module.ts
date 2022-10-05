import { MyaccountComponent } from './user-dashboard/myaccount/myaccount.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { HomeComponent } from './user-dashboard/home/home.component';
import { ForgetPasswordComponent } from './user-auth/forget-password/forget-password.component';
import { LoginComponent } from './user-auth/login/login.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: "signup",
		component:SignupComponent,
		pathMatch:"full"
	},
  {
    path: "login",
		component:LoginComponent,
		pathMatch:"full"
  },
  {
    path: "forgetpassword",
		component:ForgetPasswordComponent,
		pathMatch:"full"
  },{
    path:"",
    component:HomeComponent,
  },{
    path:"myaccount",
    pathMatch:"full",
    component:MyaccountComponent
  },





  {
    path:"**",
    component:PageNotFountComponent
  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
