// Allows you to have an expression be computed as a property name on an object.

function objectify(key, value) {
    
    /* 
    * // ES5
    * let obj = {}
    * obj[key] = value
    * return obj
    */

    // ES6
    return {
        [key]: value
    }
}