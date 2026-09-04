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