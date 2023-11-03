// var removeElement2 = function(nums, val) {
//     for (let i = 0; i < nums.length; i) {
//       if (nums[i] === val) {
//         nums.splice(i, 1);
//       } else {
//         i++;
//       }
//     }
//     return nums.length;
//   };


  export const removeElement = (nums: number[], val: number): number => {
    nums.sort((a, b) => a < b ? -1 : 1);
    for(let i = 0; i < nums.length; i++) {
      if (nums[i] > val) return nums.length
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length;
};