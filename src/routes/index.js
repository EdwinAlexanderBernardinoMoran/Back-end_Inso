const router = require('express').Router();
const userRoute = require('./userRoute');

// http://localhost:4000/api/v1/user
function routerApi(app){
    
    app.use('/api/v1', router)
    router.use('/user', userRoute);
}

module.exports = routerApi;