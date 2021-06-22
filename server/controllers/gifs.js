const axios = require('axios');
const { URLGIFS, KEYGIFS, SEARCH } = require('../keys');

const obtenerGifs = async (req, res) => {
    const listaGifs = await axios.get(`${URLGIFS}api_key=${KEYGIFS}&q=${SEARCH}&limit=10`);
    console.log(listaGifs.data);
    res.json(listaGifs.data);
}

module.exports = { obtenerGifs };