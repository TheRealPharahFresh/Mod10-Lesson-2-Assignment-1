//Exploring Conditional Statements and Loops
//Task 1:

let Loggedin = true
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']


//Task 2:
if (Loggedin === true) {
    for (let i = 0; i < cart.length; i++) {
        console.log("List Of Available Products: ", i, cart[i])
    }
}


//Exploring Functions in JavaScript

//Task1:

function deposits(balance, deposit) {
    let new_balance = balance + deposit;

    return new_balance;

}

//Task2:

function withdrawals(balance, withdrawals) {
    if (withdrawals > balance) {
        return "Insufficient Funds";
    }
    let new_balance = balance - withdrawals;

    return new_balance;
}

//Task3:

function balancechecker(currentbalance) {
    console.log("This is your current balance:",currentbalance)
    return currentbalance
}

const balance = balancechecker(2000)
console.log(balance)