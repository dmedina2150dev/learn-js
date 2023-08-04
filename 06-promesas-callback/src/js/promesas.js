const heroes = {
    capi: {
        nombre: 'Capitán América',
        porder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Iroman',
        porder: 'Absurda cantiadad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        porder: 'La mejor reacción alergica a las picaduras de arañas'
    },
}

export const buscarHeroe = ( id ) => {
    const heroe = heroes[id];

    // Dentro de la promesa se recibe la funcion (callbacks) que queremos ejecutar
    return new Promise( ( resolve, reject ) => {

        if ( heroe ) {
            setTimeout(() => resolve( heroe ), 1000);
        } else {
            reject(`No existe un héroe con el id ${ id } `);
        }

    });
}


const promesaLenta = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Promesa Lenta') , 2000 );
});

const promesaMedia = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Promesa Media') , 1500 );
});

const promesaRapida = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Promesa Rápida') , 1000 );
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida 
}

export const buscarHeroeAsync = async ( id ) => {
    const heroe = heroes[id];
    // TODO Las funciones Async devuelven por defefto un new Promise()

    if ( heroe ) {
        return heroe;
    } else {
        // throw `No existe un héroe con el id ${ id } `;
        throw Error(`No existe un héroe con el id ${ id } `); // TODO Si no sabemos por que se diparar el error para identificarlo se podria mandar de esta forma
    }

}