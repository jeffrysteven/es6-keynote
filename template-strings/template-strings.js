// Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

// Example #1
const name = 'jeff'
console.log(`My name is ${name}`)

// Example #2
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

// Example #3
function makeGreeting (name, email, id) {
  return `Hello, ${name}. We've emailed you at ${email}. Your user id is ${id}.`
}