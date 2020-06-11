const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Crear el servidor
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

//Conectar a la BD
conectarDB();

//Habilitar CORS
app.use(cors());

//Habilitar express.json
app.use(express.json({ extended: true }));

//Puerto del servidor
const port = process.env.port || 4000;

//Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));


//Arrancar servidor
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});