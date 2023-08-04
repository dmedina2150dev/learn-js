/**
 * TODO Descripción de las cartas
 * 2C = Two of Clubs (Trébol)
 * 2D = Two of diamonds (Diamante)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

// TODO funcion anonima auto invocada
const modulo = (() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];


    let puntosJugadores = [];

    // TODO: Referencias HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnMeQuedo = document.querySelector('#btnMeQuedo'),
          btnNuevo = document.querySelector('#btnNuevo'),

          smallPuntajes = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll('.divCartas');

    // TODO inicializar juego
    const inicializarJuego = ( numeroJugadores = 2 ) => {
        deck = crearDeck();

        puntosJugadores = [];
        for( let i = 0; i < numeroJugadores; i++ ) {
            puntosJugadores.push(0);
        }

        smallPuntajes.forEach( element => element.innerText = 0 );

        divCartasJugadores.forEach( cartas => cartas.innerHTML = '' );
        
        btnPedir.disabled = false;
        btnMeQuedo.disabled = false;

    }

    // TODO: Crear deck de cartas, nueva baraja
    const crearDeck = () => {

        for (let i = 2; i <= 10; i++) {
            for ( let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }

        return  _.shuffle(deck);
    }


    // TODO: Pedir una nueva carta
    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }

        return  deck.pop();
    }

    // TODO: Obtener el valor de la carga
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
    }

    /**
     * 
     * @param {turno} turno 
     * 0 = Jugador, y el ultimo elemento del array es la computadora 
     */
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] += valorCarta(carta);
        smallPuntajes[turno].innerText =  puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = ( carta, turno ) => {
        const imgCarta = document.createElement('img');
            imgCarta.classList.add('carta');
            imgCarta.src = `./assets/cartas/${carta}.png`;
        divCartasJugadores[turno].append( imgCarta );
    }

    // TODO Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();

            puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1 );

            crearCarta( carta, puntosJugadores.length - 1 );

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();
    }

    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert('Tablas');
            } else if (puntosMinimos > 21) {
                alert('Gana la casa');
            } else if (puntosComputadora > 21) {
                alert('Jugador Gana');
            } else {
                alert('Gana la casa de nuevo');
            }
        }, 200);
    }


    // TODO Eventos del DOM
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();

        const puntosJugador = acumularPuntos( carta, 0 );

        crearCarta( carta, 0 );

        if (puntosJugador > 21) {
            console.warn('Perdiste');
            btnPedir.disabled = true;
            btnMeQuedo.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            console.warn('21 Genial');
            btnMeQuedo.disabled = true;
            turnoComputadora(puntosJugador);
        }

    });


    btnMeQuedo.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnMeQuedo.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    };

})();