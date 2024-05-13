//  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const listaInvitati = ["Riccardo","Mario","Gina","Paolo","Giulia","Steve Jobs"];

let nomeUtente = prompt("Ciao, scrivi qui il tuo nome per scoprire se sei stato invitato");

if (listaInvitati.includes(nomeUtente)) {
    console.log("Sei stato invitao, puoi partecipare");
} else {
    console.log("Mi dispiace, non puoi partecipare");
}