export class UserRequest {
    userId?: number;
    username?: string;
    password?: string;
    passwordConfirm?: string;
    phone?: string;
    email?: string;
    imageFile?: File;
    roleId?: number;
}