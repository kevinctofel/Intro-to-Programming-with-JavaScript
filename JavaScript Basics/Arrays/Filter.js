let scores = [96, 47, 113, 89, 100, 102];

const perfectOrBetter = (arr) => {
    let count = 0;
    arr.forEach(element => {
        if (element >= 100) {
            count++;
        }
    });
    
    console.log(count);
}

perfectOrBetter(scores);