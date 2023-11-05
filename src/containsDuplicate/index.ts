// https://leetcode.com/problems/contains-duplicate/description/
// EASY

// 04/11/23
function containsDuplicate2(nums: number[]): boolean {
    return Array.from(new Set(nums)).length !== nums.length;
};
// 04/11/23
function containsDuplicate(nums: number[]): boolean {
    nums.sort();
    for(let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return true
    }
    return false
};