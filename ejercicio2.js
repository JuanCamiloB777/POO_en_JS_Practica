function Mascota(nombre,especie,edad,peso){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;
    this.saludo = function(){
        return `Nombre:${this.nombre} especie: ${this.especie} edad:${this.edad} peso: ${this.peso}`
    };
}

const mascota1 = new Mascota("Wilson","Gato","4","8 Kilos")
const mascota2 = new Mascota("Rasppy","Gato","6","10 Kilos")
const mascota3 = new Mascota("Sasha","Pastor Aleman","10","20 Kilos")
console.log(mascota1.saludo())
console.log(mascota2.saludo())
console.log(mascota3.saludo())