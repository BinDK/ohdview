import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { prototype } from "events";
import { stringify } from "querystring";
import { Account } from "src/app/entites/account.entity";
import { LoginAccount } from "src/app/entites/loginAccount.entity";

import * as Port from "src/port"
import { AccountChangePass } from "../client/context/components/profiles/entities/accountChangePass.entity";
import { AccountUpdate } from "../client/context/components/profiles/entities/accountUpdate.entity";
@Injectable()
export class AllAccount{
    private BASE_URL :string = Port.database;
    constructor(
        private httpClient: HttpClient
    ){}
    information() {
        let role : Account  = JSON.parse(localStorage.getItem('role'));
        // const accID : number = role.id;
        return this.httpClient.get(this.BASE_URL + '/account/findProfile/'+ role.id).toPromise().then(result => result as Account[]);
    }
    updateAccount(account: AccountUpdate) {
        return this.httpClient.put(this.BASE_URL + '/account/update' , account).toPromise().then(result => result as Account[]);
    }
    ChangePass(account: Account) {
        return this.httpClient.put(this.BASE_URL + '/account/changepass' , account).toPromise().then(result => result as Account[]);
    }


}