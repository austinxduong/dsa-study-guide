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
// O(n) - space because first we store key/values to the size of proportionate to the array length