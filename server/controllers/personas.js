const Personas = require('../models/personas');

const obtenerPersona = async (req, res) => {
    const listadoPersonas = await Personas.find();
    res.json(listadoPersonas);
}

const agregarPersona = async (req, res) => {
    const nuevo = new Personas(req.body);
    await nuevo.save();

    res.json("ok");
}

module.exports = { obtenerPersona, agregarPersona };