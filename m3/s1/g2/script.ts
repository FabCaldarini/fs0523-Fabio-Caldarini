class SonAccount {
    balance:number = 0;
    constructor(_balance:number) {
        this.balance = _balance
        console.log('hai creato account');
        
        
    }
    withdraw(amount:number):void{
        if (this.balance >= amount) {
            this.balance -= amount
            console.log('successfully withrawed, your new balance is:  ' + this.balance);
        }else {
            console.log('non hai i soldiiiiii vai a lavrà questi sono i soldi che hai poraccio :' + this.balance);
            
        }
            
        
        
    }
    deposit(amount:number){
        this.balance += amount
        console.log('il tuo saldo è stato incrementato, ora il tuo saldo è: ' + this.balance);
        
    }
}



class MotherAccount extends SonAccount{
     calcolo() {
        const interessi = this.balance *0.1
            this.deposit(interessi);
        }
    }

    let son = new SonAccount(100);
    let mother = new MotherAccount(150);


    son.deposit(20);
    son.withdraw(40);
    mother.calcolo();

    
