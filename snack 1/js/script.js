// L'utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const numeroA = prompt("Ciao, inserisci per favore il primo numero");
const numeroB = prompt("Perfetto, ora scrivi qui il secondo");

let numeroMaggiore;

if (numeroA > numeroB) {
    numeroMaggiore = numeroA;
} else {
    numeroMaggiore = numeroB
}

console.log(numeroMaggiore)