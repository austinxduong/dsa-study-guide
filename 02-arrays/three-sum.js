function  threeSum(nums) {
        let triplets = []
        let sorted = nums.sort((a, b) => a-b)

        for (let i=0; i < sorted.length; i++) {
            let leftPointer = i + 1
            let rightPointer = sorted.length - 1

            if (i > 0 && sorted[i] === sorted[i - 1]) {
                continue
            } // if the index is greater than 0 AND is the SAME value as the previous values. 
            // SKIP (otherwise it''ll produce same triplets)

            while (leftPointer < rightPointer) { // while leftpointer is less then right pointer, keep looping

                let sum = sorted[i] + sorted[leftPointer] + sorted[rightPointer]

                if (sum === 0) { // if match is found
                    triplets.push([sorted[i], sorted[leftPointer], sorted[rightPointer]]) // push those values
                    leftPointer++ // move the left pointer to the right once
                    rightPointer-- // move the right pointer to the left once
                    
                    while (leftPointer < rightPointer && sorted[leftPointer] === sorted [leftPointer - 1]) {
                        leftPointer++ //Compare the new position to the position just behind it (leftPointer - 1). If the values are identical, you've landed on a duplicate of the value you just used. SKIP
                    }
                    while(leftPointer > rightPointer && sorted[rightPointer] === sorted[rightPointer + 1] ) {
                        rightPointer-- // Compare the new position to the position just ahead of it (rightPointer + 1). If the values are identical, you've landed on a duplicate of the value you just used. SKIP
                    }   
                } else if (sum < 0) { // is sum is less than 0 (too small)
                    leftPointer++ // move left pointer to the right once
                } else if ( sum > 0) { // is sum is greater than 0 (too big)
                    rightPointer-- // move the right pointer to the left once
                }
            }
        }
        return triplets
    }

    // O(n2) - time because of our nested loop. for every item, we are doing something with every other item in the second loop
    // O(n) - space because we have to sort the array in memory, which is proportionate to the size of n array.