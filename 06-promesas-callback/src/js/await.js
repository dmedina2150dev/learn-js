import { buscarHeroeAsync, buscarHeroe } from './promesas';

const heroesIds = ['capi', 'iron', 'spider'];
// const heroesPromesas = heroesIds.map( id => buscarHeroe( id ) ); // TODO es lo mismo que lo de la siguiente linea
const heroesPromesas = heroesIds.map( buscarHeroe );


export const obtenerHeroesArr =  async () => {
    const heroesArr = [];

    for( const id of heroesIds ){
        // buscarHeroeAsync( id ).then( heroe => heroesArr.push( heroe ) );
        // const heroe = await buscarHeroe(  id );
        // heroesArr.push( heroe );

        // TODO Mejoras protip
        heroesArr.push( buscarHeroe( id ) );
    }

    // setTimeout( () => {
    //     console.log('Obtener heroes');
    //      console.table( heroesArr );
    // }, 1000 );

    // return heroesArr;
    // TODO Mejoras ProTip
    return await Promise.all( heroesArr );
}


// TODO ProTip Refactor funcion
export const obtenerHeroesArrRefactor =  async () => {
    return await Promise.all( heroesIds.map( buscarHeroe ) );
}

export const obtenerHeroeAwait =  async ( id )  => {

    try {

        const heroe =  await buscarHeroeAsync( id );
        return heroe;

    } catch ( error ) {
        console.log('CATH!!!');
        throw error ;
    }

}

export const heroesCiclo = async () => {

    console.time('HeroesCiclo');

    // TODO Se podria hacer de esta manera 
    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log( heroe ) );


    // TODO O tambien utilizar un for await
    for await ( let heroe of heroesPromesas ) {
        console.log( heroe )
    }

    
    console.timeEnd('HeroesCiclo');
    // console.log( heroes ); 

}

// TODO ejemplo if await
export const heroeIfAwait =  async ( id ) => {

    if( (await buscarHeroeAsync( id )).nombre === 'Iroman' ) {
        console.log('Es el mejor de todos');
    } else {
        console.log(' Nahhhhh ');
    }
}