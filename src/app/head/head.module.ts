import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ClientRouting } from './head.routing';

import { ContentElement } from './context/elements/content/content.element';
import { FooterElement } from './context/elements/footer/footer.element';
import { HeaderElement } from './context/elements/header/header.element';
import { MenuElement } from './context/elements/menu/menu.element';

import { HeadService } from './services/HeadService.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import { ClientContextComponent } from './context/clientContext.component';
import { HeadComponent } from './head.component';
import { ClientProfileComponent } from './context/components/profiles/clientProfile.component';
import { HeadAssignmentComponent } from './context/components/request/headAssignment.component';
import { AllAccount } from '../services/AllAccount.service';

@NgModule({
  declarations: [
    HeadComponent,
    ClientContextComponent,
    MenuElement,
    FooterElement,
    HeaderElement,
    ContentElement,
    ClientProfileComponent,
    HeadAssignmentComponent
  ],
  imports: [
    BrowserModule,
    ClientRouting,
    ReactiveFormsModule,
    FormsModule,
    //Prime stuff
    AccordionModule,
    TableModule,
    BrowserAnimationsModule,
    EditorModule,
    HttpClientModule,

  ],
  providers: [HeadService, AllAccount]
})
export class HeadModule { }
