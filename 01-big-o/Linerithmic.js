/*
You'll see this frequently with efficient sorting algorithms.

Merge Sort → O(n log n)

O(n log n)

is generally much better than:

O(n²)

for large inputs.

That's:
time O(n log n):  
    n is the size of the input array (the total number of elements you're sorting). Putting the whole picture together: n is how many elements you have, and is always static
    log n = how many rounds of splitting it takes until every element is alone by itself. log n is always dynamic. Splitting happens vertically.
    when merging happens: so split vertically downward ( no sorting yet) just keep going deeper until each by itself. then once standalone elements are reached, sort them as we merge the groups upwards.
    [ 4, 1, 8, 3, 7, 2, 6, 5]

    split the array in half, and process everything in to the left into single number first. then the same for the right half next.

    [ 4, 1, 8, 3] - level 1: first left half 

    it turns into: - level 2
    [4, 1] and [[8, 3]

    it turns into: - level 3
    [4], [1], [8], [3]

    it turn
    
    level 1:
    it turns [4, 1] into [1, 4]
    it turns [8, 3] into [3, 8]
    it turns [7, 2] into [2. 3]
    it turns [6, 5] into [5, 6]
    - every single one of the 8 elements was visited and sorted into mini groups of 2

    level 2:
    it merges [1, 4] and [3, 8] into [1, 3, 4, 8]
    it merges [2, 7] and [5, 6] into [2, 5, 6, 7]
    - every single one of those 8 elements was visited, and 2 groups of 4

    level 3:
    it merges [1, 3, 4, 8] and [2, 5, 6, 7] into [1, 2, 3, 4, 5, 6, 7. 8]
    0 the entire array is now perfectly sorted!


space O(log n):
    log n = space expands as you go deeper into new splits, and it shrinks back down as each piece of work finishes 
    and gets cleared/freed from memory, ready to be reused by whatever comes next. 
    That expand-and-shrink behavior, tied to the deepest point it ever reaches, is exactly what keeps space at O(log n) instead of accumulating the way time does.

    [4 elements] <-- Level 2 memory active 
    [8 elements] <-- Level 1 paused in background

    [2 elements] <-- Level 3 memory active
    [4 elements] <-- Level 2 paused in background
    [8 elements] <-- Level 1 paused in background

    [1 elements] <-- Level 4 (Base case reached!)
    [2 elements]
    [4 elements]
    [8 elements]

    Memory used: 4 frames.
    once that [1 element] frame finishes, the computer instantly deletes it from memory (pops off the stack) and drops back to level 3.
    it then handles the right side of that pair, finishes it, deletes it, and drops down to level 2.

space O(N) - where time is O(n log n)
    alhough we keep track of log n = space expands as you go deeper into new splits, and it shrinks back down as each piece of work finishes.
    a before the splitting begins, a temporary array is created to the exact size of N. then we split that temporary array all the way down to single emlements
    once elements are standalone, using that same temporary array, we just merge and sort back the original temporary array
    so essentially O(log N) is tracked, BUT the amount of elements in an array, can be bigger than the the deepest level we can split. so O(N) takes precedence.
*/

// Merge sort - why O(n) takes predence over (log n)
    // this sorting method needs to track the depth level of splititng, and also needs a temporary array to split and merge back together seperate from the originl array.
    // this means the temporary array can hold N elements, which can be larger than the deepest level splittig needs. so O(n) takes precedence.

// Quicksort - stays (log N)
    // sorting happens wihtout needing a temporary array. sorting happens in place in the original array

// Heapsort = stays O(1)
    // this method doesn't need to split levels at all
    // sorting happens in place like quicksort


