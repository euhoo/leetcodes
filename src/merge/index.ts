// https://leetcode.com/problems/merge-sorted-array/submissions/
// EASY
// 05.11.23
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i]
  }
  nums1.sort((a, b) => a < b ? -1 : 1)
};
