const authRouter = require('./authRouter');
const postRouter = require('./postRouter');
const productsRouter = require('./productsRouter');

function route(app) {

    app.use('/auth', authRouter);
    app.use('/posts', postRouter);
    app.use('/products', productsRouter);

}

module.exports = route;