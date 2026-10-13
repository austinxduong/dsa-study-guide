function hasCycle(head) {
        let current = head
        let visited = new Set()

        while (current !== null) {
            if (!visited.has(current)) {
                visited.add(current)
                current = current.next
            } else {
                return true
            }
        }
        return false
    }


    // O(n) - time where n is the number of nodes. because we have to visit each node in our list until we hit a cycle,
    // where a node already is already visited in our set. each cost per pass with our has and add method is O(1) constant time.

    // O(n) - space because while we only track 2 variables where current only updates in O(1) constant space where space memory does not grow. our visited set grows for each unique node in our list.