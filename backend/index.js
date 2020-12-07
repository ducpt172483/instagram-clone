const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const createError = require('http-errors');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

const route = require('./routes');
const db = require('./config/db');
// const {handleError} = require('./helpers/error');

// Connect to DB
db.connect();

// log req body
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('dev'));

app.use(cors());


// Routes init 
route(app);

// app.use((err, req, res, next) => {
//     handleError(err, res);
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError.NotFound('This route does not exist'));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        }
    })
})


app.listen(port, () => {
    console.log(`App is listening on ${port}`);
})