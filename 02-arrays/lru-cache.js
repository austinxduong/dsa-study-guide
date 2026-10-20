class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
 }

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()
        this.start = new Node()
        this.end = new Node()
        this.start.next = this.end
        this.end.prev = this.start
        
    }

    remove(node) {
        node.prev.next = node.next
        node.next.prev = node.prev

    }

    addToBack(node) {
        this.end.prev.next = node
        node.prev = this.end.prev
        node.next = this.end
        this.end.prev = node

    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) {
            return - 1
        }
        let node = this.map.get(key)
        this.remove(node)
        this.addToBack(node)
    
        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            let node = this.map.get(key)
            node.val = value 
            this.remove(node)
            this.addToBack(node)
        } else {
            
        let newNode = new Node(key, value)
        this.addToBack(newNode)
        this.map.set(key, newNode)
        }

        if (this.map.size > this.capacity) {
            let deleteNode = this.start.next
            this.remove(deleteNode)
            this.map.delete(deleteNode.key)
        }
    }
}

// O(1) time - because our first class/constructor sets 4 properties in constant time , and our second class/constructor sets 6 properties in constant time, 
// regardless of capacity input size. our first helper 'remove' also runs O(1) because of 2 variable reassignments, and our second helper addToBack also runs
//  O(1) with our 4 variable reassignments. our first method get also runs O(1) time, where we first check if the key exists, and returns -1 if not. then we
//  have a variable declaration which gets the node, and call our two helpers to remove the node and add it to the back of the list. finally returning node.val.
//  our second method put, also runs O(1) because we check if the map has the key, if so, we get the node with our variable declaration, update its value, then 
// call our two helpers to remove and add it to the back. otherwise, if it doesn't exist, we add it as a new node with our second variable declaration, call our 
// addToBack helper, and set it in the map. all get, set, has and delete method on the map are O(1) also. then our second if statement check if we are over our 
// capacity, if so we delete the least used node, remove it from the list and delete if from the map to evict it. overall time complexity is O(1).

// O(K) - space because where this.map holds every key and its node value, where k represents our set capacity. while this.start and this.end remain O(1) in space, 
// it does allocate additional nodes in memory for the extra nodes as placeholders. because we evict nodes once we hit capacity, total memory remain strictly bounded to O(K).