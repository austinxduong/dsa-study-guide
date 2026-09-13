function encode(strs) {
        const encode = []
        for (const letter of strs) {
            encode.push(letter.length+"#"+letter)
        }
        const join = encode.join("")
        console.log(join)
        return join
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
function decode(encode) {
        const decoded = []
        let pointer = 0;

        while (pointer < encode.length) {
            let hashIndex = encode.indexOf("#", pointer) // returns the index of the #
            let lengthStr= encode.substring(pointer, hashIndex) // (pointer currently 0, and index 1) extracts the first number "5"
            let len = Number(lengthStr) // turn "5" into the actual number 5
            let word = encode.substring(hashIndex + 1, hashIndex + 1 + len) // extract the word hello
            decoded.push(word) // push it into the array as a string
            pointer = hashIndex + 1 + len // update our starting pointer
        }
        return decoded
}


//encode:
// O(N x M) - time because each loop iteration is proportionate to the number strings in the array n (taking in a array of strings), where m is the length of each string. 
// It has to allocate space in memory and copy all M characters of letter into a new string. Creating and copying a string of length M takes time proportional to M.
// The loop runs once for every string in the array, which is N times.

// O(N x M) - space because were storing N entries in the array, and each entry's size is proportional to its word's length (M), so the total space scales with N × M, the combined character count

//decode:
// O(N)- time because were taking in just an already encoded string
// O(N × M) - space because decoded ends up holding all the extracted words, and combined they total the same number of characters as the original input strings

// for encode and decode time O(n)- time is also equaivalently O(N X M). where (using n = total character count across everything), where O(N × M) (using N = number of strings, M = average length per string), and they mean the exact same growth rate.
// n = N × M = 2 × 5 = 10  where O(n) = O(10)
// O(N × M) = O(2 × 5) = O(10) — same value as O(n)