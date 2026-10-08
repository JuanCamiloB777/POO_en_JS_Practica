function Computador(marca,procesador,ram,precio){
    this.marca = marca,
    this.procesador = procesador,
    this.ram = ram,
    this.precio = precio
}

const marca1 = new Computador("Xiaomi","AMD","16GB","5 soles peruanos")
const marca2 = new Computador("Lenovo","AMD","8GB","20 soles peruanos")
const marca3 = new Computador("Acer","Intel","8GB","90 soles peruanos")
console.log(marca1,marca2,marca3)