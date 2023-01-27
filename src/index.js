const express = require('express');
const { json } = require('express')
const port  = 300| process.env.PORT;
const cors = require('cors')

//initialization
const app = express();

//configurations
app.set('port' , port);
const whiteList = ['http://localhost', 'https://myapp.com'];
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
app.use(cors(options))

//routes