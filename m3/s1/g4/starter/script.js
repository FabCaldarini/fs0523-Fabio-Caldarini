"use strict";
class CapoAbbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo() {
        return this.saldo;
    }
    getacquistocapo() {
        return this.prezzoivainclusa - this.saldo;
    }
}
const capo1 = new CapoAbbigliamento(1, 101, 'Primavera', 'Giacca', 2022, 5, 'Blu', 50, 60, 'Disponibile', 10);
console.log('Saldo del capo:', capo1.getsaldocapo());
console.log('Costo totale del capo dopo lo sconto:', capo1.getacquistocapo());
const apiUrl = 'https://example.com/api/capiabbigliamento';
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    console.log('Dati recuperati dall\'API:', data);
})
    .catch(error => console.error('Errore nel recupero dei dati dall\'API:', error));
