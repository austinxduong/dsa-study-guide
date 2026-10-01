function dailyTemperatures(temperatures) {
        let finalAnswers = new Array(temperatures.length).fill(0)
        let stack = []

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let popped = stack.pop()
                let compute = i - popped
                finalAnswers[popped] = compute
            }
            stack.push(i)
        }
        return finalAnswers
    }

// 0=73, 1=74, 2=75, 3=71, 4=69, 5=72, 6=76, 7=73

// O(n) - time because although we create a fixed array to the length of our temperatures array as O(n), we create a loop where we do one full sweep across the array proportionate to the size of our temperatures array, 
// pushing and popping the indexes from the stack, where we replace the popped index of our final array with the computed indexes (current index - popped index) -- representing our days waited into the final answers array. 
// although there is a nested while loop inside our first loop, this may look like O(n2), but it isn't because we sweep through the array only once, and either push or pop the element only ever once. so the elements either 
// stay in the stack once, or gets pushed once and never gets resisted again. where O(n2) would revisit elements in the stack.the push operates always proportionate to the size of our input array, never more or less. 
// pop operation happens will always be less then or the size of our input array, or equal to. because the condition for an element has to be popped, is whether the current index, is larger than the top element of the stack.

// O(n) - space because for auxiliary space, the finalAnswers array space isn't counted. so, the stack would at worst case scenario hold all of elements equal to the size of our input array,
//  if nothing gets popped at all. which is O(n)