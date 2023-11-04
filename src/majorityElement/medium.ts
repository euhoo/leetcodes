// https://leetcode.com/problems/majority-element-ii/description/
// MEDIUM
// 04/11/23
function majorityElementMedium(nums: number[]): number[] {
    const map = new Map<number, number>();
    const majority = nums.length / 3;
    const set = new Set<number>();
    for (let i = 0; i < nums.length; i++){
        const currentElement = nums[i];
        if (set.has(currentElement)) continue;
        const nCount = map.get(currentElement) || 0;
        const newCount = nCount + 1;
        if (newCount > majority) set.add(currentElement);
        map.set(currentElement, newCount);
    }
    return Array.from(set);
};