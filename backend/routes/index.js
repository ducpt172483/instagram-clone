const authRouter = require('./authRouter');
const postRouter = require('./postRouter');

function route(app) {

    app.use('/auth', authRouter);
    app.use('/posts', postRouter);

}

module.exports = route;