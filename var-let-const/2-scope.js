// Variables are accessible inside your program

/* 
Two types:
1. Global scope
2. Function scope

If the variable statement occurs inside a FunctionDeclaration, 
the variables are defined with function-local scope in that function. 
Otherwise, they are defined with global scope, that is, they are created as members of the global object.
- ECMAScript Spec.
*/

// Global Scope
var firstFunction = function () {
    // firstFunction's Scope
    var secondFunction = function () {
      // secondFunction's Scope
    };
  };

/* 1. Example */ 
function getDate() {
    var date = new Date()

    function formatDate() {
        return date.toDateString().slice(4);
    }

    return formatDate
}

getDate()
console.log(date) // Reference error


/* 2. Example */

function getDiscount(arrPrices, discount) {
    var discounted = []
    for (var i = 0; i < arrPrices.length; i++) {
        var discountedPrice = arrPrices[i] * (1 - discount)
        var finalPrice = Math.round(discountedPrice * 100) / 100
        discounted.push(finalPrice)
    }
    console.log(i) // 3
    console.log(discountedPrice) // 150
    console.log(finalPrice) // 150

    return discounted
}

getDiscount([100, 200, 300], .5) // [50, 100, 150]