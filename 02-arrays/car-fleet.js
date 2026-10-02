function carFleet(target, position, speed) {
        let benchmark = 0;
        let fleets = 0

        let merge = position.map((pos, index) => ({
            position: pos,
            speed: speed[index]
        }))

        let sortedCars = merge.sort((a,b) => b.position - a.position)

        for (let i = 0; i < sortedCars.length; i++){
            let distanceLeft = target - sortedCars[i].position
            let standaloneBenchmark = distanceLeft / sortedCars[i].speed

            if (standaloneBenchmark > benchmark) {
                benchmark = standaloneBenchmark
                fleets++
            }
        }
        return fleets
    }

// O(n log n) - because although we have one loop where we iterate n amount of times, proportionate to the size of our sortedCars array making it O(n). 
// we sorted earlier, where the sort method takes precedence making it O(n log n), where n represent the amount of element we have to iterate per split level, 
// and log n represent the amount of times we have to split until each element is by itself, then sorts and merges groups its way back upward starting at the standalone elements.

// O(n) - space because, so merge maps through both our input arrays, and creates object pairs in the merge array, taking up space O(n) - equaling the length/size of both input arrays. 
// and for sortedCar, when the sort method is called internally what happens is, although we track the deepest level our split happens which is O(log n), our temporary array initialized at
//  the beginning of the array to the size of our input array, gets split, and once elements are alone, gets the temporary array gets sorted and merged back together back to the length of 
// our N sized temporary array. so N, proportionate to the size of our input array, takes precedence over O(log n)

