import { solveSudoku } from "./src/solveSudoku";

const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"],
]
const board2 = [
    [".",".","9","7","4","8",".",".","."],
    ["7",".",".",".",".",".",".",".","."],
    [".","2",".","1",".","9",".",".","."],
    [".",".","7",".",".",".","2","4","."],
    [".","6","4",".","1",".","5","9","."],
    [".","9","8",".",".",".","3",".","."],
    [".",".",".","8",".","3",".","2","."],
    [".",".",".",".",".",".",".",".","6"],
    [".",".",".","2","7","5","9",".","."],
]
const time = Date.now();
const res = solveSudoku(board2)
console.log('GG')
const time2 = Date.now();
console.log('time', time2 - time)

// Решено
// https://leetcode.com/problems/implement-queue-using-stacks/
// https://leetcode.com/problems/lru-cache/
// https://leetcode.com/problems/two-sum/
// https://leetcode.com/problems/reverse-words-in-a-string/
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// https://leetcode.com/problems/valid-palindrome/
// https://leetcode.com/problems/group-anagrams/
// https://leetcode.com/problems/3sum/
// https://leetcode.com/problems/generate-parentheses/
// https://leetcode.com/problems/3sum-closest/description/
// https://leetcode.com/problems/longest-common-prefix/description/
// https://leetcode.com/problems/climbing-stairs/description/
// https://leetcode.com/problems/majority-element/description/
// https://leetcode.com/problems/majority-element-ii/description/
// https://leetcode.com/problems/most-frequent-even-element/description/
// https://leetcode.com/problems/reverse-bits/description/
// https://leetcode.com/problems/number-of-1-bits/description/
// https://leetcode.com/problems/happy-number/submissions/
// https://leetcode.com/problems/contains-duplicate/description/
// https://leetcode.com/problems/contains-duplicate-ii/
// https://leetcode.com/problems/merge-sorted-array/
// https://leetcode.com/problems/valid-parentheses/
// https://leetcode.com/problems/remove-element/
// https://leetcode.com/problems/move-zeroes/
// https://leetcode.com/problems/sudoku-solver/description/

// Не решено
// https://leetcode.com/problems/binary-tree-paths/
// https://leetcode.com/problems/linked-list-cycle/
// https://leetcode.com/problems/reverse-linked-list/
// https://leetcode.com/problems/longest-palindromic-substring/
// https://leetcode.com/problems/validate-binary-search-tree/
// https://leetcode.com/problems/symmetric-tree/
// https://leetcode.com/problems/subarray-sum-equals-k/
// https://leetcode.com/problems/add-two-numbers/
// https://leetcode.com/problems/merge-two-sorted-lists/
// https://leetcode.com/problems/rotate-image/
// https://leetcode.com/problems/trapping-rain-water/
// https://leetcode.com/problems/merge-k-sorted-lists/
// https://leetcode.com/problems/spiral-matrix-ii/
// https://leetcode.com/problems/insert-delete-getrandom-o1/
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/







