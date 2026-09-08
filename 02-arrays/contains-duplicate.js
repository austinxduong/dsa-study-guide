console.log("JavaScript is working!");
console.log("DSA environment is ready.");


function hasDuplicate(nums) {
        for (let i =0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false
    }

    // return false only executes once i has exhausted every value up to nums.length i.e., the outer loop is completely done, not just one pass through it.
    // i stays parked, and j does a sweep through the nums array comparing it to the parked i if it matches - return true 
    // O(n²) time - because for every item, where are doing something with every other item, and its a nested loop
    // O(1) space - because where only holding i and j in memory once. regardless of input size