// Loop over iterables: String, Array, Map, and Sets ...

// Example #1 
const digits = [0, 1, 2, 3];

for (const digit of digits) {
  console.log(digit);
}
// Output: 0 1 2 3

// Example #2
for (const digit of digits) {
  if (digit % 2 === 0) {
    continue
    // break
  }
  console.log(digit);
}
//Output: 1 3 5 7 9 

// Example #3
const iterable = new Map([['Joe', '🐔'], ['Ivan', '🐷'], ['Gertrudis', '🐑']]);

for (const [key, value] of iterable) {
  console.log(`${key} the ${value}`);
}
// Output:
// Joe the 🐔
// Ivan the 🐷
// Gertrudis the 🐑
