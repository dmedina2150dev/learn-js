// TODO: Todas las funciones en javascript retorna undefined si no tienen por defecto algun return explicito

// Funcionl normal
function saludar( nombre ) {
    // Todas las funciones definidas con la palabra function tienen un objeto implicito llamado arguments
    // El cual hace referencia a todos los elementos pasados como argumentos a la funcion  
    console.log( arguments );
    console.log('Hola ' + nombre);
}

// Funcion anonima 
const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre );
    return 1; 

    // Despues del return el codigo no se ejecuta mas
    console.log('Soy un codigo que nunca podra ejecutarse'); 
}

// Arrow Function  Tambien conocidas como lambda function introducido en ES6
const saludarFlecha = () => {
    console.log( 'Hola flecha');
}

const saludarFlecha2 =  ( nombre )  => {
    console.log( 'Hola ' + nombre );
}

saludar('Dajan', 40, true, 'Venezuela');
// saludar();
// saludar();
const retornoDeSaludar2 =  saludar2( 'Vefy ' );
console.log( { } )



saludarFlecha();

saludarFlecha2('Vefy ');

function sumar( a, b ) {
    return a + b;
}

console.log( sumar( 2, 4 ) );

const sumar2 =  ( a, b ) => {
    return a + b;
}
console.log( sumar2( 20, 5 ) ); 

// Si el retorno es inmediato y si solo es una linea
const sumar3 =  ( a, b ) =>  a + b;
console.log( sumar3( 2, 5 ) ); 


function getAleatorio() {
    return Math.random();
}
console.log( getAleatorio() ); 

const getAleatorio2 = () => Math.random();
console.log( getAleatorio2() ); 



