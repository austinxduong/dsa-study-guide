function  maxArea(heights) {
        let leftPointer = 0;
        let rightPointer = heights.length - 1
        let maxArea = 0;
        
            while (leftPointer < rightPointer) {
                let width = rightPointer - leftPointer // returns the length between left and right pointer
                let height = Math.min(heights[rightPointer], heights[leftPointer]) // returns the smallest value between two
                let area = width * height // calculate area
                if (area > maxArea) { // if newly calc area is bigger then current maxArea
                    maxArea = area // update it to newly calc area
                }
                if (heights[leftPointer] > heights[rightPointer]) { // if the left pointer value is bigger than the value of right
                    rightPointer-- // move the right pointer to the left once
                } else if (heights[leftPointer] < heights[rightPointer]) {   // if the left pointer value is smaller than the value of the right
                    leftPointer++ // move the left pointer to the right once
                } else if (heights[leftPointer] === heights[rightPointer]) { // if both values at both pointers are exactly the same
                    rightPointer-- // move right pointer inward to the left once
                    leftPointer++ // move left pointer inward to the right once
                }   
            }
        return maxArea
    }

// O(n) - time complexity because, we are only using 1 loop, proportionate to the size of the array, and we have to loop through and check each element with one full sweep.
// O(1) - space because were only keeping tracking of leftPointer, rightPointer, and max area. those sizes don't increase in space, they just update.