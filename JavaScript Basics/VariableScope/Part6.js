let a = 5;
let b = false;

if (a > 4) {
  let b = true; // removing let would change global b to true
}

console.log(b); // false