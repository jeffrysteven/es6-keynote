const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3); // false

const bowl = {
  [Symbol("apple")]: { color: "red", weight: 136.078 },
  [Symbol("banana")]: { color: "yellow", weight: 183.15 },
  [Symbol("orange")]: { color: "orange", weight: 170.097 },
  [Symbol("banana")]: { color: "yellow", weight: 176.845 }
};
console.log(bowl); // Object {Symbol(apple): Object, Symbol(banana): Object, Symbol(orange): Object, Symbol(banana): Object}
