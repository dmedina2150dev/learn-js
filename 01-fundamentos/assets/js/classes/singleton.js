/**
 * TODO: Singleton es una instancia unica de una clase
 * Esto significa que no importa cuantes veces ni en que lugar
 * del codigo sea llamada esta clase siempre retornara la misma instancia
 */

class Singleton {
    // TODO Esto identifica que es un singleton
    static #instancia;
    nombre = '';

    constructor(nombre = '') {

        // const a = undefined;
        // console.log(a);
        // console.log(!a);
        // console.log(!!a);

        if ( !!Singleton.#instancia ) {
            return Singleton.#instancia;
        }
        
        Singleton.#instancia = this;
        this.nombre = nombre;

        // return this; // TODO en el constructor de una clase se retorna por defecto el (this) la instancia
    }

}

const instancia1 = new Singleton('Iroman');

console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);

const instancia2 = new Singleton('Spiderman');

console.log(`Nombre en la instancia2 es: ${ instancia2.nombre }`);

const instancia3 = new Singleton('Black Panther');

console.log(`Nombre en la instancia3 es: ${ instancia3.nombre }`);
