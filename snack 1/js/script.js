// L'utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const numeroA = prompt("Ciao, inserisci per favore il primo numero");
const numeroB = prompt("Perfetto, ora scrivi qui il secondo");

let numeroMaggiore;

if (numeroA > numeroB) {
    numeroMaggiore = numeroA;
} else if (numeroB > numeroA) {
    numeroMaggiore = numeroB
} else {
    numeroMaggiore = 'I numeri inseriti sono uguali'
}

console.log(numeroMaggiore)