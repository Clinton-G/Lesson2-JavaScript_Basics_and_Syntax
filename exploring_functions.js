let bankAccount = {
    balance: 0
};


function deposit(amount) {
    if (amount > 0) {
        bankAccount.balance += amount;
        console.log('Deposit Successfull: ', amount.toFixed(2));
    } else {
        console.log('Please Try Again');
    }
}


function withdraw(amount) {
    if (amount > 0) {
        if (bankAccount.balance >= amount) {
            bankAccount.balance -= amount;
            console.log('Withdrawl Successfull: ', amount.toFixed(2));
        } else {
            console.log('Insufficient Balance.');
        }
    } else {
        console.log('Plese Try Again');
    }
}


function checkBalance() {
    console.log('Current Balance: ', bankAccount.balance.toFixed(2))
}
