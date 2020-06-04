const express = require('express');
const conectarDB = require('./config/db'); //SIGUIENTE: CAPÍTULO 25

//Crear el servidor
const app = express();

//Conectar a la BD
conectarDB();

//Habilitar express.json
app.use(express.json({ extended: true }));

//Puerto del servidor
const PORT = process.env.PORT || 4000;

//Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));


//Arrancar servidor
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});