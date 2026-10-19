function findDuplicate(nums) {
        let slow = 0
        let fast = 0

        slow = nums[slow]
        fast = nums[nums[fast]]

        while (slow !== fast) {
            slow = nums[slow]
            fast = nums[nums[fast]]
        }
        slow = 0

        while (slow !== fast) {
            slow = nums[slow]
            fast = nums[fast]
        }
        return fast
    }

// O(n) - time because in our first loop, slow moves 1 step, and fast moves 2 steps. eventually they meet on the same index, and the first while loop breaks. 
// the loop runs at most n times, because once slow enters the cycle, fast closes the gap by 1 step on every iteration (where slow moves 1 step forward, 
// and fast move 2 steps forward. the cost per pass is O(1) with our 2 variable reassignments, where our setup costs is also O(1) with our 2 variable 
// assignments and variable declaration, that run only once before the first loop starts. in our second loop it is O(n) because both pointers move 1 
// step per pass from their starting own starting points (slow starting at 0, fast starts off where it left from our first loop), until they meet at 
// the same index, that index is the repeated number. our cost per pass is O(1) with our two variable reassignments, where our setup costs is also O(1) 
// with 1 variable declaration, which executes once before our loop. with both while loops, this creates O(n) + O(n) = O(2n) which simplifies to O(n).

// O(1) - space because auxiliary because we have only have 2 variable declarations which don't grow in space size, and only update in constant space. 
// no extra memory is allocated, and doesn't increase or grow regardless of input size.