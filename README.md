vue-boolzapp
===
Riprendendo il compito vecchio della struttura html-css di boolzapp, ora dobbiamo renderla interattiva.
### Svolgimento
# Milestone 1
1. Creo un ciclo v-for per inserire una card per quanti contatti ho presenti in js.
2. Tramite :src inserisco dinamicamente le immagini di ogni card e successivamente anche i nomi col doppio baffo
# Milestone 2
1. Sempre attraverso un ciclo v-for sia nei messaggi ricevuti che in quelli inviati faccio apparire i messaggi nell'array. Attraverso una variabile chiamata contactActive con parametro iniziale uguale a 0 posso vedere i messaggi corretti di ogni utente. Per separare invece i messaggi ricevuti da quelli inviati, utilizzo un v-show e gli do la condizione di vederli in base allo status
2. Ritorno sui contatti e attravero @click gli dico che l'indice è uguale alla variabile creata prima, cosi al click cambiano anche i messaggi all'interno visualizzando correttamente le giuste chat.