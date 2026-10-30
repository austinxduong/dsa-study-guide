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

