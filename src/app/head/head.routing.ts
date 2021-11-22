import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HeadGuardService } from '../auth/headGuard.service';
import { HeadComponent } from './head.component';
import { ClientContextComponent } from './context/clientContext.component';
import { ClientProfileComponent } from './context/components/profiles/clientProfile.component';
import { HeadAssignmentComponent } from './context/components/request/headAssignment.component';

const routes: Routes = [
    {
        path: 'head',
        component: ClientContextComponent,
        children: [
            // { path: 'account', component: UserContentComponent },
            // { path: 'facility', component: AdminFacilityComponent },
            { path: 'mangeRequest', component: HeadAssignmentComponent },
            { path: 'profile', component: ClientProfileComponent },
        ],
        canActivate: [HeadGuardService],
        data:{
            roleid: [4]
        }
    }
];


  export const ClientRouting = RouterModule.forRoot(routes);