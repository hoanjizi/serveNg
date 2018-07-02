var user = require("../controllers/listuser.controller")

var service = {
    UserService: user
}

const wrapperWithServiceName = (serviceName, req, res, func, requireAuthorization) => {
    const id = `${serviceName}[${uuid.v4()}]`
    Promise.resolve()
        .then(() => {
            if (requireAuthorization && req.user.isAuthorized == false) {
                throw new ExpressError.UnAthorized(req.user.message)
            }
            const serviceInstance = service[serviceName]

            console.log(`Service start::${id}`)
            return Promise.resolve(serviceInstance[func](req))
        })
        .then((responseBody) => {
            if (!responseBody) {
                throw new ExpressError.BadRequest("Error response")
            }
            if (requireAuthorization && req.user.isAuthorized == false) {
                throw new ExpressError.UnAthorized(req.user.message)
            }
            res.status(successCode).send(new ExpressResponse("Success", responseBody));
        })
        .catch((error) => {
            doCatch(error, res, id)
        })
}
