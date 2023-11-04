// https://leetcode.com/problems/3sum-closest/description/
// MEDIUM

export const threeSumClosest = (nums: number[], target: number): number => {
    nums.sort((a, b) => b - a);
    let diff = Number.MAX_SAFE_INTEGER;
    let result = 0;
    for(let i = 0; i < nums.length - 2; i++) {
      let j = i + 1;
      let k = nums.length - 1;
      while(j < k) {
        const sum = nums[i] + nums[j] + nums[k];
        const currentDiff = Math.abs(sum - target);
      if (currentDiff < diff) {
          result = sum;
          diff = currentDiff;
        }
        // если разница 0 - значит мы точно попали в target - вернуть
        if (currentDiff === 0) return target;
        // если разница больше 0 - нужно уменьшать -двигаем левый указатель
        if (sum > target) {
          j++
        }
        // если разница меньше 0 - нужно увеличивать - двигаем правый
        if (sum < target) {
          k--
        }
      }
    }
    return result
};