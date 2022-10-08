/**
 * let & const tienen un scope de bloque
 * var tiene scope de funcion o global
 */
const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';

        console.log(fruits2);// Aqui si tenemos acceso
        console.log(fruits3);// Aqui si tenemos acceso
    }

    console.log(fruits1);
    //console.log(fruits2);// Aqui no podran tendremos acceso a las variable
    //console.log(fruits3);// Aqui no podran tendremos acceso a las variable
};
fruits();

// otro ejemplo
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);
// cada uno muestra su resultado sin afectarse una variable con otra

// ejmplo con var
var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);
// se traspa el valor del bloque al valor de la variable global


// Otro ejemplo
const anotherFunctionVar = () => {
    for( var i = 0; i < 10; i++) {

        setTimeout( () => {
            console.log(i)// nos muesta 10
        }, 1000)
    }
}
anotherFunction();

const anotherFunctionLet = () => {
    for( let i = 0; i < 10; i++) {

        setTimeout( () => {
            console.log(i)// nos muesta 10
        }, 1000)
    }
}
anotherFunctionLet();