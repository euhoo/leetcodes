//https://leetcode.com/problems/valid-anagram/description/
// EASY

const sortWord = (str: string):string => str.split('').sort().join('')
function isAnagram2(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    return sortWord(s) === sortWord(t)
};