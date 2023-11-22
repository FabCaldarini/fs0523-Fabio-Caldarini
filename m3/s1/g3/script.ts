// Definizione della classe astratta LavoratoreAutonomo
abstract class LavoratoreAutonomo {
    constructor(
        public codredd: number,
        public redditoannuolordo: number,
        public tasseinps: number,
        public tasseirpef: number
    ) {}

    abstract getUtileTasse(): number;

    abstract getTasseInps(): number;

    abstract getTasseIrpef(): number;

    getRedditoAnnuoNetto(): number {
        return this.redditoannuolordo - this.getUtileTasse();
    }
}

// Implementazione della classe concreta LavoratoreAutonomoA
class LavoratoreAutonomoA extends LavoratoreAutonomo {
    getUtileTasse(): number {
        return this.tasseinps + this.tasseirpef;
    }

    getTasseInps(): number {
        return this.tasseinps;
    }

    getTasseIrpef(): number {
        return this.tasseirpef;
    }
}

// Implementazione della classe concreta LavoratoreAutonomoB
class LavoratoreAutonomoB extends LavoratoreAutonomo {
    getUtileTasse(): number {
        return 0.8 * (this.tasseinps + this.tasseirpef);
    }

    getTasseInps(): number {
        return 0.8 * this.tasseinps;
    }

    getTasseIrpef(): number {
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
