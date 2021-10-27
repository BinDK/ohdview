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
import { routing } from './app.routing';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    // MenuElement,
    // HeaderElement,
    // ContentElement,
    // FooterElement,
    // UserContentComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AdminModule,
    //Prime stuff
    AccordionModule,
    TableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AppModule { }
