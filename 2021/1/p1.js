const input = require('./input.js');

function run(depths) {
    let count = 0;

    for (let i = 1; i < depths.length; i++) {
        if (depths[i] > depths[i-1]) count++;
    }

    return count;
}

console.log(run(input))