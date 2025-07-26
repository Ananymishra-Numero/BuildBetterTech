/*Understanding Variables
Think of a variable in JavaScript as a box. This box stores data that can be changed, accessed, and manipulated within a program. Variables are declared in two ways: let and const, each with its own characteristics:
*/

let age = 20;
const year = 1900; // A constant. Its value can't change.

age = 21; // Variables created with let can be reassigned.


// In JavaScript, we frequently encounter situations in which a variable doesn't have a value. In such cases, the null and undefined types come into play.

// Imagine you possess a flower jar (variable), but it's empty. There is no flower inside. This absence of content is what null in JavaScript represents — an intentionally empty or non-existent value.

// Suppose you have a label for a candy jar, but you don't actually have the jar. This is where undefined comes in. It indicates that a variable has been declared, but doesn't yet hold any value.

//Here's a code example to illustrate:

let flowerJar = null;         // we have an empty flower jar
console.log(flowerJar);       // outputs: null

let candyJar;                 // we have a label for a candy jar, but no actual jar
console.log(candyJar);        // outputs: undefined


// Naming Variables in JavaScript
// Choosing good variable names makes your code easier to understand. When naming JavaScript variables, remember that:

/*
They are case-sensitive.
They should be descriptive.
They can't start with a number.
They can contain only letters, numbers, $, and _.
Here are some good examples:
*/

let myFavoriteColor;
let message1;
let $location;

//Assignment operators assign values to variables. The most common operator is =, but JavaScript also includes +=, -=, *=, /=, and %=. Have a look:


let x = 10; // x is 10
x += 5; // adding 5 to x makes x 15
x -= 3; // subtracting 3 from x makes x 12
x *= 2; // multiplying x by 2 makes x 24

// Assignment Operator (=): The assignment operator assigns a value to its left operand based on the value of its right operand.


let x = 5; // x is now 5


// Equality and Strict Equality Operators (== and ===): The double equals operator (==) checks equality in value, whereas the triple equals operator (===) checks equality in both value and type.


console.log(5 == '5'); // true
console.log(5 === '5'); // false

// Inequality and Strict Inequality Operators (!= and !==): The double not equals operator (!=) checks for inequality in value, whereas the triple not equals operator (!==) checks for inequality in either value or type.

console.log(5 != '5'); // false
console.log(5 !== '5'); // true

