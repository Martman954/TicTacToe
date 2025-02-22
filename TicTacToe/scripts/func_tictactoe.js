///////////////////////////////////////////
///////// Functions for the game ////////// 
///////////////////////////////////////////

const createBoard = () => {return [[" "," "," "],[" "," "," "],[" "," "," "]];};
const makeMove = (x,y,z,b) => {
    b[x][y] = z;
};
const getBoardInText = (b) => {
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
const getPositionFromNumber = (x) => {
    if(x < 3)
        return [0, x % 3];
    else if(x >= 3 && x < 6)
        return [1, x % 3];
    else if(x >= 6)
        return [2, x % 3]
};
const getCellContents = (x,y,board) => {
    return board[x][y];
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

let board = createBoard(); // Creating Board here
let player = true;
let cells = document.querySelectorAll(".cell");

//  OnClickEvent
cells.forEach(c => {
    c.addEventListener("click", function() {
    let pos = getPositionFromNumber(c.tabIndex);
    if(getCellContents(pos[0],pos[1],board) === " "){
        if(player === true){
            c.textContent = "X";
            player = false;
            makeMove(pos[0],pos[1],"X",board);
        }
        else{
            c.textContent = "O";
            player = true;
            makeMove(pos[0],pos[1],"O",board);
        }
    }
        
    
    //  Console Printout
    console.log(getBoardInText(board));
    //  Win check
    if(checkWin(board)){
        console.log("Player: " + (player ? "O" : "X") + " wiins!");
        console.log(getBoardInText(board));            
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
    board = createBoard();
    cells.forEach(c => c.textContent = " ");
    label.innerHTML = "";
    console.log(getBoardInText(board));

};
//  Finished Game Printout
const label = document.createElement("p");
label.id = "tictactoeLabel";
label.style.color = "grey";
document.getElementById("tictactoewrapper").appendChild(label);

