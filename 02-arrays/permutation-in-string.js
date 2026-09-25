function  checkInclusion(s1, s2) {
        let s1Map = new Array(26).fill(0)
        let s2Map = new Array(26).fill(0)
        let left = 0

        for (let i = 0; i < s1.length; i++) {
            let value = s1.charCodeAt(i) - 'a'.charCodeAt(0)
            s1Map[value] = s1Map[value] + 1
        }
        for (let j = 0; j < s2.length; j++) {
            let windowLength = j + 1 - left
            let value = s2.charCodeAt(j) - 'a'.charCodeAt(0)
            s2Map[value] = s2Map[value] + 1

            if (windowLength > s1.length) {
            let valueLeaving = s2.charCodeAt(left) - 'a'.charCodeAt(0)
            s2Map[valueLeaving] = s2Map[valueLeaving] - 1
                left++
                windowLength = j + 1 - left
            }

            if (windowLength === s1.length) {
                if (JSON.stringify(s2Map) === JSON.stringify(s1Map)) {
                    return true
                }
            }  
        }
        return false
    }

// O(n) - time because so for time its O(n) because we have to map each characters in each map at most a fixed size of 26 which is O(1) or O(26), but the amount of comparison we have to do,  proportionate to the size of s2 length makes it O(26n), and we drop the 26.
// space because we always know the fixed sized reached will be a maximum of 26 from the alphabet, so the size doesn't grow beyond that.