const express = require('express');
const router = express.Router();
const gifs = require('../controllers/gifs');
const { verificar } = require('../middleware/verificacion');

router.get('/', verificar, gifs.obtenerGifs);

module.exports = router;