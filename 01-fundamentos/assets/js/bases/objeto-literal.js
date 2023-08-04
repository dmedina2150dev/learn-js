// Objetos literales

let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.79
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu California'
    }
};

console.log( personaje );

console.log( 'Nombre: ', personaje.nombre );

// Otra forma de acceder a las propiedades
console.log( 'Nombre: ', personaje['nombre'] );

console.log( 'Edad: ', personaje.edad );

console.log( 'Coors:', personaje.coords.lat );

console.log( 'Nro. Trajes:', personaje.trajes.length ); 
console.log( 'Ultimo. Trajes:', personaje.trajes[ personaje.trajes.length - 1 ] );

const x = 'vivo';
console.log( 'Vivo:', personaje[x] ); 


// Mas detalles sobre objetos 
let urlDocumentacion = 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object';

// Eliminar una propiedad de un objeto literal
delete personaje.edad;
console.log( personaje );

// Añadir una propiedad a un objeto literal
personaje.casado = true; 

// Convertir un objeto literal a un array pares de valores
const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// Bloquear las modificación de propiedades a un objeto literal
Object.freeze( personaje );
personaje.dinero = 10000000;
personaje.casado = false;
// Las propiedades dentro de las propiedades del obejto si se modifican
personaje.direccion.ubicacion = 'Republica Checa';
console.log( personaje );


// Listar todas las propiedades de un objeto literal
const properties = Object.getOwnPropertyNames( personaje );
console.log( properties );

// Listar los valores de un objeto literal
const values = Object.values( personaje );
console.log( values );