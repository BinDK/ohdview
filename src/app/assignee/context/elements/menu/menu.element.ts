import { Component } from '@angular/core';
import { Account } from 'src/app/entites/account.entity';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.element.html',
})
export class MenuElement {


  ngOnInit() {
    
  }

  roleis(){
    let role : Account  = JSON.parse(localStorage.getItem('role'));
    alert(role.roleId);
  }
  
}
