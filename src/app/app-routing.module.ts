import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UserContentComponent } from './admin/userPage/components/content/userContent.component';
// import { UserPageComponent } from './admin/userPage/userPage.component';
// import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  // { path: '', redirectTo: '/admin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }