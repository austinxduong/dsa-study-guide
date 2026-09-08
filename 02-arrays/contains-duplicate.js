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

// to refactor to a better time and space complexity 
// at first this was my answer
// O(n) - time - because were only looping throught the array once, and we loop through each element proportionate to the size of nums
// O(n) - space because the space size of mySet grows - taking up the space proportionate to the size of nums 
function  hasDuplicate(nums) {
        const mySet = new Set()

        for (let i =0; i < nums.length; i++) {
            if(mySet.has(nums[i]) === true) {
                return true
            } else {
                mySet.add(nums[i])
            }
        }
        if (mySet.size === nums.length) {
            return false 
        }
    }


// then i refactored again and realized this also works with less code
// O(n) - time - because the set loops through each element, proportionate to the size of nums
// O(n) - space because the space size of mySet grows - taking up the space proportionate to the size of nums 

function  hasDuplicate(nums) {
        const mySet = new Set(nums)

        if (mySet.size < nums.length) {
            return true
        }
        return false
    }

// the trade off between these two is the first if statement checks mySet.has() method checks is mySet has nums[i], and exits and returns true early if met without going through the whole array
// passing in the iterator in my Set for the second algo, has to check every element regardless - so in the best case the first algo is a better trade off.