// https://leetcode.com/problems/contains-duplicate-ii/
// EASY

export const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
    if (k === 0) return false;
    const map = new Map<number, number[]>()
    let res = false;
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const current = map.get(num) || [];
        current.push(i);
                map.set(num, current)
        if (current.length === 2) {
            const [i1, i2] = current;
            res = Math.abs(i1 - i2) <= k;
            if (res) return res;
        }
        if (current.length >= 2) {
            const last = current[current.length - 1];
            const secondIndex = nums[last]
            for (let j = 0; j < current.length - 1; i++) {
                const firstIndex = nums[j];
                res = Math.abs(firstIndex - secondIndex) <= k;
                if (res) return res;
            }
        }
    }
    return res
};