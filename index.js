const express = require('express');
const cors = require('cors');
const app = express();
const { mongoose } = require('./server/database');

app.set('port', 3000);

app.use(cors());
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log('Bienvenido al puerto', app.get('port'));
});

app.use('/api/empleados', require('./server/routes/personas'));
app.use('/api/gifs', require('./server/routes/gifs'));
app.use('/api', require('./server/routes/token'));
