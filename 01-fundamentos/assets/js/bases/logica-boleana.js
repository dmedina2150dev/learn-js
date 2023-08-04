const regresaTrue = () => {
    console.log( 'Regresa true' );
    return true;
}

const regresaFalse = () => {
    console.log( 'Regresa false' );
    return false;
}

console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true


console.log( !regresaFalse() ); // true


console.warn('Operador AND');
console.log( true && true ); // true
console.log( true && false ); // false
console.log( true && !false ); // true

console.log('Otra desicions', regresaFalse() || true || true || false );


console.log('===========');
console.log( regresaFalse() && regresaTrue() ); // false TODO: siempre que la primera comprobacion sea falsa ignora la otra comprobación 

console.log('===========');
console.log( regresaTrue() && regresaFalse() ); // false

console.log('===== && ======');
regresaTrue() && regresaFalse();

console.log('===== && firts false ======');
regresaFalse() && regresaTrue();

console.warn('OR');

console.log( true || false ); // true
console.log( false || false ); // false TODO: unica forma de que OR salga falso

console.log( regresaTrue() || regresaFalse() ); // true siempre que la primera comprobacion sea verdadera ignora la otra comprobación 


console.log('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse;
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;
console.log({ a1, a2, a3, a4, a5, });

if ( true || true ||false ) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}
