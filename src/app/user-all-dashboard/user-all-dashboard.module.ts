import { AppRoutingModule } from './../app-routing.module';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowUserQuizzesComponent } from './show-user-quizzes/show-user-quizzes.component';
import { ShowInformationComponent } from './show-information/show-information.component';
import { Router, RouterModule } from '@angular/router';
import { StartQuizComponent } from './start-quiz/start-quiz.component';


@NgModule({
  declarations: [
    ShowUserQuizzesComponent,
    ShowInformationComponent,
    StartQuizComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    
    FormsModule,

  ],
  exports:[
    ShowUserQuizzesComponent,
    StartQuizComponent,

  ]
})
export class UserAllDashboardModule { }
