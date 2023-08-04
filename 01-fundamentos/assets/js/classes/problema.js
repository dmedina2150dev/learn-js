
const fer = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log( `Nombre: ${ this.nombre } - edad: ${ this.edad }` )
    }
}
fer.imprimir();

const pedro = {
    nombre: 'Pedro',
    edad: 20,
    imprimir() {
        console.log( `Nombre: ${ this.nombre } - edad: ${ this.edad }` )
    }
}
pedro.imprimir();

// TODO Alternativa para crear objetos con herencias
function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log( `Nombre: ${ this.nombre } - edad: ${ this.edad }` )
    }
    
}

const maria = new Persona('Maria', 18);
const melisa = new Persona('Melissa', 35);
console.log(maria);
maria.imprimir();
melisa.imprimir();
