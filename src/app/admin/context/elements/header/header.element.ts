import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.element.html',
})
export class HeaderElement {

constructor(
  private router: Router
){}
  ngOnInit() {
    
  }
  deleteSession(){
    sessionStorage.clear();
    localStorage.clear();
    localStorage.removeItem('roleid');
    this.router.navigate['/'];
  }
  
}
