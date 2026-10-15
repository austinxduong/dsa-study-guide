function reorderList(head) {
        let length = 0
        let current = head

        while (current !== null) {
            length++
            current = current.next
        }
        let steps = 0
        current = head
        while (steps !== Math.ceil(length / 2 - 1 )) {
            steps++
            current = current.next
        }
        let saved = current.next 
        current.next = null

        let revCurrent = saved
        let prev = null

        while (revCurrent !== null) {
            let revSaved = revCurrent.next // points to next node in original list, node 6, NOT reversed, store as variable revSaved
            revCurrent.next = prev // revCurrent.next was at node 6. prev points to our revsersed list = null.
            prev = revCurrent // points to the reversed list. revCurrent = 5. prev now = 5 also.
            revCurrent = revSaved // revSaved points to node 6. revCurrent becomes node 6.
        }

        let leftWalker = head
        let rightWalker = prev

        while (rightWalker !== null) {
            let savedLeftWeave = leftWalker.next
            let savedRightWeave = rightWalker.next
            leftWalker.next = rightWalker
            rightWalker.next = savedLeftWeave
            leftWalker = savedLeftWeave
            rightWalker = savedRightWeave
        }
    }


    // O(n) - time is O(n) where n represents the length of our list of nodes starting at head. our first while loop counts the length of each node from our list 
    // at head, where length and current setup costs us O(1). and the the cost per pass is O(1) with the update to length++ and our variable reassignment. 
    // then our second while loop counts up to the midpoint of the list to cut it, and splits the left side of the list of nodes, and counts UP to the last 
    // node within the left half of the list, for odd numbered lists- its going to have 1 more node then the right half. once we count up to the last node of 
    // our left half of our list, we set its next as null, and we save the next node after it (which is the first node of the right half of our list), and save 
    // it as a variable "saved". our set up cost is a variable, and a variable reassignment which costs us O(1), and executes only once before the loop starts. 
    // each cost per pass of this while loop is O(1) where our condition rounds our calculation with Math.ceil, giving us our left half of steps for the loop to 
    // run through. and steps increment until that condition is reached, and current ends simply on the last node of the left half of the list (the end of the step). 
    // when the loop ends our clean up cost is O(1), by setting a variable, and variable reassignment. our third while loop is O(n) because we have to visit each node 
    // in the right half of the list, and reverse every node in the right half of the list where n represents the length of our list of nodes. our set up cost is O(1),
    //  where we have two variables revCurrent and prev, which only executes once before the loop starts. each cost per pass is O(1) as save update our revSaved variable,
    //  and do variable reassignments. our fourth while loop is O(n), because we have to touch every node in our left list, while we touch every node in our right list 
    // as it gets weaved into our left list - touching all nodes in both halves of our list. our set up cost, and only executes once before the loop runs is O(1), 
    // where we have to variables leftWalker and rightWalker. each cost per pass is O(1), where there is two variables, 4 variable reassignments. the final results 
    // of all four loops of O(n) still gives us O(n)


    // O(1) - space because we have a total of 11 variable declarations which costs us, and update in O(1) constant space, and don't grow in memory space size. 
    // space size does not scale with n, and no new nodes are created in the process, and no new array is created.