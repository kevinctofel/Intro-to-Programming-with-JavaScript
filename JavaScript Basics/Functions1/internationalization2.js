const extractLanguage = (loc) => {
    return loc.slice(0, 2);
}

const extractRegion = (loc) => {
    return loc.split('_')[1].slice(0,2);
}

const localGreet = (greet) => {
    switch (extractLanguage(greet)) {
        case ('en'):
            switch (extractRegion(greet)) {
                case ('US'):
                    return 'Hey!';
                case ('GB'):
                    return 'Hello!';
                case ('AU'):
                    return 'Howdy'
            }
        case ('fr'):
            return 'Salut!';
    }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'
