const createError = require('http-errors');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

class AuthController {
    index(req, res) {
        res.send({
            success: true
        })
    }

    // [POST] /auth/signup
    async signup(req, res, next) {
        let {
            name,
            email,
            password
        } = req.body;

        if (!email || !name || !password) {
            return next(createError(400, 'Vui lòng nhập đầy đủ thông tin.'));
        }

        try {
            const savedUser = await User.findOne({
                email
            });

            if (savedUser) {
                return next(createError(400, 'Email này đã tồn tại.'));
            }

            password = await bcrypt.hash(password, saltRounds);

            const newUser = new User({
                email,
                password,
                name
            });

            await newUser.save();

            res.json({
                newUser
            })
        } catch (error) {
            return next(createError(500, error));
        }
    }

    // [POST] /auth/signin
    async signin(req, res, next) {
        let { email, password } = req.body;

        if(!email || !password) {
            return next(createError(400, 'Vui lòng nhập email/password'));
        }

        try {
            const savedUser = await User.findOne({
                email
            });

            if (!savedUser) {
                return next(createError(400, 'Email hoặc mật khẩu không chính xác.'));
            }

            const isMatch = await bcrypt.compare(password, savedUser.password);

            if(isMatch) {
                const accessToken = await jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET_FOR_ACCESS_TOKEN);
                res.json({accessToken})
            } else {
                return next(createError(400, 'Email hoặc mật khẩu không chính xác.'));
            }
        } catch (error) {
            return next(createError(500, error));
        }
    }

    async protected(req, res, next) {
        res.send('Hello world!')
    }

}

module.exports = new AuthController;