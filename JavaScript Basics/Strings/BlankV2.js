const isBlank = (input) => {
    if (input.trim().length === 0) {
        return true;
     } else return false;
    }


console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true