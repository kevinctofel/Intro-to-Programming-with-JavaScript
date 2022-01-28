const repeat = (num, input) => {
    let output = '';

    for (let i = 0; i < num; i++) {
        output = output + input;
    }

    console.log(output);

}

repeat(3, 'ha'); // 'hahaha'