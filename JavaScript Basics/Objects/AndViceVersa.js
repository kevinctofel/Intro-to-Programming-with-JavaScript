let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = Object.fromEntries(nestedArray);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries

console.log(person);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }