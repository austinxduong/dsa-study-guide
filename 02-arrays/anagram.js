    isAnagram(s, t) {
        const hashMap = {}

        if (s.length !== t.length) {
            return false
        }
        for (const char of s) {
            hashMap[char] = (hashMap[char] || 0) + 1
        }
        for (const char of t) {
            hashMap[char] = (hashMap[char] || 0) - 1
        }
        for (const key in hashMap) {
            if (hashMap[key] !== 0) {
                return false
            }
        }
        return true;
    }
/*
Constraints:
 s and t consist of lowercase English letters.
 */

// O(n) - time because we loop over the amount of elements, proportionate to the size of s and t
// O(1) - space because there are only ever 26 possible keys MAX from the alphabet which sets a max ceiling that is constant 