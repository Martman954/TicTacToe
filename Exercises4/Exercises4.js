//////////////////// FIRST EXERCISE /////////////////////////////////////
const xhr = new XMLHttpRequest();

const getPokemonXHLRequest = () => {
  //  Get the HTML elements

  const userInput = document.getElementById("pokeInput").value.trim();
  const pokeResult = document.getElementById("pokeResult");
  const pokeImage = document.getElementById("pokeImage");
  if (!userInput) {
    pokeResult.textContent = "Please enter a Pokemon name or ID";
    pokeImage.src = "";
    return;
  }

  xhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${userInput}`);
  xhr.onload = () => {
    if (xhr.status == 200) {
      pokemon = JSON.parse(xhr.responseText);
      pokeResult.textContent =
        pokemon.name + " : " + pokemon.types[0].type.name;
      pokeImage.src = pokemon.sprites.front_default;
    } else {
      pokeResult.textContent = "Pokemon not found";
    }
  };
  xhr.onerror = () => (pokeResult.textContent = "Error");
  xhr.send();
};

const getPokemonPromise = () => {
  //  Get the HTML elements
  const userInput = document.getElementById("pokeInput").value.trim();
  const pokeResult = document.getElementById("pokeResult");
  const pokeImage = document.getElementById("pokeImage");

  if (!userInput) {
    pokeResult.textContent = "Please enter a Pokemon name or ID";
    pokeImage.src = "";
    return;
  }
  //  Dont forget to parse that shiii
  fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    .then((response) => response.json())
    .then((pokemon) => {
      pokeResult.textContent = `${pokemon.name} : ${pokemon.types[0].type.name}`;
      pokeImage.src = pokemon.sprites.front_default;
    })
    .catch((error) => {
      pokeResult.textContent = error;
      pokeImage.src = "";
    });
};

async function getPokemonAsync() {
  const userInput = document.getElementById("pokeInput").value.trim();
  const pokeResult = document.getElementById("pokeResult");
  const pokeImage = document.getElementById("pokeImage");

  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network Error, RESPONSE IS NOT OK");
    let pokemon = await response.json();
    pokeResult.textContent = `${pokemon.name} : ${pokemon.types[0].type.name}`;
    pokeImage.src = pokemon.sprites.front_default;
  } catch {
    pokeResult.textContent = "Caught an error";
  }
}
