const { createApp } = Vue;
const app = createApp({
    data(){
        return{
            newTodo: {
                text: "",
                done: false
            },
          
            todoList: [
                
                {
                    text: "Recruiting blog post",
                    done: true
                },
                {
                    text: "Mobile app luaunch",
                    done: true
                },
                {
                    text: "Interview John H.",
                    done: false
                },
                {
                    text: "Summit update to mobile storefronts",
                    done: true
                }
            ],
        };
    },
    methods: {
        // funzione che assegna la classe dinamica done al click
        // o la toglie applicando la logica toogle
        doneItems: function(i) {
          
            // se l elemento corrente todoList(oggetto) ha la classe
            // strettamente uguale a true allora applica false
            // così facendo il il cerchio da verse passa a rosso
            // e viceversa applicando anche la barra al text
            // altrimenti rimani true
             if(this.todoList[i].done === true){
                
                 this.todoList[i].done = false;
            
             } else {
                 this.todoList[i].done = true;
             }
        },
        // Ora implemento la funzione per aggiungere un nuovo object
        // alla lista nel dom
        // test con log se funziona il bottone
        // dando all imput il v-model vado a depositare il suo valore nella chiave
        // di newTodo e nella funzione pusho grazie all spred operator newTodo(object)
        // in todoList
        addItems: function () {
            this.todoList.push({...this.newTodo})
        }
    },
}).mount("#app");