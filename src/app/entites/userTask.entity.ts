import { Account } from "./account.entity";

export class UserTask{
    id: number;
    requestByUserId: number;
    headTaskStatus: string;
    note: string;
    startDate: Date;
    endDate: Date;
    headAccountId: Account;
}