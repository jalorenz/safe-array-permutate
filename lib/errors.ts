export class InvalidMaxLengthError extends Error {
    constructor() {
        super("Given maxLength can not be zero")
    }
}