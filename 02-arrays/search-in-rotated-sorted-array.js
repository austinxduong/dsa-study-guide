function search(nums, target) {
        let left = 0;
        let right = nums.length - 1
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)

            if (nums[mid] === target) {
                return mid
            }

            if (nums[left] <= nums[mid]) {
                if (target >= nums[left] && target <= nums[mid]) {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            } else if (nums[right] >= nums[mid]) {
                if (target >= nums[mid] && target <= nums[right]) {
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }
        }
        return - 1
    }

// O(log n) - time because time is 0(log n) because while left is <= right - the loop continues, where initially if the mid is ever equal to the target, 
// the index of that target is returned immediately. otherwise, we evaluate the array first see which stretch; left or right at the mid is sorted. 
// if the left is sorted and the target lives between left and mid, both left and right shrinks the search range until mid is found where it equals target, 
// if left and right meet, the loop continues and if our mid doesn't equal our target, once the left pointer moves past the right pointer, a -1 is returned. 
// if the array is sorted but target doesn't live in between nums[left] and nums[mid], it lives somewhere in our right stretch. before the left runs, if it is not sorted, 
// then the same logic happens except on the right side, if it doesn't exist in the right then it must live on the left stretch. n represent the length of input array 
// that we repeatedly cut n, which shortens our search range. one pass throws about half of the range; left or right. starting with n elements, halving until nothing is 
// left takes about 2 raised to its power to equal n (because n is dynamic we don't know a fixed power 2 is raised to). there are about log n passes, due to it being 
// continually halved. and each pass costs O(1).so the total time is O(log n)

// O(1) space because e are keeping track of three variables left, right, and mid --- where space size doesn't grow, it just updates in constant time.