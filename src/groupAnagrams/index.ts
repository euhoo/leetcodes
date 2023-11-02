// https://leetcode.com/problems/group-anagrams/description/
// MEDIUM
const sortWord = (str: string):string => str.split('').sort().join('')

// 02.11.23
export const groupAnagrams = (strs: string[]): string[][] => {
    const result: string[][] = [];
    const resMap = new Map();

    strs
    .forEach((current) => {
        const uniq = sortWord(current)
        const value = resMap.get(uniq) || [];
        value.push(current)
        resMap.set(uniq, value)
    })

    resMap.forEach((value, key) => {
        result.push(value)
    })
    return result
};
// 02.11.23 правильно, но не проходит по времени
export const groupAnagrams2 = (strs: string[]): string[][] => {
    const result: string[][] = [];
    for (let sorted of new Set(strs.map(sortWord))) {
        const res: string[] = []
        for (let notSorted of strs) {
            if(sortWord(notSorted) === sorted) {
                res.push(notSorted)
            }
        }
        result.push(res)
    }
    return result
};

