const rateLimit = require('express-rate-limit');


const createBasicRateLimiter = (maxRequest, time)=> {
    return rateLimit({
        max : maxRequest,
        windowMs : time,
        message : 'Too many requests, please try again later',
        standardHeader : true,
        legacyHeader: false,
    })
}

module.exports = {createBasicRateLimiter};