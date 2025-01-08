/*
function name(parameters) {
    Code goes here
    return code
}
name('asdf)
*/

function greet(name) {
    return "Hello," + name + "!"
}

console.log(greet("John Doe"))

// Scope and Closure
//Global outside of the function
//Local Inside The Function

function name(parameters) {
    let local = "local"
    return local
}
//Closures

function outer() {
    let message = "Hello";
    function inner() {
        message+= "!"
        console.log(message);
    }
    return inner
}

const myfunc = outer();
myfunc();
myfunc();

//1. Encapsulation - Data i outer function only  accessible in inner function
//2. Reusability and Configuration - If we create more functions, we can alter depending on what is passed in
//3. Maintaining State - This allows us to maintain the state of the function over multiple calls

function test() {
    let message = "Hello"
    message += "!"
    console.log(message)
    return message
}

test()
test()

// Arrow Functions

/*
const <name> = (parameters) => {
    code in here
}

const <name> = (parameters) =>  code here


*/

const add = (a,b) => a + b;

console.log(add(5,3))


//1.Implicit Return: Single lines. Arrow function can return the results of the expression without needing 'Return' for a single expression
//2.There is no binding of arguments
//3.They have no inherit 'this' binding.




const numTerms = 10;

let firstTerm = 0;
let secondTerm = 1;

console.log("Fiboncacci sequence: ");
console.log(firstTerm);
console.log(secondTerm);

for (let i = 2; i < numTerms; i++) {
    let nextTerm = firstTerm + secondTerm;

    console.log(nextTerm)
    firstTerm = secondTerm;
    secondTerm = nextTerm;
}

function calculateYearsToRetirement(currentSavings, annualContribution, annualReturnRate, retirementGoal) {
    let yearsToRetirement = 0;

    do {
        const investmentReturns = currentSavings * (annualReturnRate / 100);

        currentSavings += annualContribution + investmentReturns;

        yearsToRetirement++;
    } while (currentSavings < retirementGoal);

    return yearsToRetirement;
}

const currentSavings = 5000;
const annualContribution = 100000;
const annualReturnRate = 7;
const retirementGoal = 1000000;

const yearsToRetirement = calculateYearsToRetirement(currentSavings, annualContribution, annualReturnRate, retirementGoal);
console.log("Years until Retirement:" ${yearsToRetirement});


const shoppingCart = [20,50,80,100];

const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i];

    }
    return totalPrice;
}

const totalPrice = calculateTotalPrice(shoppingCart);
console.log("Total price eof items in the cart: $${totalPrice}");