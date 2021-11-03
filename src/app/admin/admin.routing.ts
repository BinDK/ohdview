import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserContentComponent } from './context/components/content/userContent.component';
import { AdminContextComponent } from './context/adminContext.component';
import { AdminFacilityComponent } from './context/components/facility/adminFacility.component';
import { AdminServiceComponent } from './context/components/service/adminService.component';
import { AdminProfileComponent } from './context/components/profiles/adminProfile.component';
import { AdminPriorityComponent } from './context/components/priority/priority.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminContextComponent,
        children: [
            { path: 'account', component: UserContentComponent },
            { path: 'facility', component: AdminFacilityComponent },
            { path: 'service', component: AdminServiceComponent },
            { path: 'priority', component: AdminPriorityComponent },
            { path: 'profile', component: AdminProfileComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AdminRouting { }