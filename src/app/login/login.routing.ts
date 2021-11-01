import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];


  export const LoginRouting = RouterModule.forRoot(routes);