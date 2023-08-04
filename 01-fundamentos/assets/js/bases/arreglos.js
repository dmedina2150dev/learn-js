
/** Forma de crear un arrglo -> parece que guarda las posiciones 
 * en memoria al mandarle el tamaño por argumento
 * 
 * */
const arr = new Array(10);
console.log( arr ); 

const arr2 = []; 
console.log( arr2 );

let videoJuegos = [ 'Mario 3', 'Mega Man', 'Chrono Triger' ];
console.log({ videoJuegos });


console.log( videoJuegos[0] );

let arregloDeCosas = [
    true,
    123,
    'Dajan',
    1 + 2,
    function() {},
    () => {},
    { a: 1 },
    [ 'X', 'Megaman', 'Zero', 'Dr Ligth', [
        'Dr. Willy',
        'Woodman' 
    ]]
];

console.log( { arregloDeCosas } )

console.log( arregloDeCosas[7][3] )
console.log( arregloDeCosas[7][4][1] )