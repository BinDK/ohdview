import { Account } from "./account.entity";
import { Facility } from "./facility.entity";
import { Service } from "./service.entity";

export class CreateRequestbyUserReq{
    request_priority_id: number;
    content: string;
    facility_id: number;
    facility: Facility;
    request_status_id: number;
    service_id: number;
    account_id:number;
    }