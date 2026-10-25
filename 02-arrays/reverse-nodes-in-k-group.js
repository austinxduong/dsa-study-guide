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

    // O(n) - time because in our first while loop it runs n/k times, where we iterate through our list in chunks of k, with one extra final pass that hits null and returns . 
    // then before our loops starts, we have 2 variable declarations which are setup costs of O(1), that execute once per pass. in our second while loop, this is runs O(K) 
    // because if keeps iterating through every valid group of k, up to k, where steps and walker update in constant time O(1), and an additional checker once it hits null 
    // and exists the while loop that returns reversed nodes, and left over nodes that weren't grouped at k. then before our third while loop, we have setup costs of 3 
    // variable declarations which are O(1), and a variable reassignment which is also O(1). in our third while loop, this runs O(k), which reverses every group of k, up 
    // to k, found in our list of nodes. we have 1 variable declaration which is O(1), and 4 variable reassignments which is also O(1). after all reversals and while loop 
    // finishes, we have 1 variable declaration and 2 variable reassignments which are O(1). so total time complexity is n/k x 2k = 2n (the two k cancel each other out) = which is finally O(n).

    // O(1) - space because we have 9 variable declaration which only take O(1) constant space, where only 1 of the 9 allocates 1 extra node space as the placeholder. 
    // other than that, the groups of k, amounts of chunks of k, and the size of our list of nodes does not scale with space with those inputs.