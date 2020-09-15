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