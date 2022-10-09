import { AddCategoriesComponent } from './user-dashboard/add-categories/add-categories.component';
import { ShowQuizzesComponent } from './user-dashboard/show-quizzes/show-quizzes.component';
import { ShowCategoriesComponent } from './user-dashboard/show-categories/show-categories.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';

import { AdminHomeContentComponent } from './user-dashboard/admin-home-content/admin-home-content.component';
import { HomeContentComponent } from './user-dashboard/home-content/home-content.component';
import { MyconnectionsComponent } from './user-dashboard/myconnections/myconnections.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyaccountComponent } from './user-dashboard/myaccount/myaccount.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';

import { ForgetPasswordComponent } from './user-auth/forget-password/forget-password.component';
import { LoginComponent } from './user-auth/login/login.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
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
      path:"user",
      component:DashboardComponent,
      canActivate:[UserGuard],
      children:[
        {
          path:"",
          component:HomeContentComponent,

        },
        {
          path: "myaccount",
          component:MyaccountComponent,
          pathMatch:"full"
        },
        {
          path: "myconnections",
          component:MyconnectionsComponent,
          pathMatch:"full"
        },

      ],
  },{
    path:"admin",
    component:AdmindashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:"",
        component:AdminHomeContentComponent,

      },
      {
        path: "myaccount",
        component:MyaccountComponent,
        pathMatch:"full"
      },
      {
        path: "myconnections",
        component:MyconnectionsComponent,
        pathMatch:"full"
      },
      {
        path:"showCategories",
        component:ShowCategoriesComponent,
        pathMatch:"full"

      },
      {
        path:"quizzes",
        component:ShowQuizzesComponent,
        pathMatch:"full"
      },{
        path:"addCategory",
        component:AddCategoriesComponent,
        pathMatch:"full"
      }

    ],
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
