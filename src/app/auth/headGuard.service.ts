import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/LoginService.service';

@Injectable({
  providedIn: 'root'
})
export class HeadGuardService implements CanActivate{

  constructor(private authService: LoginService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    const loggedIn = localStorage.getItem('isLogged');
    if (loggedIn != null ) {
      // const userRole = this.authService.getRole();
      let role  = parseInt(localStorage.getItem('roleid'));
      // const userRole : number = parseInt(role);
      if (role  != 2) {
        this.router.navigate(['/login']);
        return false;
      }
      else{return true;}
    }
    this.router.navigate(['/login']);
    return false;
  }
}
