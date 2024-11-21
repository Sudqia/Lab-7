let name = "Sudqia";
let age = 18;
console.log(name);
console.log(age);

let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;
let undefinedVar;

console.log(stringVar);
console.log(numberVar);
console.log(booleanVar);
console.log(undefinedVar);

let rollNumber = 15;
if (rollNumber > 10) {
    console.log("The RollNumber is greater than 10");
}


let isMember = true;
if (isMember) {
    console.log("Member discount applied.");
}

let startValue = 50;
if (startValue > 0) {
    console.log("The value is positive.");
} else if (startValue < 0) {
    console.log("The value is negative.");
} else {
    console.log("The value is zero.");
}


let a = 10;
let b = 20;

console.log(a == b);   // Equal
console.log(a === b);  // Strict equal
console.log(a != b);   // Not equal
console.log(a > b);    // Greater than
console.log(a < b);    // Less than
console.log(a >= b);   // Greater than or equal
console.log(a <= b);   // Less than or equal




let firstName = "John";
let lastName = "Doe";
let userAge = 25;

console.log(`Hello, ${firstName} ${lastName}, you are ${userAge} years old.`);

let num = 50;
if (num > 0 && num < 100) {
    console.log("The number is within range.");
}

let hasCar = true;
let hasLicense = true;
let hasInsurance = true;

if (hasCar && hasLicense && hasInsurance) {
    console.log("You can drive legally.");
} else {
    console.log("Check your driving eligibility.");
}


let number = 21;
if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

let score = 85;
if (score >= 90) {
    console.log("Grade A.");
} else if (score >= 80) {
    console.log("Grade B.");
} else {
    console.log("Grade C.");
}
