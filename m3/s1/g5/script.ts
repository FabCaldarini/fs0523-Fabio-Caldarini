interface ISim{
    carica:number
    numeroChiamate:number
    costoMinuto:number
    
    ricarica(euro:number):void
    numero404():string
    getNumeroChiamate():number
    chiamata(min:number):void
    azzeraChiamate():void
}




class Smartphone implements ISim{
    carica: number = 0
    numeroChiamate: number = 0
    costoMinuto:number = 0.25



    constructor(_carica:number){
        this.carica = _carica
    }
    



    ricarica(euro: number): void {
        this.carica += euro;
    }
    numero404(): string {
        return ('il tuo credito residuo è: ' + this.carica + '€')
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    chiamata(min: number): void {
        let totale = this.costoMinuto * min
        if (this.carica >= totale) {
            this.carica -= totale 
            this.numeroChiamate ++;
        }else{
            console.log('Credito insufficente per effettuare la chiamata');
            
        }
        
        
        
    }
    azzeraChiamate(): void {
         this.numeroChiamate = 0
    }
    
    
    
}
let nokia = new Smartphone(100);

nokia.chiamata(100);
nokia.chiamata(80);
nokia.chiamata(50);


console.log(nokia.numero404());
console.log(nokia.getNumeroChiamate());


let samsung = new Smartphone(5);

samsung.chiamata(40);
samsung.chiamata(30);
samsung.chiamata(15);
console.log(samsung.numero404());
console.log(samsung.getNumeroChiamate());
samsung.azzeraChiamate();

let iphone = new Smartphone(100);

iphone.chiamata(60);
iphone.chiamata(40)
iphone.chiamata(20)
iphone.chiamata(10)

console.log(iphone.numero404());
console.log(iphone.getNumeroChiamate());

let pixel= new Smartphone(100);

pixel.chiamata(400);
pixel.chiamata(1); /* il numero di chiamate non aumenta perchè la chiamata da 400minuti utilizza tutto il credito residuo*/
/* infatti impostandolo ad 1 spunta che il credito è insufficente */

console.log(pixel.numero404());
console.log(pixel.getNumeroChiamate());
















