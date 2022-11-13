const getRandom = (amount) => {
    return Math.floor(Math.random() * (amount - 1)) + 1;
};

const getBoard = (row, col, amount) => {
    const table = [...Array(row+2)]
        .fill(0)
        .map(() =>
            [...Array(col+2)].fill(0)
    );
    for (let i = 1; i < row + 1; i++) {
        for (let j = 1; j < col + 1; j++) {
            table[i][j] = getRandom(amount);
        }
    }
    return table;
};

const updateBoard = (p1, p2, board) => {
    let tempBoard = board;
    tempBoard[p1.x][p1.y] = 0;
    tempBoard[p2.x][p2.y] = 0; 
    console.log(tempBoard);
    return tempBoard;
}

export { getRandom, getBoard, updateBoard };
