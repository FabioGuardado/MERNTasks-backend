const express =  require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const auth = require('../middlewares/auth');
const { check } = require('express-validator');

// api/tareas

// Crear una tarea
router.post('/',
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('proyecto', 'El proyecto es obligatorio').not().isEmpty()
    ],
    tareaController.crearTarea
);

// Obtener las tareas por proyecto
router.get('/',
    auth,
    tareaController.obtenerTareas
);

// Actualizar una tarea
router.put('/:id',
    auth,
    tareaController.actualizarTarea
);

//Eliminar una tarea
router.delete('/:id',
    auth,
    tareaController.eliminarTarea
);

module.exports = router;