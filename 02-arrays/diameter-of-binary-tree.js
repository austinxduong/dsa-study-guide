function     diameterOfBinaryTree(root) {
        this.diameter = 0

        this.depth(root)

        return this.diameter
        
    }
    depth(root) {
        if (root === null) {
            return 0
        }
        let left = this.depth(root.left) // ends at node 4: left child null, returns 0
        let right = this.depth(root.right) // // ends at node 4: right child null, returns 0

        let candidate = left + right // 0

        if (candidate > this.diameter) { // 0
            this.diameter  = left + right // stays the same
        }
        
        return Math.max(left + 1, right + 1) // return the biggest depth of either side
        // returns max of (0 + 1, 0 + 1) so depth of 1 at node 4.node 4 is finished.
        // goes back up the algo at let left, resuming node 2. the returned 1 plugs into let left variable. 
        // going back up; let left = this.depth(4) = left = 1
        // right goes next. same process, and value let right = this.depth(4) = right = 1
        // return: both sides compares, 2 is the longest length at node 2
        // goes back up the algo at let left, resuming node 1. the returned 2 plugs into let left variable. 
        // going back up; let left = this.depth(2) = left = 2
        // right goes next. same process, and value let right = this.depth(3) = right = 1
        // return: both sides compares, 3 is the longest length at node 1
        // no more root nodes past node 1. so 3 is the final answer.
    }
/*
        1
      /   \
     2     3
    / \
   4   5
*/


// O(n) - time is is O(n) across both functions. for the first function, our first variable runs O(1), where our internal depth function runs O(n) across the whole tree. 
// which makes O(1) + O(n) into a total of = O(n) time. our second function, the inner recursive helper runs O(n) because it executes a total of 2n + 1 call frames. 
// For each frame, it checks for null, make left and right recursive calls and performs O(1) per frame. then our variable candidate, runs O(1) per call. our if statement 
// then compares the candidate to the current diameter records, if candidate is larger, it updates this.diameter at O(1) per call. Finally, return Math.max(left + 1, right + 1) 
// adds 1 level of depth for the current node and returns the maximum subtree depth (height) up to its parent, which runs in $O(1)$ work.. at the end the total time complexity 
// is n + n + 1, where first n = all nodes in tree total 5, second n = null slots before each node is created = 5, and the + 1 = is the single leftover null slot that completes 
// the total null count.Multiplying (2n + 1) frames by O(1) work per frame gives 2n + 1, which simplified finally to O(n).

// O(h) - space is O(h), where h represents the height of the entire tree. each recursive frame holds its own local variables (left, right, and candidate), taking O(1) space per frame.
//  O(h) space comes from the stack frames waiting concurrently in memory, forming a single active call chain at most h + 1 frames deep from the root down to the deepest leaf. stack 
// frames are created and popped incrementally rather than all at once. in the worst case h = n making space O(n). in the best case h = log n, making space O(log n).