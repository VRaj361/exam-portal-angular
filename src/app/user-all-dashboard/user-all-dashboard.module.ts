import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowUserQuizzesComponent } from './show-user-quizzes/show-user-quizzes.component';
import { ShowInformationComponent } from './show-information/show-information.component';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ShowUserQuizzesComponent,
    ShowInformationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ShowUserQuizzesComponent
  ]
})
export class UserAllDashboardModule { }
