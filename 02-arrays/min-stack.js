class MinStack {
    constructor() {
        this.stack = []
        this.stackMin = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        this.stackMin.push(this.stackMin.length === 0 ? val : Math.min(val, this.stackMin[this.stackMin.length - 1]) )
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.stackMin.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stackMin[this.stackMin.length - 1]
    }
}

// O(1) - time because each method performs a single operation, without the need to loop through the entire stacks.
// O(n) - space because the sizes of the stack grow and shrink based on how many times these single methods are independently called, specifically push and pop.