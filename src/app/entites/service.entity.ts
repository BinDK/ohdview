import { Account } from "./account.entity";
import { Facility } from "./facility.entity";

export class Service{
    id: number;
    name: string;
    facilityid: number;
    facility: Facility;
    description: string;

}