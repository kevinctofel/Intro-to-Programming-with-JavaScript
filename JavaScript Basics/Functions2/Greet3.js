function greeting() {
    return 'Good morning';
}
  
function recipient() {
    return 'Launch School';
}

const greet = () => {
    console.log(greeting() + ', ' + recipient() + '!');
    recipient();
}

greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!