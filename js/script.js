// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
let numeroKm = prompt('inserisci quanti chilometri vuoi percorrere')
// l’età del passeggero
let eta = prompt('inserisci la tua eta o quella del passeggero')

// REGOLE 
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const prezzoAlKm = 0.21;

// prezzo a km x km da percorrere 
let prezzoTotale = numeroKm * prezzoAlKm; 
// va applicato uno sconto del 20% per i minorenni
const scontoMinorenni = prezzoTotale * 20/100;
// va applicato uno sconto del 40% per gli over 65.
const scontoAnziani = prezzoTotale * 40/100;

// calcolo prezzo totale scontato minorenni
if (eta < 18) {
    let prezzoScontatoMinorenni = prezzoTotale - scontoMinorenni
    document.getElementById('prezzoViaggio').innerHTML = prezzoScontatoMinorenni + ' €';
}
// calcolo prezzo totale scontato per gli over 65
else if (eta > 65) {

    let prezzoScontatoAnziani = prezzoTotale - scontoAnziani
    document.getElementById('prezzoViaggio').innerHTML = prezzoScontatoAnziani + ' €';
}
