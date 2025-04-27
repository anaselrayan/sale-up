import { Role } from "@module/roles/models/role.model";

export interface User {
    userId: number,
    username: string,
    phone: string,
    email: string,
    locked: boolean,
    imageUrl: string,
    lastLoginTime: string,
    role: Role
}