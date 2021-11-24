import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { prototype } from "events";
import { Account } from "src/app/entites/account.entity";
import { AssignMent } from "src/app/entites/Assignment.entity";
import { CreateRequestbyUserReq } from "src/app/entites/createRequestbyUserReq.entitiy";
import { Facility } from "src/app/entites/facility.entity";
import { FinTask } from "src/app/entites/finishedTask.entity";
import { HeadTask } from "src/app/entites/headTask.entity";
import { Priority } from "src/app/entites/priority.entity";
import { ReqClose } from "src/app/entites/reqClose.entity";
import { ReqLog } from "src/app/entites/reqLog.entity";
import { RequestClient } from "src/app/entites/requestclient.entitiy";
import { Result } from "src/app/entites/result.entity";
import { Role } from "src/app/entites/role.entity";
import { Service } from "src/app/entites/service.entity";
import { UserTask } from "src/app/entites/userTask.entity";
import * as Port from "src/port"
@Injectable()
export class AssigneeService{

    private BASE_URL :string = Port.database;

    constructor(
        private httpClient: HttpClient
    ){}

    // user find stuff

    //head do thing like:
    findallTask(id : number ){
        return this.httpClient.get(this.BASE_URL + '/mytask/findAllTask/'+ id).toPromise().then(result => result as UserTask[]);
    }
    findTaskStatus(status : string , id: number){
        return this.httpClient.get(this.BASE_URL + '/mytask/findAllTaskAll/'+ id+ '/status/'+ status ).toPromise().then(result => result as UserTask[]);
    }

    finishedTask(assignment : FinTask ){
        return this.httpClient.put(this.BASE_URL + '/mytask/update', assignment).toPromise().then(result => result as UserTask[]);
    }

    detailheadtask(id : number){
        return this.httpClient.get(this.BASE_URL + '/myrequests/myassignment/find/'+ id).toPromise().then(result => result as HeadTask[]);
    }
    detailusertask(id : number){
        return this.httpClient.get(this.BASE_URL + '/mytask/find/'+ id).toPromise().then(result => result as UserTask[]);

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