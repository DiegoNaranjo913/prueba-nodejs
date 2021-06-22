const Personas = require('../models/personas');

const obtenerEmpleados = async (req, res) => {
    const listadoPersonas = await Personas.find();
    console.log(listadoPersonas);
    res.json(listadoPersonas);
}

module.exports = { obtenerEmpleados };