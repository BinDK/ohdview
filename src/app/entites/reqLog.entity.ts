import { Account } from "./account.entity";

export class ReqLog{
id: number;
requestByUserId: number;
logTime: Date;
status: string;
reqConent: string;
asignee: Account;
}