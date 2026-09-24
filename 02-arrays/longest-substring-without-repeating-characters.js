function lengthOfLongestSubstring(s) {
        let map = new Map()
        let left = 0
        let right = 0
        let maxLength = 0
        let char = s[right] // current vaue of right pointer

        while (right < s.length) { // right pointer starts at 0, length is 4
            if (map.has(char) && map.get(char) >= left) {
                left = map.get(char) + 1
            }
            map.set(s[right], right)
            right++
            maxLength = Math.max(maxLength, right - left)
            char = s[right]
        }
        return maxLength
    }

    // example "abba"
    // synopsis:
    /*
    right index starts at 0 and is smaller than 4. loop. first if block skips since it doesnt exist in our map. set a: 0, increment right from 0 to 1. 
    maxlength = math.max(0, 1-0) =  length 1. char updates to first b. right updates to 1. first b doesn't exist. repeat. map has a: 0, b: 1 right increases to 2.  
    max length increases to 2; maxLength = math.max( 1, 2 -0) = 2. current char is at second b. if block fires and left updates from 1 to index 2. (1 + 1).  
    replace first b in map with value of index 2. move right to index 3. max length doesnt change because math.max(2, 3 - 2) = 2 char is now at a. 
    and same thing happened to second b happens to a. left index is at two, and the current index at the first a is 0. so no? it stays at two

    So for that last iteration (processing 'a' at index 3): the if is skipped (since 0 < 2, no update to left), but then map.set('a', 3) still runs, right still increments from 3 to 4,
    maxLength still gets recomputed (Math.max(2, 4 - 2) = 2, no change), and char still gets reassigned to s[4] — which is undefined, since the string only has indices 0 through 3. 
    That's harmless here, though, because right after that, the while loop rechecks its condition: right (4) < s.length (4) is false, so the loop exits there — not because the if was skipped, 
    but because the outer while condition finally failed on the next check.

    we do > because if our left pointer is at index 0, but we have our first duplicate inside our window at index 1, and our right pointer is at index 2.
    our first duplicate at index. 1 IS greater than our left pointer. and we need the = sign because if our left index is at 0, and our right pointer is at index 1, 
    and they are both consecutive duplicates, our first duplicate IS the same as index 0 which make it = true. so we move the left 1 index up
    */

// O(n) - time because were using only one loop, and iterating through the whole array proportinate to the size of the array.
// O(n) - space because the size of the map grows, depending on the size of the array, even though we have variables that are constant space.