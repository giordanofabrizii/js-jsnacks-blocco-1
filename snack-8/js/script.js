//  Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

const containerEl = document.getElementById("container");

let divRosso = document.createElement("div")
divRosso.classList = "bg-rosso"
containerEl.appendChild(divRosso)

let divVerde = document.createElement("div")
divVerde.classList = "bg-verde"
containerEl.appendChild(divVerde)