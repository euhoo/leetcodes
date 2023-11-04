// https://leetcode.com/problems/happy-number/submissions/
// EASY
// 04/11/23
export const isHappy = (n: number): boolean => {
    const count = 100;
    let value = n;
    for(let i = 0; i < 100; i++) {
        const newValue = `${value}`
        .split('')
        .reduce((acc, current) => acc + Math.pow(+current, 2), 0);
        if (newValue === 1) return true;
        value = newValue
    }
    return false;
};