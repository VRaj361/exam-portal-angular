
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { CssJsFilesComponent } from './css-js-files/css-js-files.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
@NgModule({
  declarations: [
    AppComponent,
    CssJsFilesComponent,
    PageNotFountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
