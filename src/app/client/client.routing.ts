import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ClientComponent } from './client.component';
import { ClientContextComponent } from './context/clientContext.component';
import { ClientProfileComponent } from './context/components/profiles/clientProfile.component';
import { ClientSendRequestComponent } from './context/components/request/clientSendRequest.component';

const routes: Routes = [
    {
        path: 'client',
        component: ClientContextComponent,
        children: [
            // { path: 'account', component: UserContentComponent },
            // { path: 'facility', component: AdminFacilityComponent },
            { path: 'sendRequest', component: ClientSendRequestComponent },
            { path: 'profile', component: ClientProfileComponent },
        ],
        canActivate: [AuthGuard],
        data:{
            roleid: [4]
        }
    }
];


  export const ClientRouting = RouterModule.forRoot(routes);