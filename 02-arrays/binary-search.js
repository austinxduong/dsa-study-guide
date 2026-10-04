function search(nums, target) {
        let left = 0
        let right = nums.length - 1
        let mid = Math.floor((left + right) / 2)

        while (left <= right) {
            mid = Math.floor((left + right) / 2)

            if (nums[mid] < target) {
                left = mid + 1
            } else if (nums[mid] > target) {
                right = mid - 1
            } else if (nums[mid] === target) {
                return mid
            } 
        }
        return - 1 
    }

// O(log n) - time because we used binary search where we are continually cutting the array in half -- meaning it doesn't loop through the entire array and compare each number, 
// which makes it not O(n). O(log n) finds the mid number in the array, and splits and discards the entire half of the array where the middle number is either > or < then the target. 
// the middle target is also discarded along with the discarded half. O(log n) asks us, how many times do we have to divide the total elements in the array by 2, until we reach 1. 
// where that power raised, is the total amount of operations we only need to perform.

// O(1) - space because space is O(1) because we are keeping track of three variables, left, right and mid - which don't change in space size and just update as we iterate through the array.