function addTwoNumbers(l1, l2) {
        let start = new ListNode()
        let previous = start
        let walkerList1 = l1
        let walkerList2 = l2
        let carry = 0

        while (walkerList1 !== null || walkerList2 !== null || carry !== 0 ) {
            let digit1 = walkerList1 !== null ? walkerList1.val : 0
            let digit2 = walkerList2 !== null ? walkerList2.val : 0
            let sum = digit1 + digit2 + carry
            carry = Math.floor(sum/10)
            let digit = sum % 10
            let newNode = new ListNode(digit)
            previous.next = newNode
            previous = newNode
            walkerList1 = walkerList1 !== null ? walkerList1.next : null
            walkerList2 = walkerList2 !== null ? walkerList2.next : null
        }
        return start.next
    }

    // O(max(n, n)) - because as we loop through both lists, we add the values/digits inside the nodes, and continue doing so until we 
    // reach the end of the longest length of the either list plus at most 1 additional pass if a final carry remains, where n represents 
    // list1 and m represents list2, and max is the longest length of either list. since that final carry pass adds at most a single O(1) 
    // iterations, O(max(n+m)+1) simplifies to O(max(n, m)). the cost of each pass is O(1), where we have 5 variable declarations, and 5
    //  variable reassignments. the count of variable declarations/assignment do not grow in time. the setup costs is also O(1), where we have variable declarations.

    // O(1) - auxiliary space because 10 variable declarations, where 2 are still O(1) even though 1 allocates memory for the 0th node from start, 
    // and the other allocates extra memory for each node created which scales with O(max(n, m) but that isn't auxiliary, so it doesn't count. 
    // however, total variable declarations don't grow in space size, and don't grow linear to input size.