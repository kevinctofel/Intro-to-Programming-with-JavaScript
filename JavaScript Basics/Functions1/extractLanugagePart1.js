const extractLanguage = (loc) => {
    return loc.slice(0,2);
}

// This solution assumes all locale representations
// are 2 letter combinations.

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'