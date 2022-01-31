/*
Create a function removeLastChar that takes a string as an argument,
and returns the string without the last character.
*/

const removeLastChar = (str) => {
    return str.slice(0, -1);
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'