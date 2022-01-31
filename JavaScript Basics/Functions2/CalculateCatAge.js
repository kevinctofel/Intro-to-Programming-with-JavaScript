/*
The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years.
*/

const catAge = (humanAge) => {
    switch (humanAge) {
        case 0:
            return 0;
        case 1:
            return 15;
        case 2:
            return 24;
        default:
            return 24 + (humanAge - 2) * 4;
    }
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32