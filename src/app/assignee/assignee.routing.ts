import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsigneeGuardService } from '../auth/asigneeGuard.service';
import { AuthGuard } from '../auth/auth.guard';
import { HeadGuardService } from '../auth/headGuard.service';
import { ClientContextComponent } from './context/clientContext.component';
import { ClientProfileComponent } from './context/components/profiles/clientProfile.component';
import { AssigneeTaskComponent } from './context/components/request/assigneeTask.component';

const routes: Routes = [
    {
        path: 'asignee',
        component: ClientContextComponent,
        children: [
            // { path: 'account', component: UserContentComponent },
            // { path: 'facility', component: AdminFacilityComponent },
            { path: 'mangeTask', component: AssigneeTaskComponent },
            { path: 'profile', component: ClientProfileComponent },
        ],
        canActivate: [AsigneeGuardService],
        data:{
            roleid: [3]
        }
    }
];


  export const AssigneeRouting = RouterModule.forRoot(routes);