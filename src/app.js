const express = require('express');
const { json } = require('express')
const port  = process.env.PORT || 4000;
const cors = require('cors')
const routerApi = require('./routes')

//initialization
const app = express();

//configurations
app.set('port', port);

const whiteList = ['http://localhost:4000', 'https://myapp.com'];
const options = {
    origin: (origin, callback) => {
        if (whiteList.includes(origin) || !origin) {
            callback(null, true)
        } else {
            callback(new Error('no permitido'))
        }
    }
}

// //middleware that convert the requirements in json
// app.use( function(req, res ,next){
//     res.header( 'Access-Control-Allow-Origin', "*" )
//     res.header( 'Access-Control-Allow-Methods', " GET, POST, PUT, PATCH, DELETE" )
//     res.header( 'Access-Control-Allow-Headers', "Origin, X-Request-Width, Content-Type, Accep")
//     next()
//   })
app.use(json());
app.use(cors(options));

//routes
routerApi(app);

//middlares
const ErrorsHandler = require('../middlewares/errorsHandler')
const errorsHandler = new ErrorsHandler()
app.use(errorsHandler.logErrors);
app.use(errorsHandler.errorHandler);
app.use(errorsHandler.boomErrorHandler);
app.use(errorsHandler.ormErrorHandler);

setTimeout(() => {
    console.clear()
}, 1000000);

module.exports = app;