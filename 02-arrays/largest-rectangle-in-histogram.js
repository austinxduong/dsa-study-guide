function largestRectangleArea(heights) {
        let maxArea = 0
        let stack = []
        let leftBoundary = 0
        let rightBoundary = 0

        for (let i = 0; i < heights.length; i++) {
            while (heights[i] < heights[stack[stack.length - 1]]) {
                let poppedIndex = stack.pop()
                let poppedHeight = heights[poppedIndex]
                leftBoundary = stack.length === 0 ? -1 : stack[stack.length - 1]
                rightBoundary = i
                let middleBarcount = rightBoundary - leftBoundary - 1
                maxArea = middleBarcount * poppedHeight > maxArea ? middleBarcount * poppedHeight : maxArea
            }
            stack.push(i)
        }
        while (stack.length !== 0) {
            rightBoundary = heights.length
            let poppedIndex = stack.pop()
            let poppedHeight = heights[poppedIndex]
            leftBoundary = stack.length === 0 ? - 1 : stack[stack.length - 1]
            let middleBarcount = rightBoundary - leftBoundary - 1
            maxArea = middleBarcount * poppedHeight > maxArea ? middleBarcount * poppedHeight : maxArea
        }
        return maxArea
    }

// O(n) - time because although we have a nested loop in our first loop, were only sweeping through the entire array once, were we pop elements from the stack only once, 
// which never gets revisited. and push elements into the stack once, which never gets revisited. because we unconditionally push every element from our array into the stack once, 
// pushes happen proportionate to the size of n at most ever, our input array. where a pop happens when a condition is true, meaning pops will only occur less than or equal to the size of n, 
// our input array never more than n. Even though we also have a second while loop its not O(n2), because its not nested inside the for loop, outside of the first loop were only shrinking the same stack down after that fact.

// O(n) - space because although were only keeping track of 3 variables where the value only updates and never changes in space size making it O(1), our stack grows and shrinks based on the size of n,
//  our input array, making it O(n).