import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { prototype } from "events";
import { Account } from "src/app/entites/account.entity";
import { CreateRequestbyUserReq } from "src/app/entites/createRequestbyUserReq.entitiy";
import { Facility } from "src/app/entites/facility.entity";
import { Priority } from "src/app/entites/priority.entity";
import { ReqClose } from "src/app/entites/reqClose.entity";
import { ReqLog } from "src/app/entites/reqLog.entity";
import { RequestClient } from "src/app/entites/requestclient.entitiy";
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

    // user find stuff
    findAllFacility() {
        return this.httpClient.get(this.BASE_URL + '/facility/findall').toPromise().then(result => result as Facility[]);
    }
    findFacility(id : number) {
        return this.httpClient.get(this.BASE_URL + '/service/findfacility/' + id).toPromise().then(result => result as Service[]);
    }
    findAllPriority() {
        return this.httpClient.get(this.BASE_URL + '/priority/findall').toPromise().then(result => result as Priority[]);
    }

    //user do thing like:
    createRequest(req:CreateRequestbyUserReq) {
        return this.httpClient.post(this.BASE_URL + '/myrequests/create', req).toPromise().then(result => result as CreateRequestbyUserReq);
    }
    findallReq(id : number ){
        return this.httpClient.get(this.BASE_URL + '/myrequests/findall/'+ id).toPromise().then(result => result as RequestClient[]);
    }
    findReqbyStatus(id : number, accID :number ){
        return this.httpClient.get(this.BASE_URL + '/myrequests/findreqstatus/'+ accID+ '/status/'+id).toPromise().then(result => result as RequestClient[]);
    }

    findReq(id : number ){
        return this.httpClient.get(this.BASE_URL + '/myrequests/find/'+ id).toPromise().then(result => result as RequestClient[]);
    }
    findReq_logbyID(id:number){
        return this.httpClient.get(this.BASE_URL + '/myrequests/findreqlog/'+ id).toPromise().then(result => result as ReqLog[]);
    }
    closeReq(close: ReqClose){
        return this.httpClient.put(this.BASE_URL + '/myrequests/close/',close).toPromise().then(result => result as RequestClient[]);
    }

}