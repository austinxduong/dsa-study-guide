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