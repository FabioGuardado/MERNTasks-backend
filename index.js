const express = require('express');
const conectarDB = require('./config/db');

//Crear el servidor
const app = express();

//Conectar a la BD
conectarDB();

//Puerto del servidor
const PORT = process.env.PORT || 4000;


//Arrancar servidor
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});