import { buscarHeroe as buscarHeroeCallbacks} from './js/callbacks'; // TODO Se le puede colocar un alias y solo funcionara en este archivo con ese alias.
import { buscarHeroe } from './js/promesas';
import './styles.css'; 

// Callbacks
console.group('Callbacks');

const heroeId1 = 'capi';
const heroeId2 = 'iron';
const heroeId3 = 'spider';

buscarHeroeCallbacks( heroeId1, ( err, heroe1 ) => {

    // if ( err ) {
    //     console.error( err );
    // } else {
    //     console.info( heroe );
    // }

    if ( err ) { return console.error( err ); }

    buscarHeroeCallbacks( heroeId2, ( err, heroe2 ) => {
        if ( err ) { return console.error( err ); }

        buscarHeroeCallbacks( heroeId3, ( err, heroe3 ) => {
            if ( err ) { return console.error( err ); }
    
            console.log(`Enviando a ${ heroe1.nombre }, ${ heroe2.nombre } y ${ heroe3.nombre } a la misión `);
        });

        // console.log(`Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión `);
    }); 
}); 

console.groupEnd('Fin del callbacks');


console.group('Promesas');

// buscarHeroe( heroeId1 )
//     .then( heroe1 => {
//         // console.log(`Enviando a ${ heroe.nombre } a la misión `);
//         buscarHeroe( heroeId2 ).then( heroe2 => {
//             console.log(`Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión `);
//         });
//     });


// TODO Resolver un posible Promise Hell
// TODO Si una de las promesas falla dentro de (Promise.all) No se resolvera ninguna, se ira directo al error
Promise.all([ buscarHeroe( heroeId1 ), buscarHeroe( heroeId2 ) ] )
    .then( ([ heroe1, heroe2 ])  => {
        // console.log( heroes );
        // console.log(`Enviando a ${ heroes[0].nombre } y ${ heroes[1].nombre } a la misión `);
        console.log(`Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión `);
    })
    .catch( err => {
        alert( err );  
    })
    // TODO Esto se ejuta despues del (then) o del (catch)
    .finally( () => {
        console.log('Se termino promise.all');
    });


console.groupEnd('Fin de Promesas');