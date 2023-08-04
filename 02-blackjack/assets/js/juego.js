/**
 * TODO Descripción de las cartas
 * 2C = Two of Clubs (Trébol)
 * 2D = Two of diamonds (Diamante)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;

// TODO: Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const btnMeQuedo = document.querySelector('#btnMeQuedo');
const btnNuevo = document.querySelector('#btnNuevo');
const small = document.querySelectorAll('small');
const smallJugador = small[0];
const smallComputador = small[1];
const cartasJugador = document.querySelector('#jugador-cartas');
const cartasComputador = document.querySelector('#computadora-cartas');


// TODO: Crear deck de cartas, nueva baraja
const crearDeck = () => {

    for( let i = 2; i <= 10; i++) {
        for( tipo of tipos ){
            deck.push( i + tipo );
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo );
        }
    }

    deck = _.shuffle( deck );
    // console.log(deck);
    return deck;
}

crearDeck();

// TODO: Pedir una nueva carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();

    return carta;
}


const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return  ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            :  valor * 1;
}

// TODO Turno de la computadora

const turnoComputadora = ( puntosMinimos ) => {
    do {
        const carta = pedirCarta();
    
        puntosComputadora += valorCarta( carta );
    
        smallComputador.innerText = puntosComputadora;
        
        //<img class="carta" src="./assets/cartas/10D.png" alt="">
        const imgCarta = document.createElement('img');
        imgCarta.classList.add('carta');
        imgCarta.src = `./assets/cartas/${ carta }.png`;
    
        cartasComputador.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout( () => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Tablas');
        } else if ( puntosMinimos > 21 ) {
            alert('Gana la casa');
        } else if ( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Gana la casa de nuevo');
        }
    }, 200);

}
 



// TODO Eventos del DOM

btnPedir.addEventListener('click', () => {
    
    const carta = pedirCarta();
    
    puntosJugador += valorCarta( carta );

    smallJugador.innerText = puntosJugador;
    
    //<img class="carta" src="./assets/cartas/10D.png" alt="">
    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.src = `./assets/cartas/${ carta }.png`;

    cartasJugador.append( imgCarta );

    if( puntosJugador > 21 ) {
        console.warn('Perdiste');
        btnPedir.disabled = true;
        btnMeQuedo.disabled = true;
        turnoComputadora( puntosJugador );
    } else if ( puntosJugador === 21 ) {
        console.warn('21 Genial');
        btnMeQuedo.disabled = true;
        turnoComputadora( puntosJugador );
    }
    
});


btnMeQuedo.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnMeQuedo.disabled = true;
    turnoComputadora( puntosJugador );
});

btnNuevo.addEventListener('click', () => {
    deck = [];
    crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    smallComputador.innerText = 0;
    smallJugador.innerText = 0;

    cartasJugador.innerHTML = '';
    cartasComputador.innerHTML = '';

    btnPedir.disabled = false;
    btnMeQuedo.disabled = false;
})
