import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/admin', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);