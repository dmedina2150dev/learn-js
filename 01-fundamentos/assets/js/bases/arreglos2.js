/**
 * Propiedades y metodos basicos que tienen los arreglos
 * Metodos: Son funciones que vienen internas dentro de los arreglos
 * Propiedades: Son como variables que vienen dentro de todos los arreglos 
 */
 
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log( 'Largo:', juegos.length ); 

let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1 ]; 

console.log({ primero, ultimo });

// Para recorrer y hacer operaciones con cada uno de los elementos
juegos.forEach( (elemento, indice, arr ) => {
    console.log({ elemento, indice, arr });
});

// Añadir un nuevo elememto al final del array
let nuevaLongitud = juegos.push( 'F-Zero' ); 
console.log({ nuevaLongitud, juegos });

// Añadir un nuevo elemento al principio del arrat
nuevaLongitud = juegos.unshift( 'Fire Emble' );
console.log({ nuevaLongitud, juegos });


// Borrar el ultimo Elemento del array
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

// Borrar un elemento por su indicie
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos }); 


// Encontrar el index de un elemento
let metroidIndex = juegos.indexOf('Metroid'); // CaSeSeNsItIvE
console.log({ metroidIndex }); // Si devuelve -1 es porque no lo encontro