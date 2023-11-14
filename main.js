"use strict";
/*## Palindroma esecuzione scritta

1. mi creo una constate prompt e chiedo all'utente di inserire una parola.
2. attraverso function assegno un nome alla mia funzione.
3. attraverso il ciclo for stampo in console  la parola.
4. attraverso un altro ciclo for stampo in console le parole al contrario.
5. confronto le due parole  se sono uguali scrivo un allert.*/

const prompt1 = prompt("inserisci una parola");
console.log(prompt1.length)
const array1 = []
const array2 = []
function parolaPalidroma(){
 // utilizzo del ciclo for e push dell'elemento nell'array//
    for(let i = 0; i < prompt1.length; i++){

        array1.push(prompt1[i])
        console.log(array1[i])
    }

   // utilizzo del ciclo for  al contrario e push dell'elemento  nell array//
    for(let i = prompt1.length -1 ; i >= 0 ; i--){

        console.log(prompt1[i])
        array2.push(prompt1[i])
    }

    //utilizzo del ciclo for per confrontare i due array//
    
    for(let i =  0;  i < prompt1.length; i++){
        if(array1[i] === array2[i]){
            return true
        }
    }   return false;
    
}
// assegnazione ad una variabile  alla mia funzione//
 const risultatoFinale = parolaPalidroma()


 // istruzioni condizionali //
 if( risultatoFinale === true){
    alert(`${prompt1} - è una parola palindroma`);
 }else{
    alert(`${prompt1} - non è una parola palindroma`);
 }


