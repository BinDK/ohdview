import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { AdminRouting } from './admin.routing';
import { ContentElement } from './userPage/elements/content/content.element';
import { FooterElement } from './userPage/elements/footer/footer.element';
import { HeaderElement } from './userPage/elements/header/header.element';
import { MenuElement } from './userPage/elements/menu/menu.element';
import { UserContentComponent } from './context/components/content/userContent.component';
import { AdminContextComponent } from './context/adminContext.component';
import { AdminFacilityComponent } from './context/components/facility/adminFacility.component';
import { AdminServiceComponent } from './context/components/service/adminService.component';
import { AdminService } from './services/AdminService.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
AdminContextComponent,
UserContentComponent,
MenuElement,
FooterElement,
HeaderElement,
ContentElement,
AdminFacilityComponent,
AdminServiceComponent
  ],
  imports: [
    BrowserModule,
    // AdminRoutingModule,
    AdminRouting,
    ReactiveFormsModule,
    FormsModule,
    //Prime stuff
    AccordionModule,
    TableModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],
  providers: [AdminService]
})
export class AdminModule { }
