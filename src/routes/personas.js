const express = require('express');
const router = express.Router();
const { obtenerPersona, agregarPersona } = require('../controllers/personas');
const { verificar } = require('../middleware/verificacion');

router.get('/', verificar, obtenerPersona);

router.post('/', verificar, agregarPersona);

module.exports = router;