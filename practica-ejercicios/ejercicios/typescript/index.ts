console.log('Hello, TypeScript');

// Funciones
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(2, 3);
const sum1 = add(5, 6);

function createAdder(a: number): (number) => number {
    return function (b: number) {
        return a + b;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(8);


function fullName(firstName: string, lastName: string = "Smith"): string {
    return `${firstName} ${lastName}`;
}
const richerd = fullName('Richard');
console.log(richerd);

// Types Dates
let muted: boolean = true;
muted = false;
// muted = "Callado"; // Error

// números
let numerador: number = 42;
let denominador = 6;
let resultado = numerador / denominador;

// string
let nombre: string = "Dajan";
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["Dajan", "Vefy", "Nevi"];
// people.push(1231);// Error

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Dajan");
peopleAndNumbers.push(30);

// Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo"
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color Favorito es ${colorFavorito}`);


// Any
let comodin: any = "Joker";
comodin = { type: 'Wildcard'};

// Object
let someObject = { type: 'wildcard' };


// Interfaces
interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color.Azul;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 5,
    color: Color.Azul
}

function area(r:Rectangulo) {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
    return this.color ? `Un rectangulo ${this.color}` : `Ùn rectangulo`;
}
console.log(rect.toString())