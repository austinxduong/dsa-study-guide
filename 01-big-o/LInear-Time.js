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