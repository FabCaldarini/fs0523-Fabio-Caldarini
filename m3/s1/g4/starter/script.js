"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function fetchJsonData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`Errore durante il fetch del JSON. Status: ${response.status}`);
            }
            const jsonData = yield response.json();
            return jsonData;
        }
        catch (error) {
            console.error('Errore durante il fetch del JSON:', error);
            throw error;
        }
    });
}
const jsonUrl = 'https://example.com/path/to/your/json/data';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const datiJson = yield fetchJsonData(jsonUrl);
            const capiAbbigliamentoDalJson = datiJson.map(capoJson => new CapoAbbigliamento(capoJson.id, capoJson.codprod, capoJson.collezione, capoJson.capo, capoJson.modello, capoJson.quantita, capoJson.colore, capoJson.prezzoivaesclusa, capoJson.prezzoivainclusa, capoJson.disponibile, capoJson.saldo));
            for (const capo of capiAbbigliamentoDalJson) {
                console.log('Dati del capo da JSON:', capo);
                console.log('Saldo del capo:', capo.getsaldocapo());
                console.log('Costo totale del capo dopo lo sconto:', capo.getacquistocapo());
            }
        }
        catch (error) {
            console.error('Errore generale:', error);
        }
    });
}
main();
