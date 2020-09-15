//Write a ~1 sentence summary for each one
//Which ones surprise you(if any)?
//Which one is currently giving you the most struggle ?

//DRY
//(Dont repeat yourself) aims to reduce repetition in your code.

//KISS
//(Keep it simple Stupid) aims for when your code gets bigger in size, you don't want your code to be complicated to read

//Avoid creating a YAGNI
//(You aint gonna need it) Dont create anything that is unnecessary

//Do the simplest thing that could possibly work
// Your code should be made as simple as it can be

//Write code for the maintainer
//Code for people with little to no knowledge of code.

//Single Responsibility principle
//(SPR) every function, module, class should be responsible for a single part of the the programs functionality.

//Avoid premature optimization
// Make sure you get feedback of your code often and early.

//Seperation of concerns
//(SoC) seperates into sections that address a seperate concern

//Commenting Code
//Comment each line of this code and describe 
//what it is doing.Feel free to run this code 
//and add console.logs to help you figure it out:

const f = l => { //declaring f l is the parameter
    let es = 0, p = 0, c = 1, n = 0 // declaring different variables  
    while (c <= l) { //while condition c is less than or equal to l
        n = c + p; //add together c and p as long as c is less than l
        [c, p] = [n, c]// as long as while loop is true arrays are equal
        es += (c % 2 === 0) ? c : 0// increase it by c if even
    }
    return es
}

console.log(f(55))


const f2 = (limit) => { //declaring f2 with parameter of limit
    let evenSum = 0;
    let previous = 0;
    let current = 1; //assigning the variables
    while (current <= limit) { //while loop as long as current is less than or equal to limit
        let next = current + previous; //condition is true add current to previous
        previous = current; //condition is true previous equals current
        current = next; //urrent equals next if condition is true
        if (current % 2 === 0) {//if current is an even num
            evenSum += current;// add current to evenSum
        }
    }
    return evenSum;
}


console.log(f2(55))
