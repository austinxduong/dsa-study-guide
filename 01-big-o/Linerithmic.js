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
    log n = how many rounds of splitting it takes until every element is alone by itself.

space O(log n):
    log n = space expands as you go deeper into new splits (each new split adds another "waiting" note to the pile), 
    and it shrinks back down as each piece of work finishes and gets cleared/freed from memory, ready to be reused by whatever comes next. 
    That expand-and-shrink behavior, tied to the deepest point it ever reaches, is exactly what keeps space at O(log n) instead of accumulating the way time does.
*/


