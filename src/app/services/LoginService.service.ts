import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { prototype } from "events";
import { stringify } from "querystring";
import { Account } from "src/app/entites/account.entity";
import { LoginAccount } from "src/app/entites/loginAccount.entity";

import * as Port from "src/port"
@Injectable()
export class LoginService{
    isLogin = false;
    private BASE_URL :string = Port.database;
    roleAs: number;
    constructor(
        private httpClient: HttpClient
    ){}
    login(acc : LoginAccount) {
        return this.httpClient.post(this.BASE_URL + '/account/login', acc).toPromise().then(result => result as Account);
    }
    isLoggedIn() {
        const loggedIn = localStorage.getItem('isLogged');
        if (loggedIn == 'true')
             this.isLogin = true;
        else 
            this.isLogin = false;
        return this.isLogin;
      }
    
      getRole() {
        // let role : Account  = JSON.parse(localStorage.getItem('roleid'));
        // localStorage.setItem('roleid', JSON.stringify(role.roleId))
        let role = JSON.parse(localStorage.getItem('roleid'));
        this.roleAs = role;
        return this.roleAs;
      }
}