import { BaseError } from "./BaseError";

export class CustomError extends BaseError {

    constructor(code: number, message: string) {
        super(code, message);
    }
}