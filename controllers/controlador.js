


// el controlador se encargara de administrar las peticiones y respuestas

const {request,response}=require('express')

//importar el servicio para poder usarlo

    
    const {insertarJugador}=require('../services/servicios.js')

// cuales son operaciones que debe realizar mi servidor

//registrar un juegador
//buscar un juegador
//buscar todos los jugadores
//Editar un jugadores
//Eliminar un  jugador


 async function registrarJugador(peticion=request, respuesta=response){

// capturo los datos que llegan el en cuerpo  de la peticion
    let datosCliente=peticion.body;

    try{

        await insertarJugador(datosCliente)
        respuesta.status(200).json({

            estado:true,
            mensaje: "Éxito registrando el jugador"
        })

    }catch(error)
    {
        respuesta.status(400).json({
            estado:false,
            mensaje: "upssss..."+ error
    })
    }
 }


function buscarJugador(peticion=request, respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando un jugador"
        }
        )
}

function buscarJugadores(peticion=request, respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando todos los jugadores"
        }
        )
    }

function editarJugador(peticion=request, respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy editando un jugador"
        }
        )
}


function eliminarJugador(peticion=request, respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy eliminando un jugador"
        }
        )

}

module.exports={
    registrarJugador,
    buscarJugador,
    buscarJugadores, 
    editarJugador,
    eliminarJugador
}
