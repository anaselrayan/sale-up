export interface Role {
    roleId: number,
    roleName: string,
    description: string,
    permissions: Permission[]
}

export interface Permission {
    permId: number,
    permCode: string,
    permName: string,
    permDescription: string
}

export interface PermissionGroup {
    group: string,
    permissions: Permission[]
}