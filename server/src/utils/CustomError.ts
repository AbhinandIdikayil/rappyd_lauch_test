interface errors {
    message: string,
    field: string
}

export default class ErrorResponse extends Error {
    public message: string
    public status: number
    public errors: errors[] | string
    constructor(status: number, message: string, errors?:errors[]) {
        super(message)
        this.status = status
        this.message = message
        this.errors = errors || 'error'
    }

    static badRequest(msg: string): ErrorResponse {
        return new ErrorResponse(400, msg || "Bad Request");
    }

    static unauthorized(msg: string): ErrorResponse {
        return new ErrorResponse(401, msg || "Unauthorized");
    }
    static notFound(msg: string): ErrorResponse {
        return new ErrorResponse(404, msg || "Not Found");
    }

    static validationError(msg?: string, errors?:errors[]): ErrorResponse {
        return new ErrorResponse(400, msg || "Validation failed", errors);
    }
    static internalError(msg?: string): ErrorResponse {
        return new ErrorResponse(500, msg || "internal Server Error");
    }
}