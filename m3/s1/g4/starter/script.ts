// Definizione della classe CapoAbbigliamento
class CapoAbbigliamento {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
  
    constructor(
      id: number,
      codprod: number,
      collezione: string,
      capo: string,
      modello: number,
      quantita: number,
      colore: string,
      prezzoivaesclusa: number,
      prezzoivainclusa: number,
      disponibile: string,
      saldo: number
    ) {
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
  
    getsaldocapo(): number {
      return this.saldo;
    }
  
    getacquistocapo(): number {
      return this.prezzoivainclusa - this.saldo;
    }
  }
  
  // Funzione per eseguire il fetch del JSON
  async function fetchJsonData(url: string): Promise<any[]> {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Errore durante il fetch del JSON. Status: ${response.status}`);
      }
  
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Errore durante il fetch del JSON:', error);
      throw error;
    }
  }
  
  // URL da cui fetchare il JSON (sostituiscilo con il tuo URL effettivo)
  const jsonUrl = 'https://example.com/path/to/your/json/data';
  
  // Funzione principale asincrona
  async function main() {
    try {
      // Eseguire il fetch del JSON e attendere i dati
      const datiJson = await fetchJsonData(jsonUrl);
  
      // Creare istanze della classe CapoAbbigliamento utilizzando i dati JSON
      const capiAbbigliamentoDalJson = datiJson.map(
        capoJson => new CapoAbbigliamento(
          capoJson.id,
          capoJson.codprod,
          capoJson.collezione,
          capoJson.capo,
          capoJson.modello,
          capoJson.quantita,
          capoJson.colore,
          capoJson.prezzoivaesclusa,
          capoJson.prezzoivainclusa,
          capoJson.disponibile,
          capoJson.saldo
        )
      );
  
      // Utilizzare i dati come desiderato
      for (const capo of capiAbbigliamentoDalJson) {
        console.log('Dati del capo da JSON:', capo);
        console.log('Saldo del capo:', capo.getsaldocapo());
        console.log('Costo totale del capo dopo lo sconto:', capo.getacquistocapo());
      }
    } catch (error) {
      console.error('Errore generale:', error);
    }
  }
  
  // Eseguire la funzione principale
  main();
  