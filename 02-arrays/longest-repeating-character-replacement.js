function characterReplacement(s, k) {
        let left = 0
        let maxLength = 0
        let maxFreq = 0
        let map = new Array(26).fill(0)
    

        for (let i = 0; i < s.length; i++) {

            let windowLength = i + 1 - left
            let value = s.charCodeAt(i) - 'A'.charCodeAt(0)

            map[value] = map[value] + 1
            maxFreq = Math.max(maxFreq, map[value])

            if (windowLength - maxFreq > k) { // if the window is so large, and contains more letters we need to swap past k, after subtracting max frequency. then we need to kick out the left pointer
                let charLeaving = s.charCodeAt(left) - 'A'.charCodeAt(0) // extract char code at current left pointer
                map[charLeaving] = map[charLeaving] - 1 // decrement its count from the map
                left++ // the move left pointer 1 time to the right
                windowLength = i + 1 - left // calc newly resized window after left move 1 to the right
            }
            if (windowLength > maxLength) { // if window length exceed max length set this as the new max length. if window is not bigger, do nothing.
                maxLength = windowLength // set this as the new max length
            }
        }
        return maxLength
    }

//  O(n) - time because we iterate only once and update the map values. but the amount we iterate in the array, is proportionate to the size of the array. 
// O(1) - space because we know the highest fixed size will ever be 26 characters possible in the alphabet.