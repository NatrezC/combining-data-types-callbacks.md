//Section 2
//-------------------------------------
//touch combining_datatypes.js and do your work for this section in this new file
// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
    crayons: ["blue", "yellow", "green", "orange", "red"]
}
console.log(crayonBox.crayons[2])

// Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap: {
        material: ["metal", "plastic"], color: ["blue", "yellow"]
    }
}
console.log(bottle.cap.material[1])

// Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [{ color: "yellow" }, { material: "plastic" }]

console.log(receipt[0].color)

// Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = ["Trez", "Stacy", { tenant: ["Jacob", "Calob"] }, "Shannon"]

console.log(apartmentBuilding[2].tenant[1])
//------------------------------------------------------------------------

// Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
const knit = {
    item: "scarf",
    size: "6ft",
    color: "blue"
}
console.log(knit.size)

// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
const crayonSelector = {
    colors: ["blue", "orange", "red", "black"]
}
console.log(crayonSelector.colors[2])

// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

//const powerButton = () => {
//     const options = ["Select a song"]
//     }
// console.log(powerButton(options)) <------couldnt figure out

//------------------------------------------------------------------
//Model a Vending Machine Model a vending machine

//a vending machine is an object
//it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

const vendingMachine = {
    items: [
        {
            name: "Doritos",
            price: "$1"
        },
        {
            name: "Cheetos",
            price: "$1.25"
        },
        {
            name: "Fritos",
            price: "$1.50"
        }
    ]
}
console.log(vendingMachine.items[0])
