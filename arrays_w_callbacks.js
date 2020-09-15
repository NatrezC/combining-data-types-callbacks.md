//-------------------------------------
//-----------CALLBACKS-----------------
// Make a function add that takes two arguments (numbers) and sums them together
const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(1, 2))

// Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (a, b) => {
    return a - b
}
console.log(subtract(5, 4))

// Make a function multiply that takes two arguments and multiplies them
const multiply = (a, b) => {
    return a * b
}
console.log(multiply(2, 5))

// Make a function divide that takes two arguments and divides them
const division = (a, b) => {
    return a / b
}
console.log(division(25, 5))

// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).

// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
const calculate = (num1, num2, operates) => {
    return operates(num1, num2)
}

// Call calculate 4 times, each time using one of the operation functions you wrote
console.log(calculate(5, 4, add))
console.log(calculate(5, 5, subtract))
console.log(calculate(5, 5, multiply))
console.log(calculate(5, 5, division))

//------------------------------------------------------------------------
// Clean up this code, so that it works and has function definitions in the correct place

// bar();
// const bar = () => {
//     console.log('bar here');
// }
// foo();

// const foo = () => {
//     console.log('foo here');
// }

const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();

//-----------------------------------------------------------------------
// What is meant by the error(s) this produces ?

//     foo();

// const foo () => {
//     console.log('hi');
// }

/*const foo = () => { 
    console.log('hi');
}
foo();*/
 //it was missing the "=" in between foo and()
//and needed to drag foo() to the bottom

//------------------------------------------------------------------------


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//Every-------------
//Determine if every number is greater than or equal to 0
const greaterNum = nums.map((index) => {
    return index >= 0;
})

//determine if every word shorter than 8 characters
const shorter = (word) => {
    return word.length < 8;
}
panagram.map(shorter)

//Filter--------------
//Filter the array for numbers less than 4
const lessFour = nums.filter((index) => {
    return index < 4;
})
console.log(lessFour)

//Filter words that have an even length
const newArray = panagram.filter(function (word) {
    return word.length % 2 === 0;
})

console.log(newArray)

//Find-----------------
//Find the first value divisible by 5
const find = nums.find((index) => {
    return index % 5 === 0;
})
console.log(find)

//find the first word that is longer than 5 characters
const found = panagram.find(function (word) {
    return word.length > 5
})
console.log(found) //i cant figure this one out
//Find Index--------------
// find the index of the first number that is divisible by 3
const divisiabeThree = nums.findIndex((index) => {
    return nums % 3 === 0
})
console.log(divisiabeThree)

// find the index of the first word that is less than 2 characters long
const longTwo = panagram.findIndex(function (word) {
    return word.length < 2
})
console.log(longTwo) // no word less than two characters

// For Each---------------
// console.log each value of the nums array multiplied by 3
nums.forEach(index => console.log(index * 3))

// console.log each word with an exclamation point at the end of it
panagram.forEach(word => console.log(word + "!"))

// Thought Questions----------

// What happened to the original array ?
//     Can you store the values from a forEach method in a new array ? 

//Map--------------------------
// make a new array of each number multiplied by 100
const hundred = nums.map((index) => {
    return index * 100
})
console.log(hundred)
// make a new array of all the words in all uppercase
const toUpper = panagram.map((word) => {
    return word.toUpperCase()
})
console.log(toUpper)

// Thought Questions-------------

// What happened to the original array ?
//     Can you store the values from a map method in a new array ?
//Some-------------------------------
// Find out if some numbers are divisible by 7
const divSeven = nums.some((index) => {
    return index % 7 === 0
})
console.log(divSeven)
// Find out if some words have the letter a in them
const letterA = panagram.some((word) => {
    const aye = word.toString()
    return aye.includes('a')
})
console.log(letterA)



