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
    EditQuizComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    FormsModule,
    ToastrModule.forRoot()



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
    EditQuizComponent

  ]
})
export class UserDashboardModule { }
