import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
//Prime Stuff
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainRouting } from './app.routing';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { LoginModule } from './login/login.module';
import { EditorModule } from 'primeng/editor';
// import { ClientComponent } from './client/client.component';
// import { ClientModule } from './client/client.module';
// import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainRouting,
    AdminModule,
    ClientModule,
    LoginModule,
    //Prime stuff
    AccordionModule,
    TableModule,
    BrowserAnimationsModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
