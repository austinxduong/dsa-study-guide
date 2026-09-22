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