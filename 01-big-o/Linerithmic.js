/*
You'll see this frequently with efficient sorting algorithms.

Merge Sort → O(n log n)

O(n log n)

is generally much better than:

O(n²)

for large inputs.

That's:
time O(n log n):  
    n is the size of the input array (the total number of elements you're sorting). Putting the whole picture together: n is how many elements you have
    log n = how many rounds of splitting it takes until every element is alone by itself. Splitting happens vertically.
    [ 4, 1, 8, 3, 7, 2, 6, 5]
    
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
*/


