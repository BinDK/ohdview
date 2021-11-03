import { Role } from "./role.entity";

export class Account{
    id: number;
    username: string;
    password: string;
    name: string;
    email: string;
    role: Role;
    roleId: number;
}