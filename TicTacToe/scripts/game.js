
    ////////////    Stuff bellow creates html elements for the tictac toe //////////
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

    ///////////////////////////////////////////
    /////////////////////////////////////////// 
    ///////////////////////////////////////////