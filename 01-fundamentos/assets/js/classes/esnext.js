
class Rectangulo {
    #area = 0; // TODO Asi se declaran propiedades privadas

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calcularArea() {
        console.log( this.#area * 2 );
        this.#calculaArea2();
    }

    // TODO Asi se declaran los metodos privados
    #calculaArea2() {
        console.log( 'Hola Soy un metodo privado' );
    }
}

const rectangulo = new Rectangulo(10, 15);

// rectangulo.#area = 100;
rectangulo.calcularArea();

console.log( rectangulo );