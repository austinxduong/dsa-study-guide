function reverseList(head) {

    let current = head // points to the first head in original list, NOT reversed
    let prev = null // points to the last next of last node, IN reversed list

    while (current !== null) { // points to the current node in original list, NOT reversed
        let saved = current.next // current.next points to the next node in original list node 2, NOT reversed. store as variable saved.
        current.next = prev // current.next previously at node 2 (node after head 1). prev points to our reversed list = null.
        prev = current // points to the reversed list. current = 1, prev now = 1 also
        current = saved // saved points node 2 from original list. and current becomes node 2, from original list.
        // in total = prev moves left, starting at the right most end of our reversed list, 
        // and current moves right through the part not reversed yet(starting at node 1).
        // this loop builds our reversed list, as we grab nodes from our original list to create the reversed list at the end
    }
    return prev // returns the whole reversed list sourced from our original list
    // our final node at prev 3, holds the next node 2, and node 2 holds the node 1, and node 1 hold null
    // our loop links each current node to the node that comes after it in the reversed list (prev)
    }

    // O(n) - time because we have to visit every node from our original list, to reverse its order in place. 
    // where n = the amount of nodes in our list. which means the loop must execute n times one pass per node. the cost of each passing of a node is O(1).

    // O(1) - space because we track 4 fixed variables (head, current, prev, saved) never grow in space size, and only update in constant space throughout the loop, no matter the size of n of our original list.