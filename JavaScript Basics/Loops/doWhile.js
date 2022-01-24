let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// The above loop will never run because the test condition
// is never met. The below loop will run one time.

let counter2 = 0;
// Changing variable to execute the code

do {
  console.log('Woooot!');
  counter2 -= 1;
} while (counter2 > 0);