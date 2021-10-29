import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserContentComponent } from './context/components/content/userContent.component';
import { AdminContextComponent } from './context/adminContext.component';
import { AdminFacilityComponent } from './context/components/facility/adminFacility.component';
import { AdminServiceComponent } from './context/components/service/adminService.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminContextComponent,
        children: [
            { path: 'account', component: UserContentComponent },
            { path: 'facility', component: AdminFacilityComponent },
            { path: 'service', component: AdminServiceComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AdminRouting { }