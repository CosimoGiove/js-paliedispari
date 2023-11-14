"use strict"

const scelta = prompt(" scegli pari o dispari")
console.log(`${"scelta del giocatore è :"}${scelta}`)
const pari = "pari"
const dispari = "dispari"
const Numero = Number(prompt("inserisci un numero da 1 a 5"));
console.log("il numero del giocatore è :" + " " + Numero)

// fase di controllo del numero //
while (Numero > 5 || isNaN(Numero)) {

    alert("inserisci un numero  compreso  tra 1 e 5");
    const controllo = prompt("inserisci un numero da 1 a 5")
    if(controllo <= 5){
        break;

    }
}
// creazione del numero random con la funzione //
function NumeroRandom() {

    let numero = Math.floor(Math.random() * 5) + 1
    console.log("il numero del pc è :" + numero )
    const risultato = Numero + numero
    console.log(`${"totale dei numeri è :"}${risultato}`)

    return risultato
}

const somma = NumeroRandom()

// creazione del pari e dispari con la funzione + condizini di chi vince la sfida //

function PariDispari() {


    if (somma % 2 === 0 && scelta === pari) {
        console.log(`${somma} ${"è pari vince il giocatore"}`)
    } else if (somma % 2 !== 0 && scelta === dispari) {
        console.log(`${somma} ${"è dispari il giocatore ha vinto"}`)
    } else {
        console.log(`${somma} ${" vince il pc"}`)
    }

    return true;
}

const risultato = PariDispari()










