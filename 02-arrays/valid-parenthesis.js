function isValid(s) {
        let map = new Map()
        let stack = []

        map.set(")", "(")
        map.set("}", "{")
        map.set("]", "[")

        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i]) && map.get(s[i]) === stack[stack.length - 1]) {
                stack.pop()
            } else if (map.has(s[i]) && map.get(s[i]) !== stack[stack.length - 1]) {
                return false
            } else if (!map.has(s[i])) {
                stack.push(s[i])
            }
        }
        return stack.length === 0
    }

// O(n) - time because since we have to loop each element proportionate to the size of n, where we are comparing the current element in the array, 
// and popping the an item off the stack, returning false if the current element does not match the top of the stack, or adding it to the stack.

// O(n) - space because even though our map has fixed space size of 3 key/value pairs and it never grows beyond that which is O(1), our stack grows 
// and shrinks proportionate to the many possibilities of how many opening brackets there are in our array, which get added to our stack.