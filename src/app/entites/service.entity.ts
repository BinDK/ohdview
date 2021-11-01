import { Account } from "./account.entity";
import { Facility } from "./facility.entity";

export class Service{
    id: number;
    name: string;
    facility: Facility;
    description: string;

}