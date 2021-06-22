const express = require('express');
const router = express.Router();
const personas = require('../controllers/personas');
const { verificar } = require('../middleware/verificacion');

router.get('/',verificar, personas.obtenerEmpleados);

module.exports = router;