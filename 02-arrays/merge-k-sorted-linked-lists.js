/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
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

    mergeKLists(lists) {

        if (lists.length === 0) {
            return null
        }

        while (lists.length > 1) {
            let merged = [] // becomes a flat list chain of nodes
            

            for (let i = 0; i < lists.length; i+=2) {
                if (lists[i + 1] === undefined) {
                    merged.push(lists[i])
                } else if (lists[i + 1] !== undefined) {
                let mergedTwo = this.mergeTwoLists(lists[i], lists[i + 1]) // connect all nodes together
                merged.push(mergedTwo) // push all those nodes into merged
                }
            }
            lists = merged
        }
        
        return lists[0]
    }
}

// O(N log K) - 
// for our helper time is: where (n + m) are the length of list1 and list2, compare each node, and its gets updated and rewired in-place. 
// the loop processes one node per pass using O(1) constant-time comparisons and assignements. Any remaining nodes from the non-empty list are then 
// rewired in a single O(1) assignment, keeping the overall runtime linear relative to the input size.

// However, for mergeKLists, the overall time complexity is O(N log K). Here, K is the initial number of lists, and N is the total count of 
// nodes across all lists.In a single pass, merging adjacent pairs walks every node once, making 1 pass cost O(N) time. Because each pass pairs up lists 
// and halves their count, it takes log k total passes ro reach 1 final list. our first if block, returns a null if list length is 0 which is O(1) time. 
// our first while loop checks if there are at least 2 lists, we run our inner loop stepping 2 lists at a time. For each iteration, if a pair exists, we 
// merge them and push the combined list into merged; if an odd list is left without a pair at the end, we push it into merged as-is. other wise, if a 
// pair can be found, push those lists into merged. during this pass, pass 1 -- we are grouping every list into pairs effectively halving our original list. 
// then we rewrite our original list with our new merged list. and return the head of the first list which holds the entire single combined chain.

// O(K) - space because while we have two variables merged and mergedTwo, while mergedTwo is O(1) space which doesn't change in size space, and remains 
// constant at every pass, our merged list ends up half the size of all list originally given which is 1/2 k, since we drop 1/2 fraction it becomes O(k) 
// where k is the size of all lists originally given to us. No new nodes are created in the process.