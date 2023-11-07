// https://leetcode.com/problems/sudoku-solver/
// HARD

// 06-07/11/23

type BoardT = string[][];

const makeNewFullSet = (): Set<string> => new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
const makeFullValidMapKeyByXY = (x: number, y: number): string => `${x}.${y}`;

const findValidNumsByY = (x: number, y: number, board: BoardT): Set<string> => {
    const res = makeNewFullSet();
    for(let cellY = 0; cellY < 9; cellY++) {
        if (cellY === y) continue;
        const valueToCheck = board[cellY][x];
        if (valueToCheck && valueToCheck !== '.') {
            res.delete(valueToCheck)
        }
    }
    return res;
}
const findValidNumsByX = (x: number, y: number, board: BoardT): Set<string> => {
    const res = makeNewFullSet();
    for(let cellX = 0; cellX < 9; cellX++) {
        if (cellX === x) continue;
        const valueToCheck = board[y][cellX];
        if (valueToCheck && valueToCheck !== '.') {
            res.delete(valueToCheck)
        }
    }
    return res;
}
const findValidNumsByCube = (x: number, y: number, board: BoardT): Set<string> => {
    const res = makeNewFullSet();
    let cubeX = 0; 
    let cubeY = 0;
    if (x <= 2) { cubeX = 0 }
    else if (x <= 5) { cubeX = 1 }
    else { cubeX = 2 }

    if (y <= 2) { cubeY = 0 }
    else if (y <= 5) { cubeY = 1 }
    else { cubeY = 2 }
    for (let cellX = 3 * cubeX; cellX < 3 * cubeX + 3; cellX++){
        for (let cellY = 3 * cubeY; cellY < 3 * cubeY + 3; cellY++){
            if (cellX === x && cellY === y) continue;
            const valueToCheck = board[cellY][cellX];
            if (valueToCheck && valueToCheck !== '.') {
                res.delete(valueToCheck)
            }
        }
    }
    return res;
}
// вернет единственное пересечение, если оно есть. иначе нет.
const findIntersectionIfOne = (set1: Set<string>, set2: Set<string>, set3: Set<string>): Set<string> => {
    const set12 =  new Set([...set1].filter(i => set2.has(i)));
    return new Set([...set12].filter(i => set3.has(i)));
}

// пытается проставить все 
const play = (board: BoardT): boolean => {
    let isFinished = true;
    // пройти по доске
    for(let y = 0; y < 9; y++) {
        for(let x = 0; x < 9; x++) {
            // для каждой ячейки найти пересечение между допустимым значением 
            const currentValue = board[y][x];
            if (currentValue && currentValue !== '.') continue;
            isFinished = false
            // если есть единственное пересечение - проставить в board это значение
            const intersection = findIntersectionIfOne(
                // -строки этой ячейки
                findValidNumsByY(x, y, board),
                // - столбца этой ячейки
                findValidNumsByX(x, y, board),
                // - куба этой ячейки
                findValidNumsByCube(x, y, board),
                  );
                  if(intersection.size === 1) {
                    for (let value of intersection){
                        board[y][x] = value
                    }
                }
        }
    }
    return isFinished;
}
const findSmallestIntersectionsElement = (board: BoardT, xySet: Set<string>): [number, number, string[]] => {
    let smallestX = 0;
    let smallestY = 0;
    let smallestValuesSet: Set<string> = new Set<string>();
    for(let y = 0; y < 9; y++) {
        for(let x = 0; x < 9; x++) {
            // для каждой ячейки найти пересечение между допустимым значением 
            const currentValue = board[y][x];
            const tryKey = makeFullValidMapKeyByXY(x,y);
            if (currentValue && currentValue !== '.' || (xySet.has(tryKey))) continue;
            // если есть единственное пересечение - проставить в board это значение
            const intersection = findIntersectionIfOne(
                // -строки этой ячейки
                findValidNumsByY(x, y, board),
                // - столбца этой ячейки
                findValidNumsByX(x, y, board),
                // - куба этой ячейки
                findValidNumsByCube(x, y, board),
                  );
                  if (intersection.size > smallestValuesSet.size) {
                    smallestX = x;
                    smallestY = y;
                    smallestValuesSet = intersection;
                  }

        }
    }
    return [smallestX, smallestY, [...smallestValuesSet]]
}
 const sudoky = (board: BoardT): boolean => {
    let isFinished = false;
    // предохранитель
    const maxTries = 100;
    for (let i = 0; i < maxTries; i++) {
        // console.log(i)
        isFinished = play(board);
        if (isFinished) break
    }
    return isFinished
};

const updateBoardByNewBoard = (boardToUpdate: BoardT, boardTFromUpdate: BoardT) => {
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            boardToUpdate[y][x] = boardTFromUpdate[y][x]
        }
    }
}
/**
 Do not return anything, modify board in-place instead.
 */
export function solveSudoku(board: BoardT): void {
    const isFirstTryFinished = sudoky(board);
    if (isFirstTryFinished) {
        console.log(board);
        return;
    }
    const triesSet = new Set<string>()
    for(let trry = 0; trry < 100; trry++) {
        const [x, y, values] = findSmallestIntersectionsElement(board, triesSet);
        triesSet.add(makeFullValidMapKeyByXY(x,y))
        const newBoard = board.map(row => [...row]);
        for(let value of values) {
            newBoard[y][x] = value;
            const isFinished = sudoky(newBoard);
            if (isFinished) {
                updateBoardByNewBoard(board, newBoard)
                return;
            }
        }
    }
};