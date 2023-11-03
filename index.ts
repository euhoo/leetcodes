import { threeSum } from "./src/threeSum";
import { testTreeSum } from "./src/threeSum/test";

const time = Date.now();
console.log('time')
const testData = testTreeSum
const testData2 = [-1,0,1,2,-1,-4]
const testData3 = [-1,0,1,2,-1,-4,-2,-3,3,0,4]
const res = threeSum(testData);
console.log(res)
const timeAfter = Date.now();
console.log('diff', timeAfter - time)
// -2,0,1,1,2
// [-1,0,1,2,-1,-4]

