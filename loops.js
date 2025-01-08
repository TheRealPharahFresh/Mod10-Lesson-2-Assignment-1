
// If statements
let age = 25

if (age >=21) {
    console.log("Welcome To The Party");
} 

// Increments
let num = 5;
console.log(num++); // output 5
console.log(++num); //output 6
console.log(num--); // output 5
console.log(--num); // output 4


// For Loops/While Loop/ Do while Loop/ For in loop In JS

/*
for (initialization; Condition; Increment) {
    Code Here
}
*/

for (let i =0; i < 5; i++) {
    console.log("Iteration", i);
}

//iteration of an array
let my_arr = [1,2,3,4,5,6]

for (let i = 0; i < my_arr.length; i++) {
    console.log("Iteration", i, my_arr[i])
}

// While Loop

let count = 0
while (count < 5) {
    console.log("Count", count)
    count++
}

//For A Break In The While Loop

let count = 0
while (count < 5) {
    if (count == 2) {
        console.log("Breaking....")
        break
    }
    console.log("Count", count)
    count++
}

// Do While Loop
// Do While Loop Will Always One Once Even If The Condition isnt True


let num = 1;
do {
    console.log("Number:", num);
    num++;
} while (num <= 5);

// For In Loop
// Nested Loops

for (let i = 0; i < 3; i++) {
    for (let j =0; j < 3; j++) {
        console.log('${i}, ${j}');
    }
}

