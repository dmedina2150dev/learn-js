
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

export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];

    if( heroe ) {
        // En caso de que existe se manda null el error 
        callback( null, heroe );
    } else {
        // TODO ( Siempre por estantar el primer argumento del callback debe ser un error )
        callback(`No existe un héroe con el id ${ id } `);
    }


}