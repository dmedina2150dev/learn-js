import { buscarHeroe, buscarHeroeAsync, promesaLenta, promesaMedia, promesaRapida } from './js/promesas';

// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida .then( console.log );

// TODO Promise.race nos permite ejecutar las promesas en conjunto y obtener la respuesta de la promesa que se resuelve  más rápido (SIN IMPORTAR SI ES reject o resolve)
Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
    .then( mensaje => console.log( mensaje ))
    .catch( console.warn );
// TODO Si alguna de las promesas da un error el interprete de Javascript hara que esa promesa sea ignorada. A pesar de dar error


// TODO Diferencias entre una promesa normal y un Async
buscarHeroe( 'capi2' )
    .then( heroe => console.log( heroe ) )
    .catch( console.warn );

buscarHeroeAsync( 'iron2' )
    .then( heroe => console.log( heroe ) )
    .catch( console.warn );

