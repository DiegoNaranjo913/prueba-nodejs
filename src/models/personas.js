const mongoose = require('mongoose');
const { Schema } = mongoose;

const personas = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: String, required: true }
});

module.exports = mongoose.model('personas', personas);