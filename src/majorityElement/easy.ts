// https://leetcode.com/problems/majority-element/description/
// EASY
// 04/11/23
function majorityElementEasy(nums: number[]): number {
    const map = new Map<number, number>();
    const majority = nums.length / 2;
    for (let i = 0; i < nums.length; i++){
        const currentElement = nums[i];
        const nCount = map.get(currentElement) || 0;
        const newCount = nCount + 1;
        if (newCount > majority) return currentElement;
        map.set(currentElement, newCount);
    }
    return 0;
};