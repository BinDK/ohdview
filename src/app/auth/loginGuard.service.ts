import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/LoginService.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService  implements CanActivate{

  constructor(private authService: LoginService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    const loggedIn = localStorage.getItem('isLogged');
    if (loggedIn == 'true' ) {
      let role  = parseInt(localStorage.getItem('roleid'));
      if (role  == 4) {
        this.router.navigate(['/client']);
        return true;
      }
      else if (role  == 1) {
        this.router.navigate(['/admin']);
        return true;
      }
      else if (role  == 2) {
        this.router.navigate(['/head']);
        return true;
      }
      else if (role  == 3) {
        this.router.navigate(['/asignee']);
        return true;
      }
      else {
    this.router.navigate(['/login']);
        return true;
      }
    }
    this.router.navigate(['/login']);
    return true;
  }
}