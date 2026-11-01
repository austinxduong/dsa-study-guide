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

    // 

    //