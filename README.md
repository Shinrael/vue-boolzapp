vue-boolzapp
===
Riprendendo il compito vecchio della struttura html-css di boolzapp, ora dobbiamo renderla interattiva.
### Svolgimento
# Milestone 1
1. Creo un ciclo v-for per inserire una card per quanti contatti ho presenti in js.
2. Tramite :src inserisco dinamicamente le immagini di ogni card e successivamente anche i nomi col doppio baffo
# Milestone 2
1. Sempre attraverso un ciclo v-for sia nei messaggi ricevuti che in quelli inviati faccio apparire i messaggi nell'array. Attraverso una variabile chiamata contactActive con parametro iniziale uguale a 0 posso vedere i messaggi corretti di ogni utente. Per separare invece i messaggi ricevuti da quelli inviati, utilizzo un :class dove gli dico di prendere la classe received se lo status è received e sent se lo status è sent.
2. Ritorno sui contatti e attravero @click gli dico che l'indice è uguale alla variabile creata prima, cosi al click cambiano anche i messaggi all'interno visualizzando correttamente le giuste chat.
# Milestone 3
1. aggiungiamo all'input il solito v-model.trim e gli diamo una costante vuota che valorizziamo nel nostro js. Con il keyup gli diamo una funzione dove dapprima ci assicuriamo tramite un if che non possa essere inviato un messaggio vuoto e dopo che il messaggio che scriviamo abbia i valori giusti. Alla fine resettiamo la barra.
2. Nella funzione aggiungiamo un'altra funzione setTimeOut dove dopo 1 secondo riceviamo una risposta predefinita.