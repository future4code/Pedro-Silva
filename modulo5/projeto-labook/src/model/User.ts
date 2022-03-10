export type authenticationData = {
    id: string
}

export type user = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type SignupInputDTO = {
    name: string,
    email: string,
    password: string
}

export type LoginInputDTO = {
    email: string,
    password: string
}