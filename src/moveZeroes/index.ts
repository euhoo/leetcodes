var moveZeroes = function(nums) {
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