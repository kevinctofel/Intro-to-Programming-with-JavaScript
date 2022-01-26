let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

// Should output true as the OR condition is truthy as the brakingForce being
// less than accelerator, i.e. the statement is truthy.
// Bonus: yes. AND has a higher operator precendence than OR.