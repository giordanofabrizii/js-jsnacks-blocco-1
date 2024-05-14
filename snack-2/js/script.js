// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

let array = [];
let somma = 0;

for (let i = 0; somma < 50; i++) {
    let num = Number.parseInt(prompt("Ciao, inserisci un numero"));
    somma += num;
}

console.log("La somma dei numeri e' maggiore di 50")