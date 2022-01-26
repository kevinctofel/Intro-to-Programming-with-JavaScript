let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

// $3.99 will be output.
// Since sale is truthy and then we check for not
// truthy in the tertiary statement, the falsy
// value is used.