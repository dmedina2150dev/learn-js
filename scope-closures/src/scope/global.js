// Se puede acceder a ella desde cualquier lugar de la aplicación
var hello = 'Hello';
var hello = 'Hello +'; // Esto es una mala practica
let world = 'Hello World';
// Esto es una error no se puede volver a declarar y asignar con el mismo nombre
// let world = 'Hello';
const helloWorld = 'Hello World!';


const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}
anotherFunction();

// Esto es una mala practica asignar una variable global de esta forma
const helloWorld = () => {
    globalVar = 'im global';
}
helloWorld();
console.log(globalVar);

// Esto es una mala practica asignar una variable global de esta forma
const anotherFunction = () => {
    var localVar = globalVar = 'Im Global';
}
anotherFunction();
console.log(globalVar);
