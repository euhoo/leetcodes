// https://leetcode.com/problems/contains-duplicate-iii/description/
// HARD

export const containsNearbyAlmostDuplicate2 = (nums: number[], indexDiff: number, valueDiff: number): boolean => {
    for(let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // если ушли слишком далеко по разницу индексов - не надо заканчивать текущий внутренний цикл - прерываем
            if (Math.abs(i - j) > indexDiff) break;
            if (Math.abs(nums[i] - nums[j]) > valueDiff) continue;
            return true;
        }
    }
    return false
};

export const containsNearbyAlmostDuplicate = (nums: number[], indexDiff: number, valueDiff: number): boolean => {
    for(let i = 0; i < nums.length - 1; i++) {
        const length = i + 1 + indexDiff < nums.length ? i + indexDiff : nums.length - 1;
        for(let j = i + 1; j <= length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= valueDiff) return true
        }
    }
    return false
};