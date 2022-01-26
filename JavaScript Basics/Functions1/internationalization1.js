const greet = (code) => {
    switch (code) {
        case ('en'):
            return 'Hi!';
        case ('fr'):
            return 'Salut!';
        case ('pt'):
            return 'Olá!';
        default:
            return 'Hello!';
    }
}


console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('')); // 'Hello!'
// greet('de'); // 'Hallo!'
// greet('sv'); // 'Hej!'
// greet('af'); // 'Haai!'

export { greet };