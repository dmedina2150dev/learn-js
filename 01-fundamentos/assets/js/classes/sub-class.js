/**
 * TODO: Herencia de clases en Javascript
 */

 class Persona {
    
    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje () {
        console.log('Hola Soy un metodo statico');
    }


    nombre = ''; // TODO Esta declarcion es opcional
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre = 'Sin Nombre', codigo = 'Sin Código', frase = 'Sin frase' ) {
        
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


class Heroe extends Persona{

    clan = 'sin clan';

    constructor(nombre, codigo, frase) {
        /**
         * TODO cuando heredamos de otra clase y declaramos el constructor es necesario llamar 
         * super(); // TODO para invocar el constructor de la clase a la que heredamos
         */

        // this.clan = 'The Avengers'; // TODO: NO se puede declarar nada con (this) antes de invocar al constructor padre.
        // const algo = 'algo' // TODO esto si es permitido

        super(nombre, codigo, frase);
        this.clan = 'The Avengers'; // TODO Aqui si se puede declarar con (this)
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre }, ${ this.clan }`);
        /**
         * TODO: Si necesitamos usar la clase del padre se puede utilizar de
         * La siguiente forma
         */
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spriderman', 'Tu amigable vecino hombre araña');
// const spiderman = new Heroe();
console.log( spiderman );
spiderman.quienSoy();
