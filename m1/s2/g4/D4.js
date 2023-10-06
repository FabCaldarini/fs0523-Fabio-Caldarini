/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1,l2) {
    
    return l1*l2;
    
}

console.log(area(4,5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a,b) {
    if (a == b) {
        return (a+b)*3;
        
    
        
    }else{
        return (a+b);
    }
    
}
let risultato=0;
    risultato=crazySum(10,10); 
    console.log(risultato);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(a) {
    
    if (a > 19) {
        
        return Math.abs((a - 19) *3);
        
     }else {
        return Math.abs (a-19);
    }
        
}
let a = 15
risultato_finale = crazyDiff(a)
console.log(risultato_finale);

    







/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {

    if ((n >= 20) || (n <= 100)) {
    
    return true
    
        }else if (n = 400) {    

        return false
        
    }
    
}

let n=40

giusto = boundary(n);
console.log(giusto);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

let string="EPICODE"

function empify(string) {

    if(string.startsWith("EPICODE")){
    return string
    }else{
    return ("EPICODE" + string);
    }
}
ended=empify(string);
console.log(ended);


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let c = 15;

function check3and7(c) {
    if (c % 7 ==0)  {
        console.log("il numero "+c+" è divisibile per 7");
    }else 
    if (c % 3 ==0) {
        console.log("il numero "+c+" è divisibile per 3");
    }
    
}

check3and7(c);


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let idk = "EPICODE"

function reverseString(idk) {
    
    let splitString = idk.split("");
    console.log(splitString);

    let reverseArray =
}

reverseString(idk);

    

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
