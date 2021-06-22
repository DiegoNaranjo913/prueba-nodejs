const mongoose = require('mongoose');
const { URI } = require('./keys');

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("Conectada"))
    .catch(err => console.log("error"));

module.exports = mongoose;