```
FAST
 ↓
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
 ↓
SLOW

O(1)       → "I don't care how big n is."
O(log n)   → "I'm cutting the problem down."
O(n)       → "I have to look at everything."
O(n log n) → "I'm processing everything across log levels."
O(n²)      → "I'm comparing everything with everything."

```
| Complexity | Name | Mental Model | Example |
|---|---|---|---|
| **O(1)** | Constant | Same amount of work regardless of `n` | `numbers[0]` |
| **O(log n)** | Logarithmic | Cut the problem in half each step | Binary search |
| **O(n)** | Linear | Look at each item once | One loop through an array |
| **O(n log n)** | Linearithmic | `n` work × `log n` levels | Merge sort |
| **O(n²)** | Quadratic | Compare items against other items | Nested loops |