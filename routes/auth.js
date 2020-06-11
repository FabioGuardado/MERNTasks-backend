//Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const authController = require('../controllers/authController');
const { check } = require('express-validator');

//Autenticar
// /api/auth

router.post('/',
    authController.autenticarUsuario
);

// Obtiene el usuario autenticado
router.get('/', 
    auth,
    authController.usuarioAutenticado
);

module.exports = router;