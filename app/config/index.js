const path = require('path') // modulo para escoger y ver ruta de archivos


const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, `enviroment/${process.env.ENTORNO}.env`)
})

module.exports= callbackPort = ()=>{server.listen(port,()=>{
    let msj = `La aplicacion se está ejecutando en el puerto ${port}` 

    switch (process.env.ENTORNO) {

        case 'qa':
            console.log(msj.bgYellow)
        break;

        case 'production':
            console.log(msj.bgRed)
        break;
    
        case 'developer':
            console.log(msj.bgGreen)
        break;

        default:
            console.log(msj.rainbow)
        break;
    }

})}