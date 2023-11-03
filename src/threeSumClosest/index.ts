// https://leetcode.com/problems/3sum-closest/description/
// MEDIUM

export const threeSumClosest = (nums: number[], target: number): number => {
    nums.sort((a, b) => a - b)
    console.log(nums)
    let diff = nums[0];
    let res = nums[nums.length - 1];
    const length = nums.length;

    for (let i = 0; i < length - 2; i++) {
      // убираю дубли
      if (i > 0 && nums[i] === nums[i - 1]) continue; 
      // левый указатель на 1 больше текушего внешнего указателя
      let j = i + 1;
      // правый указатель идет с конца массива
      let k = length - 1;

      while(j < k) {
        const sum = nums[i] + nums[j] + nums[k];
        const currentDiff = sum - target;

        if (currentDiff < diff ){
          diff = currentDiff;
          res = sum;
          j++
        } else if (currentDiff === diff) {
          return sum;
        }
        else { // currentDiff > diff
            k--
          
        }

      }
    }
    return res
};