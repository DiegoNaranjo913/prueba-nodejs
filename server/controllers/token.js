const { KEYTOKEN } = require('../keys');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const crearToken = async (req, res) => {
    const token = jwt.sign({ iat: moment().unix() }, KEYTOKEN, { expiresIn: '1h' });
    console.log(token);
    res.json(token);
}

module.exports = { crearToken };