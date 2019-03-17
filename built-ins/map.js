// Maps store key-value pairs similar to how objects contain named properties with values.

// Example # 1
const employees = new Map();

employees.set("jeffry.lenis@endava.com", {
  firstName: "Jeffry",
  lastName: "Lenis",
  role: "Frontend Developer"
});
employees.set("john.doe@endava.com", {
  firstName: "John",
  lastName: "Doe",
  role: "Backend Developer"
});

console.log(employees); // Map(2) {"jeffry.lenis@endava.com" => {…}, "john.doe@endava.com" => {…}}

// Example # 2
const members = new Map();

members.set('John', 75.68);
members.set('Fulanito', 20.16);
members.set('Pablo', 0);
members.set('Peter', 10.25);

for (const [key, value] of members) {
    console.log(key, value);
}
