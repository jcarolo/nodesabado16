// importo el modelo de datos 

const JugadorModelo= require('../models/JugadorModelo.js')

//servicion para agregar un documeto a la BASEDATOS

async function insertarJugador (datosJugador){
    let jugadorAInsertar= new JugadorModelo(datosJugador)
    
    return await jugadorAInsertar.save()
}
module.exports={
    insertarJugador

}