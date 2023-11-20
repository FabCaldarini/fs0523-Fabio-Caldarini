"use strict";
function programma(a, b) {
    let random = Math.floor(Math.random() * (100 - 1) + 1);
    if (a > 100 || b > 100 || a < 1 || b < 1) {
        return 'cojo tra 1 e 100';
    }
    else if (a == random && b == random) {
        return 'entrambi uguale' + ' il numero random è : ' + random;
    }
    else if (a == random) {
        return 'a è lo stronzo' + ' il numero random è : ' + random;
    }
    else if (b == random) {
        return 'b è lo stronzo' + ' il numero random è : ' + random;
    }
    else if (Math.abs(a - random) < Math.abs(b - random)) {
        return a + ' il numero random è : ' + random;
    }
    else if (Math.abs(b - random) < Math.abs(a - random)) {
        return b + ' il numero random è : ' + random;
    }
    else if (Math.abs(a - random) == Math.abs(b - random)) {
        return 'gli stronzi sono uguali entrambi' + ' il numero random è : ' + random;
    }
    return 'che fai oo metti un numero';
}
