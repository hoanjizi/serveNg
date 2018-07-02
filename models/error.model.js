class HttpFriendlyError extends Error{
    constructor(code,responseMessage)
    {
        super(responseMessage)
        this.code = code;
        this.message = responseMessage;
    }
}
class BadRequest extends HttpFriendlyError{
    constructor(caller)
    {
        super(400,caller)
    }
}
class UnAthorized extends HttpFriendlyError{
    constructor(caller)
    {
        super(401,caller)
    }
}
class NotFound extends HttpFriendlyError{
    constructor(caller)
    {
        super(404,caller)
    }
}
module.exports = {
    BadRequest,HttpFriendlyError,NotFound,UnAthorized
}