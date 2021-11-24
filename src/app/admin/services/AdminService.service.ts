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
export class AdminService{

    private BASE_URL :string = Port.database;

    constructor(
        private httpClient: HttpClient
    ){}

    // Admin / Users
    findAll() {
        return this.httpClient.get(this.BASE_URL + '/admin/account/findall').toPromise().then(result => result as Account[]);
    }
    findallheadavailable() {
        return this.httpClient.get(this.BASE_URL + '/admin/account/findallheadavailable').toPromise().then(result => result as Account[]);
    }
    findUser(id:number) {
        return this.httpClient.get(this.BASE_URL + '/admin/account/find/' + id).toPromise().then(result => result as Account[]);
    }
    findAllRole(){
        return this.httpClient.get(this.BASE_URL + '/admin/role/findall').toPromise().then(result => result as Role[]);
    }
    createAccount(account: Account) {
        return this.httpClient.post(this.BASE_URL + '/admin/account/create', account).toPromise().then(result => result as Account);
    }
    updateAccount(account: Account) {
        return this.httpClient.put(this.BASE_URL + '/admin/account/update' , account).toPromise().then(result => result as Account);
    }

    deleteAccount(id:number) {
        return this.httpClient.delete(this.BASE_URL + '/admin/delete/' + id).toPromise().then(result => result as Account);
    }


    //admin FindBy 
    findbyUser(user:string) {
        return this.httpClient.get(this.BASE_URL + '/admin/account/findByUser/' + user).toPromise().then(result => result as Account[]);
    }
    facilityFindBy(user:string) {
        return this.httpClient.get(this.BASE_URL + '/facility/findallByName/' + user).toPromise().then(result => result as Facility[]);
    }
    serviceFindBy(user:string) {
        return this.httpClient.get(this.BASE_URL + '/service/findallByName/' + user).toPromise().then(result => result as Service[]);
    }
    


    // out find by

    // Admin /FacilityZZ
    findAllFacility() {
        return this.httpClient.get(this.BASE_URL + '/facility/findall').toPromise().then(result => result as Facility[]);
    }
    findAvailableFacility() {
        return this.httpClient.get(this.BASE_URL + '/facility/findavailable').toPromise().then(result => result as Facility[]);
    }
    detailFacility(id :number) {
        return this.httpClient.get(this.BASE_URL + '/facility/find/' + id).toPromise().then(result => result as Facility[]);
    }
    createFacility(faci: Facility) {
        return this.httpClient.post(this.BASE_URL + '/facility/create', faci).toPromise().then(result => result as Facility);
    }
    updateFacility(faci: Facility) {
        return this.httpClient.put(this.BASE_URL + '/facility/update', faci).toPromise().then(result => result as Facility);
    }
    deleteFacility(id: number) {
        return this.httpClient.delete(this.BASE_URL + '/facility/delete/'+ id).toPromise().then(result => result as Facility);
    }
    
    // Admin /Service
    findAllService() {
        return this.httpClient.get(this.BASE_URL + '/service/findall').toPromise().then(result => result as Service[]);
    }

    detailService(id :number) {
        return this.httpClient.get(this.BASE_URL + '/service/find/' + id).toPromise().then(result => result as Service[]);
    }

    createService(service: Service) {
        return this.httpClient.post(this.BASE_URL + '/service/create', service).toPromise().then(result => result as Service);
    }
    updateService(service: Service) {
        return this.httpClient.put(this.BASE_URL + '/service/update', service).toPromise().then(result => result as Service);
    }

    deleteService(id: number) {
        return this.httpClient.delete(this.BASE_URL + '/service/delete/'+ id).toPromise().then(result => result as Service);
    }

    // Admin / Priority
    findAllPriority() {
        return this.httpClient.get(this.BASE_URL + '/priority/findall').toPromise().then(result => result as Priority[]);
    }

    // Admin / Head
    findAllHead() {
        return this.httpClient.get(this.BASE_URL + '/admin/account/findallhead').toPromise().then(result => result as Account[]);
    }

}