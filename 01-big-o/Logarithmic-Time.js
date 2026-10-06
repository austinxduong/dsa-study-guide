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

/*
How it works:
for odd ararys - take the middle target and isolate that. splits the array in half, takes the half closer to the target, and throws the other half away - incuding the mid.
for even array - take the middle target (right at the end of the smaller half). split, and the right side will always be one more bigger.

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