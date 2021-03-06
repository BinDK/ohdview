import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ClientRouting } from './client.routing';

import { ContentElement } from './context/elements/content/content.element';
import { FooterElement } from './context/elements/footer/footer.element';
import { HeaderElement } from './context/elements/header/header.element';
import { MenuElement } from './context/elements/menu/menu.element';

import { ClientService } from './services/ClientService.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import { ClientContextComponent } from './context/clientContext.component';
import { ClientComponent } from './client.component';
import { ClientProfileComponent } from './context/components/profiles/clientProfile.component';
import { ClientSendRequestComponent } from './context/components/request/clientSendRequest.component';
import { AllAccount } from '../services/AllAccount.service';

@NgModule({
  declarations: [
    ClientComponent,
    ClientContextComponent,
    MenuElement,
    FooterElement,
    HeaderElement,
    ContentElement,
    ClientProfileComponent,
    ClientSendRequestComponent
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
  providers: [ClientService, AllAccount]
})
export class ClientModule { }
