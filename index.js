require('dotenv').config();
const app = require('./src/app');

app.listen(app.get("port"), ()=>{
    try {
        console.log(`Servidor corriendo en el puerto: http://localhost:${app.get('port')}`);
    } catch (error) {
        console.error(error);
    }
});