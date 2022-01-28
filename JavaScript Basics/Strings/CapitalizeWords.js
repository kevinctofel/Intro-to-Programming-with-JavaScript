let input = 'launch school tech & talk';
let output = [];

const capFirst = (input) => {
    let words = input.split(' ');
    words.forEach(word => {
        output.push(word[0].toUpperCase() + word.slice(1))
    });
    console.log(output.join(' '));
}

capFirst(input);