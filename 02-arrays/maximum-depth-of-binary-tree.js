function maxDepth(root) {
        if (root === null) {
            return 0
        }
        let leftRoot = this.maxDepth(root.left)
        let rightRoot = this.maxDepth(root.right)

        let depth = Math.max(leftRoot + 1, rightRoot + 1)
        return depth
    }

    // O(n) - time because we first check if the node is at null. if so we return 0 we hit our base case and recursion stops. in our two recursive calls, 
    // the recursive call executes O(1) per node and completes, that same execution is invoked repeatedly across all n nodes including null nodes, totaling O(n) 
    // times. (n = all nodes in the tree) + (n = all null nodes at the end of tree) + (1 empty node slot before a real node gets assigned/created) n + n + 1: totaling 2n + 1 and eventually O(n).

    // O(h) - space because  h represents the maximum height/depth of the entire tree. where each stack frame is called and kept in memory per level incrementally
    //  as it travels downward, deeper into the tree. once null is hit and the base case is reached, the stack frame for those null nodes gets erased and return 
    // immediately 1 level up to its original parent node. once control goes back to the parent node, that stack frame at that level also gets erased next the moment
    //  it hits the second return statement at the end. the stack frame of the entire tree is never held all at once. where we also have 3 variable declarations, 
    // where they are all O(1) space and don't grow in space size memory based on the height of the tree and amount of nodes. so its O(h) because of the accumulated 
    // stack frame that gets created per level incrementally as it travels downward in the tree. worst case is O(n) which means each nodes needs its own level and 
    // stack frame meaning the tree is linear, and best case is O(log n) means stack frame and depth of tree is proportionate to repeatedly cutting the half the size of the nodes in the tree.