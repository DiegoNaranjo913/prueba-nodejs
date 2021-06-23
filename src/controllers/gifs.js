const axios = require('axios');
const { URLGIFS, KEYGIFS } = require('../keys');

const obtenerGifs = async (req, res) => {
    const valor = req.body.query;
    const listaGifs = await axios.get(`${URLGIFS}api_key=${KEYGIFS}&q=${valor}&limit=10`);
    res.json(listaGifs.data);
}

module.exports = { obtenerGifs };