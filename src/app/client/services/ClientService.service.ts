import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { prototype } from "events";
import { Account } from "src/app/entites/account.entity";
import { Facility } from "src/app/entites/facility.entity";
import { Priority } from "src/app/entites/priority.entity";
import { Result } from "src/app/entites/result.entity";
import { Role } from "src/app/entites/role.entity";
import { Service } from "src/app/entites/service.entity";
import * as Port from "src/port"
@Injectable()
export class ClientService{

    private BASE_URL :string = Port.database;

    constructor(
        private httpClient: HttpClient
    ){}

    // user /FacilityZZ
    findAllFacility() {
        return this.httpClient.get(this.BASE_URL + '/facility/findall').toPromise().then(result => result as Facility[]);
    }
    findFacility(id : number) {
        return this.httpClient.get(this.BASE_URL + '/service/findfacility/' + id).toPromise().then(result => result as Service[]);
    }
    findAllPriority() {
        return this.httpClient.get(this.BASE_URL + '/priority/findall').toPromise().then(result => result as Priority[]);
    }

}