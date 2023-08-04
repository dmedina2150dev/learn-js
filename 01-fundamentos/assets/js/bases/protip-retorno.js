function crearPerson( nombre, apellido ) {
    return { nombre, apellido }
}

const persona = crearPerson( 'Dajan', 'Medina' );
console.log(persona)

// Misma funcion pero como arrow function
const crearPerson2 = ( nombre, apellido ) => ({ nombre, apellido }); // TODO: Cuando el retorno va entre llaves podemos envolver el retorno entre parentecsis
const persona2 = crearPerson2( 'Vefy', 'De Medina' );
console.log( persona2 );


// Ver el objeto arguments
function imprimeArgumentos() {
    console.log( arguments );
}

imprimeArgumentos( 10, true, false, 'Dajan', 'Hola' );

// TODO: Las arrow function no contiene el objeto arguments
// TODO: se hace algo como una destructuracion para obtener el resto, pero despues de ...args no puede ir otro paramtro, y si se define algun parametro antes ese va fuera del resto de los argumentos
const imprimeArgumentos2 = ( edad, ...agrs ) => {
    console.log( { edad, agrs } );
}

imprimeArgumentos2(10, true, false, 'Dajan', 'Hola', 'chao'); 

const imprimeArgumentos3 = ( edad, ...agrs ) => {
    // console.log( { edad, agrs } );
    return agrs;
}

const argumentosEnviados = imprimeArgumentos3(31, 24, 'Vefy', 'Dajan', 90);
console.log( argumentosEnviados )

const [ edadEsposa, nombreEsposa, Nombre, dinero ] = imprimeArgumentos3(31, 24, 'Vefy', 'Dajan', 90);
console.log({ edadEsposa, nombreEsposa, Nombre, dinero });


const { apellido } = crearPerson( 'Dajan', 'Medina' );
console.log({ apellido });


let tony = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
}; 

const imprimePropiedades = ( personaje ) => {
    console.log( 'nombre',  personaje.nombre );
    console.log( 'codeName',  personaje.codeName );
    console.log( 'vivo',  personaje.vivo );
    console.log( 'edad',  personaje.edad );
    console.log( 'trajes',  personaje.trajes );
}
imprimePropiedades( tony );


const imprimePropiedades2 = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}
imprimePropiedades2( tony );