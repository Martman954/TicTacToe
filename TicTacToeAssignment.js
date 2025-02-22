class Board{
    #b;
    constructor(){
        this.#b = [[" "," "," "],[" "," "," "],[" "," "," "]];
    }
    
    checkWin(b){return this.verticalCheck(b) ;}
    verticalCheck(board){
        b = board;
        let points;
        for (let i = 0; i < b.length; i++) {
            points = 0;
            for (let j = 0; j < b.length; j++) {
                points++;
                if(b[i][j] !== b[i][j+1] && j < 2)
                    points--;
                else if(b[i][j] !== b[i][j-1] && j == 2)
                    points--;
                
            }
            if(points == 3)
                return true;
        }
        return false;
    }
    horizontalCheck(board){
        b = board;
        let points;
        for (let i = 0; i < b.length; i++) {
            points = 0;
            for (let j = 0; j < b.length; j++) {
                points++;
                if(j < 2 && b[j][i] !== b[j+1][i])
                    points--;
                else if( j == 2 && b[j][i] !== b[j-1][i])
                    points--;
                
            }
            if(points == 3)
                return true;
        }
        return false;
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