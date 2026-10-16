function removeNthFromEnd(head, n) {
        let starter = new ListNode()
        starter.next = head
        let length = 0
        let walker = head

        while (walker !== null) {
            walker = walker.next
            length++
        }
        let landingWalker = starter
        let steps = 0

        while (steps !== length - n) {
            landingWalker = landingWalker.next
            steps++
        }
        landingWalker.next = landingWalker.next.next
        return starter.next
    }

    // O(n) - time complexity over all is O(N) because in our first while loop, we first count the length of the original list of nodes, representing N from Big-O, 
    // we have to count each node in the original list. each cost per pass is O(1) because we simply update our walker and length variable. our set up cost of 3 
    // variable declarations, and 1 variable reassignment before the loop runs are also O(1), which execute once before the loops starts. for our second while loop 
    // it is O(N), where we calculate the step needed to reach the node's next slot we need to rewrite, where inside we update the landingWalker and steps variable, 
    // where each cost per pass is O(1) - once that steps is reached the loop stops. however, our setup costs before our loop runs is also O(1) for the two variable 
    // declarations landingWalker and steps, and only executes once before the loop runs. the clean up cost is 1 variable reassignment, landingWalker.next which is 
    // also O(1) time complexity. so worse case of the second while loop, is that the last node needs to get removed where N - 1, so the the time complexity for the 
    // loop is bound by N, and never exceeds it. where the best case is where n = N, so = 0 steps. when put together it is O(2N + C), where we drop the 2 and C, making it O(N) 

    // O(1) - space complexity is O(1) constant space because we have 5 variable declarations, where 1 of the 5 allocates 1 extra node in memory, and doesn't grow beyond that; 
    // the starter placeholder node. space does not scale with the size of N, regardless of input size.