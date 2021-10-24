import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './component/userLogin/userlogin.component';
import { UserPageComponent } from './component/userPage/userPage.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {path:'',component: LoginComponent, children: [
    {path:'',component: UserLoginComponent},
    {path:'login',component: UserLoginComponent},
    {path:'logged',component: UserPageComponent},
  ]},
  {path:'**',component:UserLoginComponent,redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }