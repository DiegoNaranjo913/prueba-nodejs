const express = require('express');
const router = express.Router();
const token = require('../controllers/token');

router.get('/', token.crearToken);

module.exports = router;