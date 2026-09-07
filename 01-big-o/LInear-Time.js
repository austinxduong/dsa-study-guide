for (const number of numbers) {
    console.log(number);
}

/*
If we have:

5 numbers → 5 iterations
100 numbers → 100 iterations
1,000 numbers → 1,000 iterations

The amount of work grows with the size of the input.

That's:
"I have to potentially look at every item."

O(n)
*/

function findMax(numbers) {
    let max = numbers[0]; // Space complexity is O(1) because we only maintain one additional variable. As n grows, we're still only keeping track of one max value.

    for (const number of numbers) { // Time complexity is O(n) because the algorithm may need to examine every element in the input array, so the amount of work grows proportionally with n. and n represents the size of the numbers array.
        if (number > max) {
            max = number;
        }
    }

    return max;
}
