export enum TypeUser {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type User = {
    id: number,
    name: string,
    email: string,
    type: TypeUser, 
    age: number
}

export let users :User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: TypeUser.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: TypeUser.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: TypeUser.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: TypeUser.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: TypeUser.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: TypeUser.ADMIN,
        age: 60
    }
]