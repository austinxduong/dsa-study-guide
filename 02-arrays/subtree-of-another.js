function isSubtree(root, subRoot) {
        if (root === null) {
            return false
        }

        let matchHere = this.isSameTree(root, subRoot) // run whole sweep at node and descedants if same tree

        let left = this.isSubtree(root.left, subRoot) // moves to left node and runs whole sweep matchHere
        // left entire tree of the current left node to see if it matches S.
        let right = this.isSubtree(root.right, subRoot) // move to right node and runs whole sweep matchHere

        if (matchHere === true || left === true || right === true) {
            return true
        } else {
            return false
        }

    }

    isSameTree(p, q) {
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
}

/*

 root R1            root R2           subRoot S
     3                  3                 4
    / \                / \               / \
   4   5              4   5             1   2
  / \                / \
 1   2              1   2
                   /
                  0

*/