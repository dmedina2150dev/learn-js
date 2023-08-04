
/**
 * TODO Por defecto javascript no da error al instanciar la clase sin
 * TODO los paremetros del constructor().
 */
class Persona {
    // TODO los metodos y propiedades estaticas se pueden utilizar sin crear una nueva instancia de la clase
    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje () {
        // console.log( this.nombre );// Esto no se puede hacer porque no se esta trabajando con la instancia de la clase
        console.log('Hola Soy un metodo statico');
    }

    // 'use strict' // habilitado por defecto
    nombre = ''; // TODO Esta declarcion es opcional
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin Nombre', codigo = 'Sin Código', frase = 'Sin frase' ) {
        if( !nombre ) throw Error('Es necesario el nombre'); // TODO: Esta es una solucion para forzar el envio de los parametros
        console.log('Hola!');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavotita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favotita de ${ this.nombre } es ${ this.comida }`;
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spriderman', 'Tu amigable vecino hombre araña');
const ironman = new Persona('Tony Strark', 'Iroman', 'Yo soy Iroman');

console.log( spiderman );
spiderman.quienSoy();
spiderman.miFrase();
spiderman.setComidaFavotita = 'Pizzas';
spiderman.nemesis = 'Duende Verde'; // TODO: Es posible hacer set de propiedades aunque no esten definidas en la clase
// spiderman.comida = 'Pastel...!'; // TODO Esto tambien podria suceder cuando las propiedad no es privada
console.log( spiderman.getComidaFavorita );

// Asignarle valor é invocar una propiedad statica
// Persona._conteo = 2;
console.log('Conteo statico', Persona._conteo );
console.log( Persona.conteo );

// Invocar un metodo statico de una clase
Persona.mensaje();

// DEfinir propiedades staticas fuera de la clase, es posible en javascript
// TODO: Se trata a la clase como un objeto literal
Persona.propiedadExterna = 'HOlas soy una propiedad externa';
console.log( Persona.propiedadExterna );
console.log( Persona );



// console.log( ironman );
// ironman.quienSoy();
// ironman.miFrase();