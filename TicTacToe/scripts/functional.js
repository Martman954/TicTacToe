const createBoard = () => {return [[" "," "," "],[" "," "," "],[" "," "," "]];};
const makeMove = (x,y,z,b) => {
    b[x][y] = z;
};
const getBoard = (b) => {
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
        if(board[0][i] !== " " && board[0][i] === board[1][i] && board[1][i] === board[2][i])
            return true;
        }

    //  Diagonal Check
    if(board[0][0] !== " " && board[0][0] === board[1][1] && board[1][1] === board[2][2])
        return true;
    if(board[0][2] !== " " && board[0][2] === board[1][1] && board[1][1] === board[2][0])
        return true;

    return false;
};



