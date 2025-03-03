//////////////////// FIRST EXERCISE /////////////////////////////////////
const xhr = new XMLHttpRequest();
const getPokemonXHLRequest = () => {
    //  Get the HTML elements
    const userInput = document.getElementById("pokeInput").value.trim();
    const pokeResult = document.getElementById("pokeResult");
    const pokeImage = document.getElementById("pokeImage");

    if(!userInput){
        pokeResult.textContent = "Please enter a Pokemon name or ID";
        pokeImage.src = "";
        return;
    }

    xhr.open("GET" , `https://pokeapi.co/api/v2/pokemon/${userInput}`);
    xhr.onload = () => {
        if (xhr.status == 200) {
            pokemon = JSON.parse(xhr.responseText);
            pokeResult.textContent = pokemon.name + " : " + pokemon.types[0].type.name;
            pokeImage.src = pokemon.sprites.front_default;
        }
        else{
            pokeResult.textContent = "Pokemon not found";
        }
    };
    xhr.onerror = () => pokeResult.textContent = "Error";
    xhr.send();
};

const getPokemonFetchCatch = () => {
    //  Get the HTML elements
    const userInput = document.getElementById("pokeInput").value.trim();
    const pokeResult = document.getElementById("pokeResult");
    const pokeImage = document.getElementById("pokeImage");

    if(!userInput){
        pokeResult.textContent = "Please enter a Pokemon name or ID";
        pokeImage.src = "";
        return;
    }

    
};


