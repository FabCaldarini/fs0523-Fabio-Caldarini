"use strict";
// Definizione della classe astratta LavoratoreAutonomo
class LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    getRedditoAnnuoNetto() {
        return this.redditoannuolordo - this.getUtileTasse();
    }
}
// Implementazione della classe concreta LavoratoreAutonomoA
class LavoratoreAutonomoA extends LavoratoreAutonomo {
    getUtileTasse() {
        return this.tasseinps + this.tasseirpef;
    }
    getTasseInps() {
        return this.tasseinps;
    }
    getTasseIrpef() {
        return this.tasseirpef;
    }
}
// Implementazione della classe concreta LavoratoreAutonomoB
class LavoratoreAutonomoB extends LavoratoreAutonomo {
    getUtileTasse() {
        return 0.8 * (this.tasseinps + this.tasseirpef);
    }
    getTasseInps() {
        return 0.8 * this.tasseinps;
    }
    getTasseIrpef() {
        return 0.8 * this.tasseirpef;
    }
}
// Esempio di utilizzo
const lavoratoreA = new LavoratoreAutonomoA(1, 50000, 5000, 10000);
const lavoratoreB = new LavoratoreAutonomoB(2, 60000, 6000, 12000);
console.log("Lavoratore A:");
console.log("Reddito Annuo Netto:", lavoratoreA.getRedditoAnnuoNetto());
console.log("Tasse INPS:", lavoratoreA.getTasseInps());
console.log("Tasse IRPEF:", lavoratoreA.getTasseIrpef());
console.log("\nLavoratore B:");
console.log("Reddito Annuo Netto:", lavoratoreB.getRedditoAnnuoNetto());
console.log("Tasse INPS:", lavoratoreB.getTasseInps());
console.log("Tasse IRPEF:", lavoratoreB.getTasseIrpef());
