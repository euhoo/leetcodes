// https://leetcode.com/problems/pascals-triangle/description/
// EASY


export function generate(numRows: number): number[][] {
    const res: number[][] = [];
        if (numRows === 0) return [];
    for( let i = 0; i <= numRows; i++) {
 
        if (i === 0) continue;
        if (i === 1) {
            res.push([1])
            continue;
        }
        if (i === 2) {
            res.push([1,1])
            continue;
        }
        const lastValue = res[i - 2];
        const newRes = lastValue.reduce((acc: number[], current: number, index: number) => {
            if (index === 0) return [1];
            const prevValue = lastValue[index]
            return [...acc, current + lastValue[index - 1]]
        }, [])
        newRes.push(1);
        res.push(newRes)
    }
    return res
};