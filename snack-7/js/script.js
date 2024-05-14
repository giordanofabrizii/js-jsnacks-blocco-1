// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const userNumber = Number.parseInt(prompt("Quanti array vuoi creare?"));

for (let i = 0; i < userNumber; i++) {
    let array = [];
    for (let j = 0; j < 10; j++) {
        array.push(Math.floor(Math.random()*100 + 1));
    }
    console.log(array);
}