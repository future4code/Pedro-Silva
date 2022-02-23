export enum U_ROLES {
    NORMAL = "normal",
    ADMIN = "admin"
}

export interface AuthenticationData {
    id: string, 
    role: U_ROLES
}