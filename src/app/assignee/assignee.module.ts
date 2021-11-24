import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { TableModule } from 'primeng/table';
import { AssigneeRouting } from './assignee.routing';

import { ContentElement } from './context/elements/content/content.element';
import { FooterElement } from './context/elements/footer/footer.element';
import { HeaderElement } from './context/elements/header/header.element';
import { MenuElement } from './context/elements/menu/menu.element';

import { AssigneeService } from './services/AssigneeService.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import { ClientContextComponent } from './context/clientContext.component';
import { ClientProfileComponent } from './context/components/profiles/clientProfile.component';
import { AssigneeTaskComponent } from './context/components/request/assigneeTask.component';
import { AllAccount } from '../services/AllAccount.service';
import { AssigneeComponent } from './assignee.component';

@NgModule({
  declarations: [
    AssigneeComponent,
    ClientContextComponent,
    MenuElement,
    FooterElement,
    HeaderElement,
    ContentElement,
    ClientProfileComponent,
    AssigneeTaskComponent
  ],
  imports: [
    BrowserModule,
    AssigneeRouting,
    ReactiveFormsModule,
    FormsModule,
    //Prime stuff
    AccordionModule,
    TableModule,
    BrowserAnimationsModule,
    EditorModule,
    HttpClientModule,

  ],
  providers: [AssigneeService, AllAccount]
})
export class AssigneeModule { }
