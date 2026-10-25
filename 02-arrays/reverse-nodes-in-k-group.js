    reverseKGroup(head, k) {
        let placeholder = new ListNode()
        placeholder.next = head
        let endNode = placeholder
        let walker = endNode
        let steps = 0

    while (true) { // runs group 1 top to bottom
        steps = 0 // reset steps
        walker = endNode // reset walker

        while (walker !== null && steps !== k) { // simply asks, are there even groups of k?
            steps++ // red/green lights to know how many groups there are.
            walker = walker.next // walks to group in amounts of k.
        }
        if (walker === null) {
            return placeholder.next// Return the head of the ENTIRE rewired list (Node 3).
            // The incomplete group is already naturally attached at the very end.
        }   // everything up above, is a pre check (what groups of nodes to reverse, and what to leave in tact)
        let nextGroupStart = walker.next // before first pass sits at node 4. this stays fixed.
        let current = endNode.next // node 1 after placeholder. start at head node of group we want to reverse.
        let prev = nextGroupStart // before first pass sits at node 4. this move during reversal. resets for next group.
        steps = 0

        // pass 2 for group 1 starts
        while (steps !== k) { // process and reverse our first group 1
            let saved = current.next // saved = node 2 (the node after node 1)
            current.next = prev // current.next (node 1's next slot) = node 2. current.next now becomes node 4. 1 -> 4
            prev = current
            // Pass 1: prev becomes Node 1 (was Node 4 before loop).
            // Pass 2: prev becomes Node 2.
            // Pass 3: prev becomes Node 3 (the new head of Group 1).
            // move foward from the original list
            current = saved
            // After Pass 1: current moves from Node 1 to Node 2.
            // After Pass 3: current moves past the group to Node 4 (where the loop stops).
            // moves foward from original list. eventually becomes new head of group 2.
            steps++ 
            // in total 1,2,3 = 3,2,1
        }
        // after reversal is done for group 1
        let groupTail = endNode.next // becomes the last tail after all groups are reversed. for pass 1, its node 1
        endNode.next = prev // Node 3 which is the new head of the reversal
        endNode = groupTail // endNode = node 1 of group 1 after reversal.
        }
    }