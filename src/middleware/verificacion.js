const jwt = require('jsonwebtoken');
const { KEYTOKEN } = require('../keys');

exports.verificar = (req, res, next) => {
    if (!req.headers['authorization']) { return res.status(401).send({ message: "No tiene autorización" }); }

    const token = req.headers['authorization'].split(" ")[1];
    jwt.verify(token, KEYTOKEN, (err, decode) => {
        if (err) return res.status(401).send({ message: "El Token es inválido" });
        next();
    });
}