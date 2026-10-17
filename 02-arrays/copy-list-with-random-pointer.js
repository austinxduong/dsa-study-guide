function copyRandomList(head) {
        let start = new Node()
        let previous = start
        let walker = head
        let map = new Map()
        
        while (walker !== null) {
            let copy = new Node(walker.val)
            map.set(walker, copy)
            previous.next = copy
            previous = copy
            walker = walker.next
        }
        walker = head
        map.set(null, null)
        while (walker !== null) {
            let copy = map.get(walker)
            copy.random = map.get(walker.random)
            walker = walker.next
        }
        return start.next
    }


    // O(n) - time because our first loop visits every node from our original list, and creates a deep copy. where cost per pass is O(1), 
    // creates an unlinked individual copy (node clone) of the current node in the map, and three variable assignments where setting in the 
    // map is O(1) average time. the setup cost before the loop is also O(1) for our 4 variable declarations, which execute only once before 
    // the loop begins. our second loop is also O(n), where it loops the original list, and assigns the random value to our copied nodes.
    //  where each cost per pass is O(1) where we get the value of the node in the map, with two variable reassignments. the setup cost is 
    // also O(1) with a variable declaration, and setting null key and value in the map both executed only once before the loop starts. 
    // this makes the whole algo time complexity O(n) + O(n) + O(1) + O(1) + O(1) = O(2n) + O(1) which simplifies to O(n).


    // O(n) - space because while have 6 variable declarations, 5 are O(1) constant space, where our map variable grows proportionate to n, 
    // when we loop and create new copies of each node from the original list to the map as key value pairs, and where start variable is 
    // still O(1) even though we allocate an extra node in memory. even though our loop calls new Node n times that part is O(n) because the 
    // space size grows each time its called, the variable itself doesn't grow in space size so it stays in  O(1) constant space. our get 
    // method for the map is also O(1) average time. so O(n) map entries + O(n) new nodes + variable declarations O(1) - gives us O(2n) which simplifies  to O(n)