
function  trap(height) {
        let left = 0
        let right = height.length - 1

        let leftMax = 0
        let rightMax = 0
        let totalwater = 0

        while (left < right) {
            if (height[left] < height[right]) { //is the right value bigger than the left?
                leftMax = Math.max(leftMax, height[left]) // if yes, calc the max value of the left
                totalwater += leftMax - height[left] // first iteration will be water filled, since there is no space. just 1 wall.
                left++ // then move leftpointer right inward once.
            } else if (height[right] <= height[left]) { //is the left value bigger than the right?    
                rightMax = Math.max(rightMax, height[right]) //if yes, calc the max value of the right
                totalwater += rightMax - height[right]
                right-- // then move the right pointer to the left inward once.
            }
        }
        return totalwater
    }

// O(n) - time because we only loop once, with if checks finding the max values. and the time length we have to loop is proportionate to the size of the the input array
// O(1) - space because we are only keeping track of left, right, leftMax, rightMax, and total water which doesn't grow in size and just updates, which makes it O(1).

/*
Whichever side is shorter gets processed and pushed inward, because the shorter wall is always the "limiting factor" that controls how high water can rise. 
The taller wall sits still and acts as an anchor until the other pointer finds something even taller
*/


/*
===================================================================
Step-by-Step Walkthrough (height = [3, 1, 4])
===================================================================

Visual Layout:
Index:   0    1    2
Height:  3    1    4

-------------------------------------------------------------------
Step 1: Start pointers at outer edges
-------------------------------------------------------------------
Pointers:  left = 0 (height 3), right = 2 (height 4)
State:     leftMax = 0, rightMax = 0, totalwater = 0

Check: Is height[left] < height[right]? (3 < 4 -> YES)
    1. Update leftMax:  Math.max(0, 3) = 3 (Index 0 becomes our left wall)
    2. Water at index 0: leftMax - height[left] = 3 - 3 = 0
    3. Advance pointer: left++ -> left is now 1

-------------------------------------------------------------------
Step 2: Move into index 1
-------------------------------------------------------------------
Pointers:  left = 1 (height 1), right = 2 (height 4)
State:     leftMax = 3, rightMax = 0, totalwater = 0

Check: Is height[left] < height[right]? (1 < 4 -> YES)
    1. Update leftMax:  Math.max(3, 1) = 3
    2. Water at index 1: leftMax - height[left] = 3 - 1 = 2
                        (Trapped between left wall 3 and right wall 4)
    3. Add to total:    totalwater = 0 + 2 = 2
    4. Advance pointer: left++ -> left is now 2

-------------------------------------------------------------------
Step 3: Pointers meet (left == right)
-------------------------------------------------------------------
Pointers:  left = 2, right = 2

Condition: while (left < right) is now FALSE. The loop terminates.

===================================================================
Final Output: totalwater = 2
===================================================================
*/















/*
===================================================================
Step-by-Step Walkthrough: When the 'else' block triggers
Array: height = [4, 1, 3]
===================================================================

Visual Layout:
    Index:   0    1    2
    Height:  4    1    3

-------------------------------------------------------------------
Step 1: Start pointers at outer edges
-------------------------------------------------------------------
Pointers:  left = 0 (height 4), right = 2 (height 3)
State:     leftMax = 0, rightMax = 0, totalwater = 0

Check: Is height[left] < height[right]? (4 < 3 -> FALSE)
    -> Executes the 'else' block!
    1. Update rightMax:  Math.max(0, 3) = 3 (Index 2 becomes our right wall)
    2. Water at index 2: rightMax - height[right] = 3 - 3 = 0
    3. Advance pointer: right-- -> right is now 1

-------------------------------------------------------------------
Step 2: Move into index 1
-------------------------------------------------------------------
Pointers:  left = 0 (height 4), right = 1 (height 1)
State:     leftMax = 0, rightMax = 3, totalwater = 0

Check: Is height[left] < height[right]? (4 < 1 -> FALSE)
    -> Executes the 'else' block again!
    1. Update rightMax:  Math.max(3, 1) = 3
    2. Water at index 1: rightMax - height[right] = 3 - 1 = 2
                        (Trapped between left wall 4 and right wall 3)
    3. Add to total:    totalwater = 0 + 2 = 2
    4. Advance pointer: right-- -> right is now 0

-------------------------------------------------------------------
Step 3: Pointers meet (left == right)
-------------------------------------------------------------------
Pointers:  left = 0, right = 0

Condition: while (left < right) is now FALSE. The loop terminates.

===================================================================
Final Output: totalwater = 2
===================================================================
*/