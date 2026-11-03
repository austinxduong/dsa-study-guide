function isSameTree(p, q) {
        if (p === null && q === null) {
            return true
        } else if (p === null || q === null) {
            return false
        }

        let left = this.isSameTree(p.left, q.left)
        let right = this.isSameTree(p.right, q.right)

        if (p.val === q.val && left === true && right === true) {
            return true
        } else {
            return false
        }
    }

    // O(min(n, m)) - time because it is worst case where both tress match up to the size of the smaller tree. because recursive calls are assigned to left and right before checking values, 
    // the algo evaluates subtrees bottom-up down to the boundary of the smaller tree before verifying. if everything is a match until either tree is bigger, that specific branch returns 
    // false to its parent frame after the smaller tree runs out of nodes, and also tells us the tree are not the same. for our first if, we check if the nodes are null at all in both 
    // trees to begin with and onwards. if so, they are the same tree. the second if checks whether there is a mismatch where one is a null, and the other isnt -- this automatically 
    // means the trees are not the same and returns false. for our two variable declarations left and right, both recrusive calls execute down to the completion of the smaller trees 
    // structure. if either is bigger tree (the algo doesn't know which is bigger in advance, it just evaluates the current node at both trees at the current stack), it will FIRST 
    // check if there is a null node or not on the smaller tree and a node on the bigger tree. since the smaller tree ran out of nodes, it will hold a null value, and THEN returns 
    // false since it prevents the stack from recursing deeper on the bigger tree. the variable declaration itself runs O(1), but the recursion inside both variables are O(min(n,m)). 
    // that last if check, first check if both vals of the node at both positions are the same, and if both returned true from the recursion of left and right. both of these run O(1) 
    // time per level at that stack frame.

    // O(h) - space where h = the height of the tree (specifically the min of the smaller tree), and a stack frame is created per level incrementally. so technically h = min(h1, h2). 
    // stack frames are not created all at once. it creates stack frames as it recurses down a branch in both trees. once that branch completes and returns a value, its stack frame is 
    // popped, and repeats the next branch in the same way. so left node on left branch on 1 tree, and left node on left branch on 2 tree. worst case scenario is where h = n, where every
    //  nodes needs is own level and stack frame. best case scenario is where h = log n, where each level doubles node capacity, splitting the nodes evenly across the left and right 
    // branches, making the tree balanced.