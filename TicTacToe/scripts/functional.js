const createBoard = () => {return [[" "," "," "],[" "," "," "],[" "," "," "]];};
const makeMove = (x,y,z,b) => {
    b[x][y] = z;
};
const printBoard = (b) => {
    return  "[" + b[0][0] + "][" + b[0][1] + "][" + b[0][2] + "]\n" +
    "[" + b[1][0] + "][" + b[1][1] + "][" + b[1][2] + "]\n" +
    "[" + b[2][0] + "][" + b[2][1] + "][" + b[2][2] + "]";
};
const checkWin = (board) => {
    //  Horizontal Check
    for (let j = 0; j < board.length; j++) {
        if(board[j][0] !== " " && board[j][0] === board[j][1] && board[j][1] === board[j][2])
            return true;
    }
    //  Vertical Check
    for (let i = 0; i < board.length; i++) {
        if(board[i][0] !== " " && board[i][0] === board[i][1] && board[i][1] === board[i][2])
            return true;
    }
    //  Diagonal Check
    for (let i = 0; i < board.length; i++) {
        if(board[0][i] !== " " && board[0][i] === board[1][i] && board[1][i] === board[2][i])
            return true;
    }
    return false;
};


board = createBoard();
makeMove(0,0,"X", board);
makeMove(0,1,"X", board);
console.log(printBoard(board));
console.log(checkWin(board));
makeMove(0,2,"X", board);
console.log(printBoard(board));
console.log(checkWin(board));

