function Libros(nombreLibro,catalogo){
    this.nombreLibro = nombreLibro
    this.catalogo = catalogo
    this.prestado = false
    this.prestar = function(){
        if(this.nombreLibro===this.nombreLibro &&this.prestado === false){
            this.prestado=true
            return `el libro ${this.nombreLibro} a sido prestado`}
        else{
            return `El libro ${this.nombreLibro} no se encuentra disponible`
        }}
    this.devolver = function(){
        if(this.nombreLibro===this.nombreLibro &&this.prestado === true){
            this.prestado=false
            return `el libro ${this.nombreLibro} a sido devuelto`
        }else{
            return `El libro ${this.nombreLibro} nunca a sido prestado o_0`
        }
    }
}
const cliente1 = new Libros("flechipolla","fino")
console.log(cliente1.prestar())
console.log(cliente1.prestar())
console.log(cliente1.devolver())