// https://leetcode.com/problems/two-sum/

import { DataI, TaskTypes } from "../../models";

// EASY
type FuncT = (nums: number[], target: number)=> number[]
export const twoSum = (nums: number[], target: number): number[] => {
    const res = [];
    try {
      nums.forEach((numLvl1, iLvl1) => {
        nums.forEach((numLvl2, ilvl2) => {
          if (ilvl2 === iLvl1) return;
          if (numLvl1 + numLvl2 === target) {
            res.push(iLvl1);
            res.push(ilvl2);
            throw new Error;
          }
        });
      })
    } catch (e) {
      return res;
    }
}
  
// 30.11.2023
const twoSum2 = (nums: number[], target: number): number[] =>{
  const map = new Map();
  const res = [];
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const numPair = target - num;
    if (map.has(numPair)){
      return [map.get(numPair), i]
    }
    if (!map.has(num)) {
      map.set(num, i)
    }
  }
  return res;
};


export const twoSumData: DataI<FuncT> = {
funcs: [twoSum, twoSum2],
description:
`
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
`,
date: '30.10.2023',
type: TaskTypes.EASY,
learnThemes: [],
url: 'https://leetcode.com/problems/two-sum/',
}
