"use strict";
// https://leetcode.com/problems/two-sum/
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSumData = exports.twoSum = void 0;
var models_1 = require("../../models");
var twoSum = function (nums, target) {
    var res = [];
    try {
        nums.forEach(function (numLvl1, iLvl1) {
            nums.forEach(function (numLvl2, ilvl2) {
                if (ilvl2 === iLvl1)
                    return;
                if (numLvl1 + numLvl2 === target) {
                    res.push(iLvl1);
                    res.push(ilvl2);
                    throw new Error;
                }
            });
        });
    }
    catch (e) {
        return res;
    }
};
exports.twoSum = twoSum;
// 30.11.2023
var twoSum2 = function (nums, target) {
    var res = [];
    // const map = new Set(Object.values(nums))
    return res;
};
exports.twoSumData = {
    funcs: [exports.twoSum, twoSum2],
    description: "\nGiven an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.\n\n \n\nExample 1:\n\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].\nExample 2:\n\nInput: nums = [3,2,4], target = 6\nOutput: [1,2]\nExample 3:\n\nInput: nums = [3,3], target = 6\nOutput: [0,1]\n \n\nConstraints:\n\n2 <= nums.length <= 104\n-109 <= nums[i] <= 109\n-109 <= target <= 109\nOnly one valid answer exists.\n",
    date: '30.10.2023',
    type: models_1.TaskTypes.EASY,
    learnThemes: [],
    url: 'https://leetcode.com/problems/two-sum/',
};
