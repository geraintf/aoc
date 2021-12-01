const input = require('./input.js');

function run(depths) {
    let count = 0;

    let i = 0;
    let prevSum = null;

    while (i < depths.length - 2) {
        const currSum = depths[i] + depths[i+1] + depths[i+2];

        if (prevSum !== null && currSum > prevSum) {
            count++;
        }

        prevSum = currSum;
        i++;
    }

    return count;
}

console.log(run(input))