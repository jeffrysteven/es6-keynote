/* A WeakMap is just like a normal Map with a few key differences:

a WeakMap can only contain objects as keys,
a WeakMap is not iterable which means it can’t be looped and
a WeakMap does not have a .clear() method. */

const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' }
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' }

const library = new WeakMap()
library.set(book1, true)
library.set(book2, false)
library.set(book3, true)

console.log(library); // WeakMap {{book1} => true, {book2} => false, {book3} => true}

book1 = null // garbage collected

console.log(library); // WeakMap {{book2} => false, {book3} => true}

// https://www.youtube.com/watch?v=sUE_JjiF_q4