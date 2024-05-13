//  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const listaInvitati = ["Riccardo","Mario","Gina","Paolo","Giulia","Steve Jobs"];
let blackList = [];

let nomeUtente = prompt("Ciao, scrivi qui il tuo nome per scoprire se sei stato invitato");

if (listaInvitati.includes(nomeUtente)) {
    console.log("Sei stato invitao, puoi partecipare");
    
    // rimuovo il suo nome
    let index = listaInvitati.indexOf(nomeUtente);
    listaInvitati.splice(index, 1);

} else {
    console.log("Mi dispiace, non puoi partecipare");

    // lo aggiungo alla lista nera
    blackList.push(nomeUtente)
    console.log(blackList);
}