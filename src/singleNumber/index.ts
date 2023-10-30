var singleNumber = function(nums) {
    const map = new Map();
    nums.forEach((num) => {
      if (map.has(num)) {
        return map.delete(num);
      }
      map.set(num, true)
    })
    let res;
    map.forEach((v, k) => {
      if (v) res = k
    })
    return res
  };

  var singleNumber2 = function(nums) {
    const map = new Map();
    nums.forEach((num) => {
      if (map.has(num)) {
        return map.set(num, false);
      }
      map.set(num, true)
    })
    let res = [];
    map.forEach((v, k) => {
      if (v) res.push(k)
    })
    return res
  };