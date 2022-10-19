const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors')

const server = express();
dotenv.config(); // jwt

const port = process.env.PORT
const encabezado = process.env.ENCABEZADO
const mensaje = process.env.MENSAJE

server.listen(port, () => {
    console.log(`Ejecutando en el puerto ${port}`.rainbow.bgWhite)
});

server.get('/', (req, res) => { // (require,response)
    res.send(` 
    <center>
<table border="1">
  <tr>
  <th colspan="3">${encabezado}</th>
  </tr>
  <tr>
  
  <th>Port</th>
  <th colspan="2">${mensaje}</th>
  </tr>
  <tr>
  <td>${port}</td>
    <td colspan="2"><img src=""></td>
  </tr>
</table> 
</center>
  `);
})
