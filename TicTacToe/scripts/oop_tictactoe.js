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
            }
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
    getPositionFromNumber(x){
        if(x < 3)
            return [0, x % 3];
        else if(x >= 3 && x < 6)
            return [1, x % 3];
        else if(x >= 6)
            return [2, x % 3]
    };
    getCellContents(x,y){
        return this.#b[x][y];
    }
    getBoard(){return this.#b;}
    resetBoard(){ this.#b = [[" "," "," "],[" "," "," "],[ " "," "," "]] }
    toString(){
        return  "[" + this.getBoard()[0][0] + "][" + this.getBoard()[0][1] + "][" + this.getBoard()[0][2] + "]\n" +
                "[" + this.getBoard()[1][0] + "][" + this.getBoard()[1][1] + "][" + this.getBoard()[1][2] + "]\n" +
                "[" + this.getBoard()[2][0] + "][" + this.getBoard()[2][1] + "][" + this.getBoard()[2][2] + "]";
    }
}

///////////////////////////////////////////
///////////// HTML Elements  ////////////// 
///////////////////////////////////////////
//  TicWrapper  -div
let box = document.createElement("div");
box.classList.add("ticWrapper");
box.id = "tictactoewrapper";
document.getElementById("app").appendChild(box);

//  Game        -div
let game = document.createElement("div");
game.classList.add("game");
game.id = "tictactoegame";
document.getElementById("tictactoewrapper").appendChild(game);

//  9x cell     -div
for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.tabIndex = i;
    cell.classList.add("cell"); 
    document.getElementById("tictactoegame").appendChild(cell);
}

// Creating style dynamically, adding <style> element
let style = document.createElement("style");
style.innerHTML = `
    .cell {
        background-color: white;
        width: 75px;
        height: 75px;
        border: 2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 0 0 2px;
    }
    .game {
        display: grid;
        grid-template-columns: repeat(3, auto);
        justify-content: center;
        align-items: center;
        margin-top: 20px;

    }
    .ticWrapper {
        text-align: center;
        margin-top: 50px;
    }
    .tictactoebutton{
        text-align: center;
        margin-top: 10px;
        width: 80px;
        height 20px;
    }
`;
document.head.appendChild(style);

/////////////////////////////////////////////////
///////////////////// Game //////////////////////
/////////////////////////////////////////////////

let board = new Board(); // Creating Board here
let player = true;
let cells = document.querySelectorAll(".cell");

//  OnClickEvent
cells.forEach(c => {
    c.addEventListener("click", function() {
    let pos = board.getPositionFromNumber(c.tabIndex);
    if(board.getCellContents(pos[0],pos[1]) === " "){
        if(player === true){
            c.textContent = "X";
            player = false;
            board.makeMove(pos[0],pos[1],"X");
        }
        else{
            c.textContent = "O";
            player = true;
            board.makeMove(pos[0],pos[1],"O");
        }
    }
        
    
    //  Console Printout
    console.log(board.toString());
    //  Win check
    if(board.checkWin()){
        console.log("Player: " + (player ? "O" : "X") + " wiins!");
        console.log(board.toString());            
        label.innerHTML = "Player: " + (player ? "O" : "X") + " wins!";
    }
    });
});

//  Reset Button
const restartButton = document.createElement("button");
restartButton.innerHTML = "RESET";
restartButton.classList.add("tictactoebutton");
document.getElementById("tictactoewrapper").appendChild(restartButton);
//  Reset Button Logic
restartButton.onclick = () => {
    board = new Board();
    cells.forEach(c => c.textContent = " ");
    label.innerHTML = "";
    console.log(board.toString());

};
//  Finished Game Printout
const label = document.createElement("p");
label.id = "tictactoeLabel";
label.style.color = "grey";
document.getElementById("tictactoewrapper").appendChild(label);