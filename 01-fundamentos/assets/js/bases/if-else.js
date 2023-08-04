let a = 5;

if ( a >= 10) {
    console.log( 'A es mayor o igual a 10 ' );
} else {
    console.log( 'A es menor a 10 ' );

}

// console.log('Fin de programa');

const hoy = new Date();
console.log( hoy );

let dia = hoy.getDay();
console.log({ dia });

if ( dia === 0 ) {
    console.log('Es Domingo ');
} else {
    console.log('No es domingo');
}


// Ejercicio
let diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log( diasDeLaSemana[dia] ); 

let diasLetras = {
    0: 'Domingo', 
    1: 'Lunes', 
    2: 'Martes', 
    3: 'Miércoles', 
    4: 'Jueves', 
    5: 'Viernes', 
    6: 'Sábado'
}
dia = 10;
console.log( diasLetras[dia] || 'Día no valido');

let diasLetras2 = {
    0: () => 'Domingo - 0',
    1: () => 'Lunes - 1',
    2: () => 'Martes - 2',
    3: () => 'Miércoles - 3',
    4: () => 'Jueves - 4',
    5: () => 'Viernes - 5',
    6: () => 'Sábado - 6'
}
dia = 3;
console.log( diasLetras2[dia]() ); // Con esos parentecis llamas a la funcion definida en el objeto
