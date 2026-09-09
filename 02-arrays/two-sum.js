function twoSum(nums, target) {
        const sum = []

        for (let i =0; i < nums.length; i++) {
            for (let j= i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    sum.push(i, j)
                    return sum
                }
            }
        }
    }

    // brute force
    // 0(n2) - time because there is nested loops - for each items, we are doing something with every other item. 
    // O(1) - space because we are only storing a constant size 2 for variable sum


    function twoSum(nums, target) {
        const hashMap = new Map()

        for (let i=0; i < nums.length; i++) {
            const match = target - nums[i]
            
            if (hashMap.has(match) && nums[i] + match === target && hashMap.get(match) !== i) {
                const pairs = [hashMap.get(match), i]
                const sortedArray = pairs.sort((a,b) => a-b)
                return sortedArray
            }
            hashMap.set(nums[i], i)
        }
    }

// optimized 
// O(n) - time because we loop the to the size proportionate of nums array,
// O(n)- space because the space size of hash map is proportionate the size of the nums array

match =  10 - 6 = 6
4 + 6 = 10 / true

match = 10 - 5 = 5
5 + 5 = 10 / true

match 10 - 6 = 4
6 + 10 / true

// refactored:
// nums[i] + match === target (removed) - is basically checking target === target. it can never catch a real bug or ever evaluate to false, so it's dead weight that doesn't change behavior. 
// hashMap.get(match) !== i (removed) - the index would never match hashMap.get(match) - because it won't get added to the map anyway since it runs through the check first at 
// const sortedArray = pairs.sort((a,b) => a-b) (removed) - hashMap.get(match) can never come back equal to or greater than the current i: nothing gets added to the map until after the current index has already been checked.


function twoSum(nums, target) {
        const hashMap = new Map()

        for (let i=0; i < nums.length; i++) {
            const match = target - nums[i]
            
            if (hashMap.has(match)) {
                const pairs = [hashMap.get(match), i]
                return pairs
            }
            hashMap.set(nums[i], i)
        }
    }