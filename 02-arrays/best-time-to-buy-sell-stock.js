function  maxProfit(prices) {
        let minPrice = prices[0]
        let maxProfit = 0

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i]
            }
            maxProfit = Math.max(maxProfit, prices[i] - minPrice)
        }
        return maxProfit
    }

// O(n) - time because were only looping once, but the amount of iterations is proportionate to the size of the prices array
// O(1) - space because were only keeping track of two variables, minPrice, and maxProfit, which don't change in size, and stay constant.

// this uses the sliding window technique: what makes this sliding window?

// as long as no cheaper price shows up — you hold onto the same buy day, and the window just keeps stretching forward: the right edge (i) advances one day at a time, the left edge (minPrice's position) stays put, 
// and you're computing the profit for an ever-widening window. That's the "expanding" phase.
// Then the moment a new low shows up, the old window gets thrown away entirely — the left edge snaps forward to sit right on top of the right edge, collapsing the window down to width zero, 
// and stretching begins again from there. That's the "reset" phase.