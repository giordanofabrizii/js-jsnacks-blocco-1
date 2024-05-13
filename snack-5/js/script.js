//  < Crea un array vuoto.
//  < Chiedi per 6 volte all'utente di inserire un numero,
//  < se è dispari inseriscilo nell'array.

let numberList = [];

for (let i = 0; i < 6; i++) {
    let userNumber = Number.parseInt(prompt("Ciao,inserisci un numero"));

    // ! se dispari
    if (userNumber % 2 != 0) {
        numberList.push(userNumber);
    }
}