const authRouter = require('./authRouter');
const postRouter = require('./postRouter');

function route(app) {

    app.use('/auth', authRouter);
    app.use('/post', postRouter);

}

module.exports = route;