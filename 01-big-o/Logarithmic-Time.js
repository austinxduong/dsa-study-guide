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