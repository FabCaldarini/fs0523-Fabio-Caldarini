/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/




/* SCRIVI QUI LA TUA RISPOSTA */

// (il nome delle variabili può essere qualsiasi)
/*
var/let a = " " = String : (Ovunque ci siano gli apostrofi " ", oppure ' ' si specifica che è una variabile con valore: string)
var/let b = 2 /* numero */ /*= Number: (ovunque ci sia un numero si specifica che è una variabile con valore :number)
var/let c = true o false = Boolean: (ovunque ci sia true o false si specifica che è una variabile con valore boolean)
var/let d = []= Array: (Ovunque ci sia [] si speficica che è una variabile con valore :array)
var/let e = {}= Object: (Ovunque ci sia {} si specifica che è una variabile con valore : Object)*/


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Fabio"
console.log(name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sum1 = 12
let sum2 = 20
console.log(sum1 + sum2)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
const FIRST_NAME = "Caldarini"
FIRST_NAME = "Rossi" 

 D1.js:64 Uncaught TypeError: Assignment to constant variable.
    at D1.js:64:12 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI  LA TUA RISPOSTA */

var y = 4
console.log(y - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const nome1 = "john"
const nome2 = "John"

console.log(nome1==nome2) 

{
  console.log(nome1.toLowerCase()==nome2.toLowerCase())
}
