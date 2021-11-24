import { Account } from "./account.entity";
import { Facility } from "./facility.entity";
import { Priority } from "./priority.entity";
import { ReqStatus } from "./reqstatus.entity";
import { Service } from "./service.entity";

export class RequestClient{
    id: number;
    startDate: Date;
    end_date: string;
    description: string;
    // facilityid: number;
    // serviceid: number;
    requestpriorityid: Priority;
    requestStatus: ReqStatus;
    
    account_id:number;
    reasonCloseRequest: string;
    
    facility: Facility;
    account: Account
    service: Service;
    
    }