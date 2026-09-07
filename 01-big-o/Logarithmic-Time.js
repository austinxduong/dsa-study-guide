/*
Imagine you have a sorted list:

1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

You want to find 13.

Instead of checking:

1
2
3
4
5
...
13

you repeatedly cut the search area in half.

15 items
↓
7 items
↓
3 items
↓
1 item

That's 

"Every step eliminates a large portion of the remaining possibilities."

O(log n)
*/

function binarySearch(numbers, target) {
    let left = 0; // Space Complexity is O(1) because the size of variable don't increase proportionate to the size of numbers array.
    let right = numbers.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2); // Time Complexity is O(log n) because were repeatedly cutting the array size in half.

        if (numbers[middle] === target) {
            return true;
        }

        if (numbers[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return false;
}