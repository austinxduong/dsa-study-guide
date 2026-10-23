function reverseKGroup(head, k) {
        let placeholder = new ListNode()
        placeholder.next = head
        let endNode = placeholder
        let walker = endNode
        let steps = 0

    while (true) { // runs group 1 top to bottom
        steps = 0 // reset steps
        walker = endNode // reset walker

        while (walker !== null && steps !== k) { // simply asks, are there even groups of k?
            steps++
            walker = walker.next
        }
        if (walker === null) {
            return placeholder.next // return whole list unchanged if no even groups formed at k each
        }
        let nextGroupStart = walker.next // after first pass sits at node 3
        let current = endNode.next // node 1 after placeholder
        let prev = nextGroupStart // after first pass sits at node 3
        steps = 0
        
        while (steps !== k) {
            let saved = current.next // saved = node 2 (the node after node 1)
            current.next = prev // node 1 next slot gets node 3
            prev = current // node 3 = node 1
            current = saved // node 1 = node 2
            steps++ 
            // in total 1,2,3 = 3,2,1
        }
        let groupTail = endNode.next
        endNode.next = prev
        endNode = groupTail
        }
    }

    // 