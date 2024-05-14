//  Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

const containerEl = document.getElementById("container");

let divRosso = document.createElement("div")
divRosso.classList = "bg-rosso";
containerEl.appendChild(divRosso);

let divVerde = document.createElement("div")
divVerde.classList = "bg-verde";
containerEl.appendChild(divVerde);

let numbers = [1,2,3,4,5,6,7,8,9];

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        divVerde.innerHTML += numbers[i] + " ";
    } else {
        divRosso.innerHTML += numbers[i] + " ";
    }
}