import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '', redirectTo: '/client', pathMatch: 'full' },
    { path: '', redirectTo: '/admin', pathMatch: 'full' }
];

export const MainRouting = RouterModule.forRoot(routes);