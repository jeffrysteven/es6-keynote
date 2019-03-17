// Basically, a Set is an object that lets you store unique items.
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games); // Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}

const flavors = new Set();
flavors.add('chocolate');
flavors.add('cookies');
flavors.add('strawberry');
flavors.add('vanilla');

flavors.delete('strawberry');