    twoSum(nums, target) {
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