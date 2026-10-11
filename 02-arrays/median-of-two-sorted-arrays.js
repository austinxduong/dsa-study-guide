    findMedianSortedArrays(nums1, nums2) {
        let left = 0
        let right = 0
        let merged = []
        let median = 0

        while (left < nums1.length && right < nums2.length) {
            if (nums1[left] < nums2[right]) {
                merged.push(nums1[left])
                left++
            } else if (nums1[left] > nums2[right]) {
                merged.push(nums2[right])
                right++
            } else if (nums1[left] === nums2[right]) {
                merged.push(nums1[left])
                left++
                merged.push(nums2[right])
                right++
            }
        }
        while (left < nums1.length) {
            merged.push(nums1[left])
            left++
        }

        while (right < nums2.length) {
            merged.push(nums2[right])
            right++
        }

        let rightMid = merged.length / 2
        let leftMid = rightMid - 1
        let midIndex = Math.floor(merged.length / 2)
        
        if (merged.length % 2 === 0) {
        median = (merged[leftMid] + merged[rightMid]) / 2

        } else if (merged.length % 2 !== 0) {
        median = merged[midIndex]
        }

        return median
    }

    // this uses O(m + n) but we need to acheive O(log(m + n))


function findMedianSortedArrays(nums1, nums2) {
        let left = 0;
        let right = nums1.length
        let median = 0
        let half = Math.floor((nums1.length + nums2.length) / 2)
        

        while (left <= right) {
            let i = Math.floor((left + right) / 2) //our mid, and also the count of how much nums1 contributes to the left
            let j = half - i 
            let leftLineNums1 = i == 0 ? -Infinity: nums1[i - 1]
            let rightLineNums1 = i === nums1.length ? Infinity : nums1[i]
            let leftLineNums2 = j === 0 ? -Infinity : nums2[j - 1]
            let rightLineNums2 = j === nums2.length ? Infinity : nums2[j]
            
            if (leftLineNums1 <= rightLineNums2 && leftLineNums2 <= rightLineNums1) { // a valid orderd split
                if ((nums1.length + nums2.length) % 2 === 0) {
                    median = (Math.max(leftLineNums1, leftLineNums2) + Math.min(rightLineNums1, rightLineNums2)) / 2
                } else if ((nums1.length + nums2.length) % 2 !== 0) {
                    median = Math.min(rightLineNums1, rightLineNums2)
                }
                return median
            } else if (leftLineNums2 > rightLineNums1) {
                left = i + 1
            } else if (leftLineNums1 > rightLineNums2) {
                right = i - 1
            }
        }

    }

// O(log(m + n)) - time is O(log(m+n)). First, we check if nums1 is longer than nums2 and swap references if needed. Thus, m represents the length of the shorter 
// array and n represents the length of the longer array. We perform binary search strictly on the shorter array m (never on n). Every time binary search picks a 
// candidate cut position i between 0 and nums1.length, nums1 contributes all counts from the left side of cut line i. each time binary search halves the search 
// space [left, right], it takes O(log m) total steps. n reacts, finds their calculation of j, places a line right before j. everything to the left of that line 
// in nums2 where j is found, is the count nums2 contributes to the left half, of total length of both arrays combined. because we do a binary search on nums1. 
// the search range is halved, nums2 reacts with j, and each pass costs us O(1). Because m is guaranteed to be smaller or equal to n, O(log m) is bounded by 
// O(log(m + n)). The tightest bound for what my algorithm actually does is O(log(min(m, n))) because the binary search is strictly performed on the smaller array m. 
// However, O(log(m+n)) also holds as a valid upper bound. Because m <= m +n, the halving process on m alone will never exceed what halving m + n would take. 
// Thus, O(log(m+n))  simply proves that we achieved a runtime well under the problem's required speed limit.

// O(1) - space is O(1) because we are tracking 13 variables, where they all don't grow in space size, and reassigning (it points to the same array)and only updating them is still in constant space with O(1).