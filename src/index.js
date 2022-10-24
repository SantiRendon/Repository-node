// require de los modulso instalados
const morgan = require('morgan');
const colors = require('colors');
const express = require('express');
const server = express();

// Configuraciones del entorno
server.set('port', process.env.PORT || 3000);
server.set('json spaces', 2) // linea de codigo para que el json se formatee en el navegador

server.get('/', (req, res) => {
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})

// Iniciando el servidor
server.listen(server.get('port'), () => {
    console.log(`servidor ejecutando en el puerto ${server.get('port')}`);
})




