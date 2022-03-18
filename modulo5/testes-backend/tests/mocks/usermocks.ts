import { user, USER_ROLES } from "../../src/types/user";

export const userMock :user = {
    id: "id_mockado",
    name: "astrodev",
    email: "astrodev@gmail.com",
    password: "astrodev123",
    role: USER_ROLES.NORMAL
}

export const userMock2 :user = {
    id: "id_mockado_2",
    name: "astrodev",
    email: "astrodev@gmail.com",
    password: "astrodev123",
    role: USER_ROLES.NORMAL
}
