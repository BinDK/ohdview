import { Account } from "./account.entity";

export class UserTask{
    id: number;
    requestByUserId: number;
    userTaskStatus: string;
    note: string;
    startDate: Date;
    endDate: Date;
    headtaskId: number;
}