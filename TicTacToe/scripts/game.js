    // Create a Game Div
    let wrapper = document.createElement("div");
    wrapper.classList.add("ticWrapper");
    wrapper.id = "tictactoewrapper";
    document.getElementById("app").appendChild(wrapper);
    
    // Create a Game Div
    let game = document.createElement("div");
    game.classList.add("game");
    game.id = "tictactoegame";
    document.getElementById("tictactoewrapper").appendChild(game);

    //  Creating 9 cells
    for (let i = 0; i < 9; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell"); // Add a class
        document.getElementById("tictactoegame").appendChild(cell);
        console.log("-");
    }
    // Append the element to the page

    // Create a <style> tag
    let style = document.createElement("style");
    style.innerHTML = `
        .cell {
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
    `;

    // Append the style to the document head
    document.head.appendChild(style);