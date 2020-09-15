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


