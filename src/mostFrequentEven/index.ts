// https://leetcode.com/problems/most-frequent-even-element/description/
//  EASY
// 04/11/23
export const mostFrequentEven = (nums: number[]): number => {
    const map = new Map<number, number>();
    let maxFrequency = 0;
    let mostFrequentMinNum = -1

    for (let num of nums) {
        if (num % 2 !== 0) continue;
        
        const frequency = (map.get(num) || 0) + 1;
        map.set(num, frequency);
        if (frequency > maxFrequency){
            maxFrequency = frequency;
            mostFrequentMinNum = num
        } 

        if (frequency === maxFrequency){
            if (num < mostFrequentMinNum)
            mostFrequentMinNum = num
        } 
    }
    return mostFrequentMinNum;
};