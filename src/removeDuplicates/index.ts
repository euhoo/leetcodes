const removeDuplicates = (nums) => {
    for (let i = 0; i < nums.length; i++) {
      if (i === nums.length - 1) continue;
      if (nums[i] === nums[i + 1]) {
        nums.splice(i, 1)
        i = i - 1;
      }
    }
    return nums.length;
  }