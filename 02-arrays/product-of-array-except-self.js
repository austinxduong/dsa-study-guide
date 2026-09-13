function  productExceptSelf(nums) {
        let final= []

        for (let i = 0; i < nums.length; i++) {
            let product = 1
            for (let j = 0; j < nums.length; j++) {
                
                if (j !== i) {
                    product = product * nums[j]
                }
            } 
            final.push(product)
        }
        return final
    }

//brute force:
// O(n2) - time because there are nested loops. for each item, we are doing something with every other item.
// O(n) - space because we are storing the final array, which is proportionate to the size of the nums array

function  productExceptSelf(nums) {
        let final = []
        let leftArray = []
        let rightArray = []
        let runningProduct = 1

        for (let i =0; i < nums.length; i++) {
            leftArray.push(runningProduct)
            runningProduct = runningProduct * nums[i]
        }
        // leftArray = [1,1,2,8]

        runningProduct = 1
        for (let j = nums.length -1; j >= 0; j--) {
            rightArray[j] = runningProduct
            runningProduct = runningProduct * nums[j]
        }
        // rightArray [48, 24, 6, 1]
        for (let i = 0; i < leftArray.length; i++) {
            final[i] = leftArray[i] * rightArray[i]
        }
        return final
}

// optimized:
// O(n) - time because each loop costs O(n), and running three of them one after another (not nested) gives you O(n) + O(n) + O(n), which adds up to O(3n). 
// Then, since Big-O drops constant multipliers, O(3n) simplifies down to O(n)
// O(n) - space because leftArray, rightArray, and final are each proportional to the size of nums, so even though there are three separate arrays, they each scale linearly and (same constant-dropping rule) 3n space simplifies to O(n)