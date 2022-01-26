const extractRegion = (loc) => {
    return loc.split('_')[1].slice(0,2);
}


console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

export { extractRegion };