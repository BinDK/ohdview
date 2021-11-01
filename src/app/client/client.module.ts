import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { ClientRouting } from './client.routing';

import { ContentElement } from './context/elements/content/content.element';
import { FooterElement } from './context/elements/footer/footer.element';
import { HeaderElement } from './context/elements/header/header.element';
import { MenuElement } from './context/elements/menu/menu.element';

import { ClientService } from './services/ClientService.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientContextComponent } from './context/clientContext.component';
import { ClientComponent } from './client.component';

@NgModule({
  declarations: [
    ClientComponent,
    ClientContextComponent,
    MenuElement,
    FooterElement,
    HeaderElement,
    ContentElement,
  ],
  imports: [
    BrowserModule,
    // AdminRoutingModule,
    ClientRouting,
    ReactiveFormsModule,
    FormsModule,
    //Prime stuff
    AccordionModule,
    TableModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],
  providers: [ClientService]
})
export class ClientModule { }
