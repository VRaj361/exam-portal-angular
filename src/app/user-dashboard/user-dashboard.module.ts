import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MyconnectionsComponent } from './myconnections/myconnections.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    HomeContentComponent,
    MyaccountComponent,
    MyconnectionsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HomeComponent,
    NavbarComponent,
    MyaccountComponent

  ]
})
export class UserDashboardModule { }
