export enum ROLES {
   NORMAL = 'normal',
   ADMIN = 'admin'
}

export type AuthenticationData = {
   id: string;
   role: ROLES
}
