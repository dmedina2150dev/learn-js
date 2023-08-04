
let a = 10;
let b = a;

a = 30;
console.log({ a,b });

// Pasar valores por referencia
/**
 * TODO: En Javascript todos los objetos son pasados por referencia.
 * TODO: todos los primitivos son pasados por valor, y todos los objetos son pasados por referencia
 */
let juan = { nombre: 'Juan' };
let ana  = juan;
ana.nombre = 'Ana';
console.log({ juan, ana });



const cambiarNombre = ( persona ) => {
    persona.nombre = 'Tony';
    return persona; 
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre( peter );
console.log({ peter, tony }); 

// TODO: Para romper la referencia se usa el spreet operation.
const cambiarNombre2 = ({ ...persona} ) => {
    persona.nombre = 'Tony2';
    return persona; 
}

let peter2 = { nombre: 'Peter2' };
let tony2 = cambiarNombre2( peter2 );
console.log({ peter2, tony2 }); 


// CON ARREGLOS
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spreed');
const otrasFrutas2 = [...frutas];
console.timeEnd('spreed');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas, otrasFrutas2  });