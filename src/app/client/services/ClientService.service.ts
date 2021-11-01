import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { prototype } from "events";
import { Account } from "src/app/entites/account.entity";
import { Facility } from "src/app/entites/facility.entity";
import { Result } from "src/app/entites/result.entity";
import { Role } from "src/app/entites/role.entity";
import * as Port from "src/port"
@Injectable()
export class ClientService{

    private BASE_URL :string = Port.database;

    constructor(
        private httpClient: HttpClient
    ){}

    // Admin / Users
    // findAll() {
    //     return this.httpClient.get(this.BASE_URL + '/admin/account/findall').toPromise().then(result => result as Account[]);
    // }
    // findAllRole(){
    //     return this.httpClient.get(this.BASE_URL + '/admin/role/findall').toPromise().then(result => result as Role[]);
    // }
    // create(account: Account) {
    //     return this.httpClient.post(this.BASE_URL + '/admin/create', account).toPromise().then(result => result as Account);
    // }

    // Admin /FacilityZZ
    findAllFacility() {
        return this.httpClient.get(this.BASE_URL + '/facility/findall').toPromise().then(result => result as Facility[]);
    }

}