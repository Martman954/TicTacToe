class Board{
    #b;
    constructor(){
        this.#b = [[" "," "," "],[" "," "," "],[" "," "," "]];
    }
    checkWin(){ return this.horizontalCheck(this.#b) || this.diagonalCheck(this.#b) || this.verticalCheck(this.#b); }
    horizontalCheck(board){
        for (let i = 0; i < board.length; i++) {
            if(board[i][0] !== " " && board[i][0] === board[i][1] && board[i][1] === board[i][2])
                return true;
            }() => board
        return false;
    }
    verticalCheck(board){
        for (let i = 0; i < board.length; i++) {
            if(board[0][i] !== " " && board[0][i] === board[1][i] && board[1][i] === board[2][i])
                return true;
            }
        return false;
    }
    diagonalCheck(board){
        return (board[0][0] !== " " && board[0][0] === board[1][1] && board[1][1] === board[2][2])
            || (board[2][0] !== " " && board[0][2] === board[1][1] && board[1][1] === board[2][0])
    }
    
    makeMove(x,y,z){
        this.#b[x][y] = z; 
    }
    getBoard(){return this.#b;}
    resetBoard(){ this.#b = [[" "," "," "],[" "," "," "],[ " "," "," "]] }
    toString(){
        return  "[" + this.getBoard()[0][0] + "][" + this.getBoard()[0][1] + "][" + this.getBoard()[0][2] + "]\n" +
                "[" + this.getBoard()[1][0] + "][" + this.getBoard()[1][1] + "][" + this.getBoard()[1][2] + "]\n" +
                "[" + this.getBoard()[2][0] + "][" + this.getBoard()[2][1] + "][" + this.getBoard()[2][2] + "]";
    }
}

b = new Board();
wrapper = new Game(b);
b.resetBoard();
b.makeMove(2,1,"X");
b.makeMove(0,1,"X");
b.makeMove(1,1,"X");
b.makeMove(2,0,"X");
b.makeMove(2,1,"X");
console.log(b.toString());
console.log(b.checkWin());