for (const x of numbers) {
    for (const y of numbers) {
        console.log(x, y);
    }
}
/*
We have a loop inside another loop.

If there are 5 items:

5 × 5 = 25

10 items:

10 × 10 = 100

100 items:

100 × 100 = 10,000

That's:
"For every item, I'm doing something with every other item."

O(n²)

Nested loops are a big clue that you're dealing with O(n²).
*/

function printPairs(numbers) {
    for (const number of numbers) { // Time Complexity is O(n2) because of nested loops, and for every item, im doing something with every other item.
        for (const other of numbers) {
            console.log(number, other); // Space Complexity is O(1) because the algorithm doesn't store an amount of additional data that grows with n."
        }
    }
}