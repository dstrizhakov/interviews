/*
Нужно реализовать банкомат
class ATM {
vault = {
'5000': 0,
'2000': 0,
'1000': 0,
'500': 0,
'100': 0,
'50': 0,
}
deposit(bills){}
whithdrow(amount){}
}

усложнение : Выдача наиболее оптимальным способом
 */

class ATM {
    vault = {
        '5000': 0,
        '2000': 0,
        '1000': 0,
        '500': 0,
        '100': 0,
        '50': 0,
    }

    deposit(bills){
        if (bills.length === 0) {
            console.log('Положите деньги в купюроприемник');
            return null;
        }
        const rejectedBills = [];
        const amount = bills.reduce((acc, bill) => {
            if (this.vault.hasOwnProperty(bill)) {
                this.vault[bill] += 1;
                acc += bill
            } else {
                rejectedBills.push(bill)
            }
            return acc;
        }, 0);

        console.log('Внесено: ', amount, rejectedBills.length > 0 ? 'Заберите нераспознаные купюры [' + rejectedBills + ']' : '')
    }

    whithdrow(amount){
        if (amount <= 0) {
            console.log('Укажите корректную сумму');
            return null;
        }
        const denominations = Object.keys(this.vault).map(Number);
        let targetAmount = amount;
        let withdrawal = {};
        for(let i = denominations.length - 1; i >= 0; i--  ) {
            const amount = denominations[i];
            if (targetAmount <= 0) break;
            const count = this.vault[amount];
            if (count > 0) {
                const billsNeeded = Math.min(Math.floor(targetAmount / amount), count);
                if (billsNeeded > 0) {
                    withdrawal[amount] = billsNeeded;
                    targetAmount -= billsNeeded * amount;
                }
            }
        }
        if (targetAmount > 0) {
            console.log('Не могу выдать нужную сумму, недостаточно средств');
            return false;
        }

        for (let bill in withdrawal) {
            this.vault[bill] -= withdrawal[bill];
        }

        console.log('Выдано: ', withdrawal)
    }

    // возвращает массив купюр который доступен на прием/выдачу
    get accept() {
        console.log('Доступны купюры: ', Object.keys(this.vault))
    }

    // возвращает общую сумму в банкомате
    get total() {
        let total = 0;
        for (const [value, count] of Object.entries(this.vault)) {
            total += value * count;
        }
        console.log('Всего средств в банкомате: ', {total})
        return total;
    }

    // возвращает кассету с деньгами в виде объекта при инкассации
    get collect () {
        console.log(this.vault);
        return this.vault;
    }
}

const atm = new ATM();
atm.deposit([5000,2000,1000, 500, 100, 50, 10])
atm.total
atm.whithdrow(5050);
atm.accept;
atm.total
atm.collect