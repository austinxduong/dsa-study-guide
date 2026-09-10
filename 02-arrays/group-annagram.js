function groupAnagrams(strs) {
        const letter = []

        for( let i = 0; i < strs.length; i++) {
            let match = false // there is NO match by default
            const sorted_strs = strs[i].split('').sort((a, b) => a.localeCompare(b)).join('') // for each letter sort
            
            for (let j = 0; j < letter.length; j++) {
                const sorted_letter = letter[j][0].split('').sort((a,b) => a.localeCompare(b)).join('') 
                // for letter INSIDE the group sort

                console.log(letter)

                if (sorted_strs === sorted_letter) { 
                    // if the sorted letter from original array matches, the sorted letter INSIDE the group

                    letter[j].push(strs[i])
                    // push to the group

                    match = true; // there is a match
                }
            }
            // this means its true no match was found so:
            if (!match) { // create a new group in letters array, if the current sorted_strs doesn't match sorted_letter in all groups
                letter.push([strs[i]])
            }
        }
        return letter
    }

    // brute force
    // O(N² · M log M) - time because there are two loops, and for every time, we are doing something with every item. and with every item, we additionaly have to sort each letter
    // O(N •M) - space because the size of our letter array grows, based on the size of our strs array, and the size of our subset array is dependent on how long they are

 /*
The N² comes from the nested-loop structure itself: for each of the N words, you potentially compare it against up to N existing groups — that's roughly N × N total comparisons in the worst case.
The M log M comes from the cost of one single sort operation on a word of length M — sorting a word's characters isn't free, it costs M log M, and you're doing that sort inside the comparison, every time.
*/

function groupAnagrams(strs) {
        const hashMap = {}

        for (const letters of strs) {
            const letter_sort = letters.split('').sort((a, b) => a.localeCompare(b)).join("")
            if (!hashMap[letter_sort]) {
                hashMap[letter_sort] = []
            }
                hashMap[letter_sort].push(letters)
                console.log(letter_sort)
            }
        console.log(hashMap)
        return Object.values(hashMap)
    }

/*
    first we create an empty hashmap. then we loop through each letter in the strs array - for each letter split into indvidual strings. sort them and join them into one string. 
    if the hasmap doesnt have that sorted letter, start the value as a key with a value of an empty array. 
    then push each original unsorted letter of the strs array into that hashmap and set that as the value, and the key as the sorted letter. 
    then return just the values of the hashmap as an array
*/

// O(N •M)- time because we are looping over the array which is proportionate to the size of the array. then inside the loop, we have to invidually sort each letter
// O(N •M) - space because first we store key to the size of proportionate to the array length, the total character data stored in hashMap scales with both how many strings there (key) are and how long they are (value)