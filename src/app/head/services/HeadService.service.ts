import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { prototype } from "events";
import { Account } from "src/app/entites/account.entity";
import { AssignMent } from "src/app/entites/Assignment.entity";
import { CreateRequestbyUserReq } from "src/app/entites/createRequestbyUserReq.entitiy";
import { Facility } from "src/app/entites/facility.entity";
import { HeadTask } from "src/app/entites/headTask.entity";
import { Priority } from "src/app/entites/priority.entity";
import { ReqClose } from "src/app/entites/reqClose.entity";
import { ReqLog } from "src/app/entites/reqLog.entity";
import { RequestClient } from "src/app/entites/requestclient.entitiy";
import { Result } from "src/app/entites/result.entity";
import { Role } from "src/app/entites/role.entity";
import { Service } from "src/app/entites/service.entity";
import * as Port from "src/port"
@Injectable()
export class HeadService{

    private BASE_URL :string = Port.database;

    constructor(
        private httpClient: HttpClient
    ){}

    // user find stuff

    //head do thing like:
    findallAssignment(id : number ){
        return this.httpClient.get(this.BASE_URL + '/myrequests/myassignment/findall/'+ id).toPromise().then(result => result as HeadTask[]);
    }
    findallAssignmentAll(id : number ){
        return this.httpClient.get(this.BASE_URL + '/myrequests/myassignment/findallall/'+ id).toPromise().then(result => result as HeadTask[]);
    }
    findAssignment(status : string , id: number){
        return this.httpClient.get(this.BASE_URL + '/myrequests/myassignment/findbyStatus/'+ status + '/headid/'+ id).toPromise().then(result => result as HeadTask[]);
    }

    updateAssignment(assignment : AssignMent ){
        return this.httpClient.put(this.BASE_URL + '/myrequests/myassignment/update', assignment).toPromise().then(result => result as HeadTask[]);
    }

    detailheadtask(id : number){
        return this.httpClient.get(this.BASE_URL + '/myrequests/myassignment/find/'+ id).toPromise().then(result => result as HeadTask[]);

    }

    findReq(id : number ){
        return this.httpClient.get(this.BASE_URL + '/myrequests/find/'+ id).toPromise().then(result => result as RequestClient[]);
    }
    findReq_logbyID(id:number){
        return this.httpClient.get(this.BASE_URL + '/myrequests/findreqlog/'+ id).toPromise().then(result => result as ReqLog[]);
    }
    findAllHead() {
        return this.httpClient.get(this.BASE_URL + '/admin/account/findallass').toPromise().then(result => result as Account[]);
    }
}