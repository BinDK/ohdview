import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';

import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRouting } from './login.routing';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
LoginComponent
  ],
  imports: [
    BrowserModule,
    // AdminRoutingModule,
    LoginRouting,
    ReactiveFormsModule,
    FormsModule,
    //Prime stuff
    AccordionModule,
    TableModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],
  providers: []
})
export class LoginModule { }
