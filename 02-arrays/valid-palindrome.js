function isPalindrome(s) {
        let leftPointer = 0 // Start pointer at the beginning of the string
        let rightPointer = s.length - 1 // Start pointer at the end of the string
        let regex = /[a-zA-Z0-9]/ // Regex pattern to match alphanumeric characters
        

        while (leftPointer < rightPointer) { // Loop until pointers meet in the middle
            let lowerLeft = s[leftPointer].toLowerCase()  // left char to lowercase for comparison
            let lowerRight = s[rightPointer].toLowerCase() //right char to lowercase for comparison

            if (!regex.test(s[leftPointer])) { //If left char is invalid (symbol/space)... it passes because it is NOT a matching regex
            leftPointer++ // ...skip left char by moving right. increase incrementer, and move right 1 - exist else/if block and retart while loop from index 1 on the left, and same right index (the same last index)

            } else if (!regex.test(s[rightPointer])) {
            rightPointer--

            } else { // if first if blocks do not pass - which means they ARE a regex match
                if (lowerLeft !== lowerRight){ // are they the same?
                    return false // if not exaclty the same, return false and exist function immediately. don't increment
                }
                leftPointer++ // increment 1 to the right if they are exact matches
                rightPointer-- // increment 1 to the left if they are exact matches
            }
        }
        return true
    }

    // O(n) - time because amount the amount of times we looop, is proportinate to the size of the string, and each loop we are only finding a match or not, and incrementing variables.
    // O(1) - space because we are only keeping track of three variables leftPointer, rightPointer, and regex. Whether the input string has 10 characters or 10,000,000 characters, the program memory needed for those pointers stays exactly the same—making it constant space.