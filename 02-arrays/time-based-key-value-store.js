function class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)){
            this.keyStore.set(key, [])
        }
        this.keyStore.get(key).push({ value, timestamp });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {

        if (!this.keyStore.has(key)) {
            return ""
        }

        let left = 0
        let values = this.keyStore.get(key)
        let right = values.length - 1

        while (left <= right) {
    
            let mid = Math.floor((left + right) / 2)

            if (values[mid]["timestamp"] <= timestamp) {
                left = mid + 1
            } else if (values[mid]["timestamp"] > timestamp) {
                right = mid - 1
            }
        } 

        if (right < 0) {
            return ""
        }
        return values[right]["value"]
    }
}

// O(log n) - time because for our get method- in our while loop, when left is <= or equal to true, it keeps running. until left exceeds right, the loop exits. 
// in that loop, we continually cut the left half or right half of the values array. the right and left pointer moves, but the mid get recalculated each time 
// (so the mid is technically moving based of the numbers swapping out/being updated, but it always targeting the middle index of left and right. (depending if 
// mid is lower than our timestamp target, or higher than our timestamp target). if the key exists, but the timestamp doesn't or there is not timestamp before it, 
// an empty string simply returns. however in our set method, time is O(1) because when the method is called, we add that directly into the map, and if the key 
// already exists the values get added at the end of the keys array without needing to sort. each single iteration inside the while loop, pass costs us O(1) time,
//  where n is = the size of the keys array.

// O(n) - space is O(n) because map the size of n = the total values stored across all keys. and our get method tracks 3 variables left, values, and right where they
//  don't grow in size by simply updating at O(1) space. where values returns a reference directly to the existing array inside the map. it does not duplicate, copy, or clone any data.