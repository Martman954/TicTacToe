class Board{
    #b;
    constructor(){
        this.#b = [[" "," "," "],[" "," "," "],[" "," "," "]];
    }
    
    checkWin(b){return this.verticalCheck(b) ;}
    verticalCheck(board){
        // Code here
    }
    horizontalCheck(board){
        // Code Here
    }
    diagonalCheck(board){
        if(board[0][0] === " " || board[0][2] === " ")
            return false;

        x = board[0][0];
        y = board[0][2]
        return (board[0][0] === x && board[1][1] === x && board[2][2] === x)
                || (board[0][2] === y && board[1][1] === y && board[2][0] === y)
    }
    makeMove(x,y,z){
        this.#b[x][y] = z; 
    }
    getBoard(){return this.#b;}
    resetBoard(){ this.#b = [[" "," "," "],[" "," "," "],[ " "," "," "]] }
    toString(){
        return  "[" +this.getBoard()[0][0] + "][" + this.getBoard()[0][1] + "][" + this.getBoard()[0][2] + "]\n" +
                "[" +this.getBoard()[1][0] + "][" + this.getBoard()[1][1] + "][" + this.getBoard()[1][2] + "]\n" +
                "[" +this.getBoard()[2][0] + "][" + this.getBoard()[2][1] + "][" + this.getBoard()[2][2] + "]";
    }
}

b = new Board();
b.resetBoard();
b.makeMove(1,1,"X");
b.makeMove(2,1,"X");
b.makeMove(0,1,"X");
b.makeMove(2,1,"X");
b.makeMove(0,2,"X");
b.makeMove(2,2,"X");
console.log(b.toString());
console.log(b.checkWin(b));