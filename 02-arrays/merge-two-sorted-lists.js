function mergeTwoLists(list1, list2) {
        let left = list1
        let right = list2
        let next = new ListNode() // val: 0, next: null (which later ends up at the end of the chain)
        let start = next // val: 0, next: null. after next updates. val: 0, next: (whatever node wins). only updates once.

        while (left !== null && right !== null) {
            if (left.val > right.val) {
                next.next = right
                next = right
                right = right.next
            } else if (left.val < right.val) {
                next.next = left // pick variable next. then inside that variable. select/update the next.
                next = left // keep every val; set the end node's next slot to the winner (the winner keeps its own next for now)
                left = left.next // move to the next node, and look at its current next slot (whichever its pointing to)

            } else if (left.val === right.val) {
                next.next = right
                next = right
                right = right.next
            }
        }
        if (left === null ) {
            next.next = right

        } else if (right === null) {
            next.next = left
        }
        return start.next
    }

// O(m+n) - time because at worst case, where (n + m) are the length of list1 and list2, compare each node, and its gets updated and rewired in-place. 
// the loop processes one node per pass using O(1) constant-time comparisons and assignements. Any remaining nodes from the non-empty list are then 
// rewired in a single O(1) assignment, keeping the overall runtime linear relative to the input size.

// O(1) - space because we have 4 fixed variables -- including a single placeholder node (new ListNode()) —which use a fixed amount of memory. 
// the variables only update in place through the loop, without allocating any additional nodes, so space remains constant regardless of the input sizes n and m