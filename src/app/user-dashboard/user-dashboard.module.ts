import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
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



@NgModule({
  declarations: [

    NavbarComponent,
    SidebarComponent,
    HomeContentComponent,
    MyaccountComponent,
    MyconnectionsComponent,
    AdminHomeContentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule



  ],
  exports:[

    NavbarComponent,
    MyaccountComponent,
    SidebarComponent

  ]
})
export class UserDashboardModule { }
