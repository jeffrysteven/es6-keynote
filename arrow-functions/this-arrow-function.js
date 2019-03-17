// Regular function

/* ######## EXAMPLE 1 ######### */
// constructor
function IceCream() {
  this.scoops = 0;
}
// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(function() { // anonymous function
    this.scoops++; // this is global object
    console.log("scoop added!");
  }, 500);
};

const dessert = new IceCream();
dessert.addScoop();
console.log(dessert.scoops); // 0


/* ######## EXAMPLE 2 ######### */
// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  const cone = this; // sets `this` to the `cone` variable
  setTimeout(function() {
    cone.scoops++; // references the `cone` variable
    console.log("scoop added!");
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();
console.log(dessert.scoops); // 1


/* ######## EXAMPLE 3 ######### */
// Arrow function
// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(() => {
    // an arrow function is passed to setTimeout
    this.scoops++;
    console.log("scoop added!");
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();
console.log(dessert.scoops); // 1
