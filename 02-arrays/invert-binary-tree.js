function invertTree(root) {
        if (root === null) {
            return root // stop traveling and inverting
        }

        let savedLeft = root.left
        root.left = root.right
        root.right = savedLeft

        this.invertTree(root.left) // recursive keeps calling until it hit "null"
        this.invertTree(root.right)

        return root // return whole tree
    }

    // O(n) - time because it travels through the tree, inverting each node in O(1) time per node. our first if checks exits the traversing and inverting once its hits the null roots, 
    // this check runs O(1) per node. our variable declaration, 2 variable reassignments run in O(1) time in constant time, where each node visit takes O(1) work, and total time is O(n) 
    // because we visit n nodes (plus null leaves), which inverts every node until hitting null. eventually returning the root of the whole tree.

    // O(h) - space because even though we only have 1 variable declaration which stays O(1) constant space, and does not increase/allocate additional in memory based on the input size, 
    // however the size and depth of traveling the tree costs O(h) because we store stack frames for node level at that level and up, during the depth of the tree. worst case is O(n)
    //  where each node/root needs its own stack frame, dictating the depth and height of the tree. the best case is O(log n), were nodes split, per node at each level.