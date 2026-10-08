function Estudiante(nombre, nota) {
  this.nombre = nombre;
  this.nota = nota;
  this.aprobado = function() {
    return this.nota >= 3.0;
  };
  this.resultado = function() {
    return `${this.nombre}: ${this.aprobado() ? "aprobado" : "reprobado"}`;};
}

const estudiante1 = new Estudiante("Luna", 2.0);
const estudiante2 = new Estudiante("Mara", 4.0);
const estudiante3 = new Estudiante("Natsuki", 3.0);

console.log(estudiante1.resultado()); 
console.log(estudiante2.resultado()); 
console.log(estudiante3.resultado()); 


