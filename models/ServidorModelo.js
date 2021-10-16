const express = require('express')
const {conectarBD}=require('../database/conexion.js')

//Traer las rutas
const rutas=require('../routes/rutas.js')

class ServidorModelo {

    constructor(){

        this.app = express()
        this.despertarBD()
        this.llamarAuxiliares()        
        this.enrutarPeticion()

    }
    encederServidor(){

        this.app.listen(process.env.PUERTO,function(){
            console.log("servidor encendido..."+process.env.PUERTO)
        })        

    }

    enrutarPeticion(){

        this.app.use('/',rutas)

            }

    despertarBD(){
        conectarBD ()
    }

    //midd
     llamarAuxiliares(){
         this.app.use(express.json())


     }

}

module.exports=ServidorModelo