// https://leetcode.com/problems/move-zeroes/description/
// EASY

// 28.03.22
var moveZeroes = function(numsnumber[]): void {
    let counter = nums.length;
    for (let i = 0; i < counter; i) {
      if (nums[i] === 0) {
        nums.splice(i, 1)
        nums.push(0)
        counter -= 1;
      } else {
        i += 1
      }
    }
  };

  // 05/11/23
  function moveZeroes2(nums: number[]): void {
    const count = nums.length;
    let counter = 0;
    for(let i = 0; i < nums.length; i++) {
        counter++;
        if (counter >= nums.length) return
        if (nums[i] === 0) {
            nums.push(0);
            nums.splice(i, 1);
            i--
        }
    }
};