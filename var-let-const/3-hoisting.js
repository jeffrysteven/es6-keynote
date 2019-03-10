// JS move all the variable declarations to the top of the current scope

/* 1. Example */

// your code
console.log(hoisted) // undefined
var hoisted

// interpreted by js as
var hoisted
console.log(hoisted)

/* 2. Example */

// your code
function getClothing(isCold) {
    if (isCold) {
        var freezing = 'Grab a jacket!';
    } else {
        var hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
}

// interpreted by js as
function getClothing(isCold) {
    var freezing, hot
    if (isCold) {
        freezing = 'Grab a jacket!';
    } else {
        hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
}