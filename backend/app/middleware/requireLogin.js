const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = (req, res, next) => {
    const {
        authorization
    } = req.headers;

    if (!authorization) {
        return next(createError(401, 'Bạn cần phải đăng nhập.'));
    }

    const accessToken = authorization.replace('Bearer ', '');

    jwt.verify(accessToken, process.env.JWT_SECRET_FOR_ACCESS_TOKEN, (error, payload) => {
        if(error) {
            return next(createError.Unauthorized());
        }

        const {_id} = payload;

        User.findById(_id)
            .then(userData => {
                // console.log(userData);
                req.user = userData;
                next();
            })
    });
};