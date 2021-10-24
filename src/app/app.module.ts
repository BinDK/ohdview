import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './component/userLogin/userlogin.component';
import { UserPageComponent } from './component/userPage/userPage.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserLoginComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
