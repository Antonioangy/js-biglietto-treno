// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
let numerokm = prompt('inserisci quanti chilometri vuoi percorrere')
// l’età del passeggero
let eta = prompt('inserisci la tua eta o quella del passeggero')

// REGOLE 
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const prezzoalkm = 0.21;

// prezzo a km x km da percorrere 
let prezzototale = numerokm * prezzoalkm; 
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.