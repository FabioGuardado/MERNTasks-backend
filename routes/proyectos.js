const express =  require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middlewares/auth');
const { check } = require('express-validator');

//Crea proyectos
//api/proyectos
router.post('/', 
    auth,
    [
        check('nombre', 'el nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
);

//Obtener los proyectos
router.get('/', 
    auth,
    proyectoController.obtenerProyectos
);

//Actualizar proyectos vía ID
router.put('/:id',
    auth,
    [
        check('nombre', 'el nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
);

//Eliminar un proyecto
router.delete('/:id',
    auth,
    proyectoController.eliminarProyecto
);

module.exports = router;