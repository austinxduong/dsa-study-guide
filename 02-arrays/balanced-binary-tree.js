function     isBalanced(root) {
        this.balanced = true

        this.depth(root)

        return this.balanced
    }

    depth(root) {
        if (root === null) {
            return 0
        }
        let left = this.depth(root.left)
        let right = this.depth(root.right)

        if (Math.abs(left - right) > 1) {
            this.balanced = false
        }

        return Math.max(left + 1, right + 1)
    }


/*
        1
      /   \
     2     3
    / \
   4   5
*/

// O(n) - time because O(n) for the first function, because it performs O(1) setup, and calls depth(root) once, which processes the entire tree of O(n). 
// the second function executes 2n + 1: n times for real nodes, and n + 1 times for null base cases where the recursion stops. then left and right variables 
// run O(1) time, but both recursive calls inside those variables are k + (n - 1 - k), totaling O(n). this means k = all left nodes in our left branch, 
// n = all nodes in the tree, minus the current node we are on, minus all left nodes in the left branch. our if statement runs O(1) which lets us know 
// if the difference in height is more than 1, and if so balance gets updates to false. then we return the max depth including its height of the root 
// node, and pass that in to either left or right. so overall time is O(n).

// O(h) - space is O(h) overall. inside each frame, the 3 local variables root, left, and right use O(1) memory, and the instance property this.balanced 
// adds one extra O(1) boolean variable. the two recursive calls push frames incrementally per level rather than all at once. at any single moment, active
//  frames on the stack form a single chain of ancestors from the root down to the current nod, plus 1 null run at the bottom peaking at h +1 frames. 
// execution traverses down the left branch frame by frame until reaching null, as each child subtree finishes both its left and right calls, its frame 
// pops off and returns its depth up to the parent, which can then perform the same sequential traversal down its right branch. the worst case scenarios 
// is if h = n, making it O(n), where each node needs its own level/depth. where best case is where h = log n, making it  O(log n), where each level double 
// node capacity, splitting the nodes evenly across the left and right branches, making the tree balanced.