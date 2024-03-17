const { createApp } = Vue;

createApp({
  data(){
    return{

      contacts: [
        {
            name: 'Michele',
            avatar: './assets/img/avatar_1.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: './assets/img/avatar_2.jpg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: './assets/img/avatar_3.jpg',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro B.',
            avatar: './assets/img/avatar_4.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro L.',
            avatar: './assets/img/avatar_5.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Claudia',
            avatar: './assets/img/avatar_6.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Federico',
            avatar: './assets/img/avatar_7.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Davide',
            avatar: './assets/img/avatar_8.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
        }
    ],
    contactActive: 0,
    newMessage: '',
    contactToSearch: '',
    
    }
  },

  methods: {
    /*
     * Imposta il contatto attivo in base all'indice fornito
     */
    setActiveContact(index) {
      // Imposta l'indice del contatto attivo
      this.contactActive = index;
    },
    // Ottiene l'ultimo messaggio per un dato contatto
    getLastMessage(contactIndex) {
      // Ottiene il contatto corrispondente all'indice fornito
      const contact = this.contacts[contactIndex];
      // Verifica se il contatto esiste e se ha dei messaggi
      if (contact && contact.messages.length > 0) {
        // Restituisce l'ultimo messaggio del contatto
        return contact.messages[contact.messages.length - 1];
      }
      // Restituisce null se non ci sono messaggi per il contatto
      return null; 
    },
    // Aggiunge un nuovo messaggio
    addMessage(){
      // Rimuove gli spazi bianchi dal messaggio
      const trimMessage = this.newMessage.trim();
      // Verifica se il messaggio non è vuoto
      if (trimMessage !== ''){
        // Ottiene il contatto attivo
        const activeContact = this.contacts[this.contactActive];
        // Aggiunge il nuovo messaggio alla lista dei messaggi del contatto attivo
        activeContact.messages.push({date: '', message: this.newMessage, status: 'sent'});
        // Cancella il campo del nuovo messaggio
        this.newMessage = ''
        // Simula una risposta dopo un secondo
        setTimeout(() => {
          // Aggiunge un messaggio di conferma al contatto attivo
          activeContact.messages.push({date: '', message: 'OK', status: 'received'});
        }, 1000);
      }
    }
  },

  computed: {
    /*
     * Questo metodo calcola e restituisce i messaggi ordinati per data per il contatto attivo.
     */
    sortedMessages() {
      // Ottiene i messaggi del contatto attivo e li ordina per data
      return this.contacts[this.contactActive].messages.slice().sort((a, b) => {
        // Converte le date dei messaggi in oggetti Date e le confronta
        // Restituisce un valore negativo se la data di 'a' è precedente a quella di 'b'
        // Restituisce un valore positivo se la data di 'a' è successiva a quella di 'b'
        // Restituisce 0 se le date sono uguali
        return new Date(a.date) - new Date(b.date);
      });
    },

    /*
     * Restituisce il contatto attivo corrente
     */
    activeContact() {
      // Restituisce il contatto attivo
      return this.contacts[this.contactActive];
    },

    // Filtra i contatti in base al testo inserito nella barra di ricerca
    filteredContact(){
      // Filtra i contatti il cui nome contiene il testo di ricerca (ignorando maiuscole/minuscole)
      return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.contactToSearch.toLowerCase()))
    }
  },


  mounted(){

  }
}).mount('#app')