const prompt = require(`prompt-sync`)();
function Vehiculo(marca,color,disponible){
    this.marca = marca
    this.color = color
    this.disponible = disponible
    this.informacion=function(){
        return `El ${this.marca} tiene un color ${this.color} y se encuentra ${this.disponible}`
    }
    this.disponibilidad = function(){
        const validacion = prompt(`¿El vehiculo se encuentra disponible? responde si o no: `)
        if(validacion.toLowerCase()===`si`){
            this.disponible= true
            return `Se registro: El vehiculo esta disponible`
        }else{
            this.disponible = false
            return `Se registro: El vehiculo no se encuentra disponible`
        }
    }
    this.cambioColor = function(){
        const validacionColor = prompt(`¿Cual es el color nuevo del vehiculo?: `)
        this.color = validacionColor
        return `Se actualizo el color a ${this.color}`
    }
}
const marca = prompt(`Ingrese la marca del vehiculo: `)
const color = prompt(`Ingrese el color del vehiculo: `)
let disponible = false
const disponibleMensaje = prompt(`¿El vehiculo se encuentra disponible? responde si o no: `)
if(disponibleMensaje.toLowerCase()===`si`){
    disponible = true
}else{
    disponible = false
}
const cliente1 = new Vehiculo(marca,color,disponible)
let loop = true
while(loop === true){
     const pregunta = prompt(`¿que desea hacer? (disponibilidad - color - informacion) si no vas a modificar nada responde no: `)
    if(pregunta.toLowerCase()===`disponibilidad`){
        console.log(cliente1.disponibilidad())
    }else if(pregunta.toLowerCase()===`color`){
        console.log(cliente1.cambioColor())
    }else if(pregunta.toLowerCase()===`informacion`){
        console.log(cliente1.informacion())
    }else if(pregunta.toLowerCase()===`no`){
        loop = false
    }
}