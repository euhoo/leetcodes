var findMedianSortedArrays = function(nums1, nums2) {
    const unionArray = [...nums1, ...nums2].sort((a, b) => a < b ? -1 : 1);
    const length = unionArray.length;
    const isOneMedian = length % 2 !== 0;
    if (isOneMedian) return unionArray[(length - 1) / 2];
    const firstNum = unionArray[(length) / 2];
    const secondNum = unionArray[(length) / 2 - 1];
    return (firstNum + secondNum) / 2;
  };