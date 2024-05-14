//  Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

const containerEl = document.getElementById("container");

let divRosso = document.createElement("div")
divRosso.classList = "c-rosso";
containerEl.appendChild(divRosso);

let divVerde = document.createElement("div")
divVerde.classList = "c-verde";
containerEl.appendChild(divVerde);

let divGiallo = document.createElement("div")
divGiallo.classList = "c-giallo";
containerEl.appendChild(divGiallo);

let numbers = [1,2,3,4,5,6,7,8,9,10];

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 == 0) {
        divGiallo.innerHTML += numbers[i] + " ";
    } else if (numbers[i] % 2 == 0) {
        divVerde.innerHTML += numbers[i] + " ";
    } else {
        divRosso.innerHTML += numbers[i] + " ";
    }
}