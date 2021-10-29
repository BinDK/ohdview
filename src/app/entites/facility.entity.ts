import { Account } from "./account.entity";

export class Facility{
    id: number;

    name: string;
    email: string;
    head: Account;
    // HeadAccountID: Account;
    description: string;

}