import { obtenerHeroesArr, obtenerHeroesArrRefactor, obtenerHeroeAwait, heroesCiclo, heroeIfAwait } from "./js/await";


console.time('await');
obtenerHeroesArr()
    .then( heroes =>  {
    
        console.table( heroes );

        console.timeEnd('await');
    } );



console.time('await Refactor');
obtenerHeroesArrRefactor()
    .then( heroes =>  {
    
        console.table( heroes );

        console.timeEnd('await Refactor');
    } );



console.time('await manejo Errores');
obtenerHeroeAwait('capi2')
    .then( heroe => {
        console.log( heroe );

        console.timeEnd('await manejo Errores')
    } )
    .catch( console.warn );



heroesCiclo();

heroeIfAwait('iron');