const express = require('express');
const morgan = require('morgan');
const routerUser = require('./routes/user.routes.js');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(routerUser);

app.listen(8000, () => {
    console.log('Servidor corriendo en el puerto 8000');
});