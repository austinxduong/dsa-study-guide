function minEatingSpeed(piles, h) {
        let left = 1
        let right = Math.max(...piles) // = 4

        while (left < right) {
        let mid = Math.floor((left + right) / 2) // first pass (1 + 4) / 2 = 2.5 / Math.ceil = 3
        let totalHoursCompleted = 0 // first pass 5 hours total after for loop runs

            for (let i = 0; i < piles.length; i++) {
                totalHoursCompleted += Math.ceil(piles[i] / mid) 
                // 1 / 3 = 0.3 = 1 hrs // 4 / 3 = 1.3 = 2 hrs // 3 / 3 = 1hrs // 2 / 3 = 0.66666667 = 1hrs
            }

        if (totalHoursCompleted <= h) { // first pass is 5 <= 9// speed at mid, is fast enough
            right = mid // discard everything right of mid, but inlude mid // right = 3, left = 1
        } else if (totalHoursCompleted > h) { // speed at mid, is too slow
            left = mid + 1 // discard everything left of mid, including mid right = 4, left = 4
            }
        }
        return left
    }

// O(n log m) - time because time is O(n log m) because log m gives us the amount of passes it takes to half the size of our virtual speed array.
//  where n represents the length of the our input array, the cost per pass. which makes log m * n = the total amount of time/work to complete.
//  although our right variable calculates Math.max() which runs an internal loop, iterating through every element in our input array and plucking 
// the largest number which is O(n), O(log m * n) dominates because the cost of iterations per pass.


// O(n) - space because space is O(n). because although we have 4 variables: left, right, mid, and totalHoursCompleted. where they don't change in space size and update in constant time at O(1). 
// our Math.max holds space of O(n) due to our spread operator, even though our right variable still only holds the size of one final value which doesn't change in size. howvever our fifth variable, 
// i picks each pile iterating the piles input array at O(1). O(n) dominates O(1)