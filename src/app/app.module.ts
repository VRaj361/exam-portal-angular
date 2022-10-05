import { MyaccountComponent } from './user-dashboard/myaccount/myaccount.component';
import { HomeComponent } from './user-dashboard/home/home.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { CssJsFilesComponent } from './css-js-files/css-js-files.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';

import { NavbarComponent } from './user-dashboard/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    CssJsFilesComponent,
    PageNotFountComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    UserDashboardModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
