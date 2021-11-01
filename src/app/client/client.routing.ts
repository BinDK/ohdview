import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientContextComponent } from './context/clientContext.component';
// import { AdminComponent } from './client.component';
// import { UserContentComponent } from './context/components/content/userContent.component';
// import { AdminContextComponent } from './context/adminContext.component';
// import { AdminFacilityComponent } from './context/components/facility/adminFacility.component';
// import { AdminServiceComponent } from './context/components/service/adminService.component';
// import { AdminProfileComponent } from './context/components/profiles/adminProfile.component';

const routes: Routes = [
    {
        path: 'client',
        component: ClientContextComponent,
        children: [
            // { path: 'account', component: UserContentComponent },
            // { path: 'facility', component: AdminFacilityComponent },
            // { path: 'service', component: AdminServiceComponent },
            // { path: 'profile', component: AdminProfileComponent },
        ]
    }
];


  export const ClientRouting = RouterModule.forRoot(routes);