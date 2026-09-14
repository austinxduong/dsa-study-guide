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
// leftArray and rightArray, on the other hand, grow — every iteration of the loop adds one more element to them (.push() or an indexed assignment), 
// so by the time the loop finishes, their size is directly tied to n. Double the size of nums, and those arrays double in size too. That's O(n).

function productExceptSelf(nums) {
        let final = []
        let runningProduct = 1

        for (let i =0; i < nums.length; i++) {
            final.push(runningProduct)
            runningProduct = runningProduct * nums[i]
        }
        // leftArray = [1,1,2,8]

        runningProduct = 1
        for (let j = nums.length -1; j >= 0; j--) {
            final[j] = (runningProduct * final[j]) // 8 = 1 * 8 - where final[j] is index from our first loop
            runningProduct = runningProduct * nums[j] // running product is now 6
        }
    }

// more optimized:
// O(n) - time because each loop costs O(n), and running three of them one after another (not nested) gives you O(n) + O(n) + O(n), which adds up to O(3n). 
// O(1) - space because no matter how large nums gets (4 elements or 4 million), you're still only ever using a fixed handful of variables (runningProduct, i, j) — that memory usage doesn't grow at all with input size.
// runningProduct, i, and j are each just a single number sitting in memory — every time you update them, you're overwriting that same single slot with a new value, not creating an additional one. 
// So no matter how many iterations the loop runs, or how big nums gets, you're always only holding onto those same few individual numbers — never more, never fewer. That's O(1).