export class Recipe {
    constructor(
        private id: string,
        private user_id: string,
        private title: string,
        private description: string,
        private date: string
    ) { }

    getId = (): string => {
        return this.id
    }

    getUserId = (): string => {
        return this.user_id
    }

    getTitle = (): string => {
        return this.title
    }

    getDescription = ():string => {
        return this.description
    }

    getDate = ():string => {
        return this.date
    }


}
