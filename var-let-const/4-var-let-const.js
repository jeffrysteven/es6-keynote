/* 

var
 - function scope
 - hoisting undefined

let
 - block scope {}
 - reference error

const
 - same as let
 - you can't reassign the value (TypeError: assignment to constant variable)

*/

// var vs let first example

function getDiscount(arrPrices, discount) {
    var discounted = []
    for (let i = 0; i < arrPrices.length; i++) {
        let discountedPrice = arrPrices[i] * (1 - discount)
        let finalPrice = Math.round(discountedPrice * 100) / 100
        discounted.push(finalPrice)
    }
    console.log(i) // ReferenceError
    console.log(discountedPrice) // ReferenceError
    console.log(finalPrice) // ReferenceError

    return discounted
}

getDiscount([100, 200, 300], .5) // [50, 100, 150]

// var vs let second example

// your code
console.log(hoisted) // undefined
var hoisted

// interpreted by js as
var hoisted
console.log(hoisted)

// your code
console.log(hoisted) // ReferenceError
let hoisted

// interpreted by js as
let hoisted
console.log(hoisted) // ReferenceError

/* Const example */
const person = {
    name: 'jeff'
}
person = {} // TypeError const
person.name = 'Jeffry' //ok