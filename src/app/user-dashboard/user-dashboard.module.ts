import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Toast, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MyconnectionsComponent } from './myconnections/myconnections.component';
import { AdminHomeContentComponent } from './admin-home-content/admin-home-content.component';
import { ShowQuizzesComponent } from './show-quizzes/show-quizzes.component';
import { ShowCategoriesComponent } from './show-categories/show-categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { EditQuizComponent } from './edit-quiz/edit-quiz.component';
import { ShowQuizQuestionsComponent } from './show-quiz-questions/show-quiz-questions.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ShowDetailsComponent } from './show-details/show-details.component';


@NgModule({
  declarations: [

    NavbarComponent,
    SidebarComponent,
    HomeContentComponent,
    MyaccountComponent,
    MyconnectionsComponent,
    AdminHomeContentComponent,
    ShowQuizzesComponent,
    ShowCategoriesComponent,
    AddCategoriesComponent,
    EditCategoryComponent,
    AddQuizComponent,
    EditQuizComponent,
    ShowQuizQuestionsComponent,
    AddQuestionComponent,
    EditQuestionComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    FormsModule,
    ToastrModule.forRoot(),
    CKEditorModule



  ],
  exports:[

    NavbarComponent,
    MyaccountComponent,
    SidebarComponent,
    ShowCategoriesComponent,
    AddCategoriesComponent,
    ShowQuizzesComponent,
    AddQuizComponent,
    EditCategoryComponent,
    EditQuizComponent,
    ShowQuizQuestionsComponent,
    AddQuestionComponent,
    EditQuestionComponent,
    HomeContentComponent

  ]
})
export class UserDashboardModule { }
