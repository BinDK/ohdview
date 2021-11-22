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
import { AuthGuard } from './auth/auth.guard';
// import { RoleGuard } from './auth/role.guard';
// import { ClientComponent } from './client/client.component';
// import { ClientModule } from './client/client.module';
// import { ClientModule } from './client/client.module';
import { ToastrModule } from 'ngx-toastr';
import { HeadModule } from './head/head.module';
import { AssigneeModule } from './assignee/assignee.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainRouting,
    AdminModule,
    ClientModule,
    HeadModule,
    AssigneeModule,
    LoginModule,
    //Prime stuff
    AccordionModule,
    TableModule,
    BrowserAnimationsModule,
    EditorModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
