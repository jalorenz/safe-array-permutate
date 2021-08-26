export class InvalidMaxLengthError extends Error {
    constructor() {
        super("Given maxLength is zero")
    }
}