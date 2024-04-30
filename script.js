/** Step 4: Make the Pokemon Types
 * A function to make span elements for the specific 'types' of a pokemon
 * @param {Array} pokemonTypes - an array of pokemon types
 */
function makePokemonTypes(pokemonTypes){
    //choose the container for the types
    const pokemonTypesSpan = document.querySelector('#types');
    //clear the container- call the clearContainer function
    clearContainer(pokemonTypesSpan);

    //what array do you need to loop through? (it's not the example types below)
    //what is the value of the parameter pokemonTypes (log it if you're unsure)?
    console.log(pokemonTypes)
    const types = pokemonTypes;
    //loop through the types

    for(let i = 0; i < types.type; i++){
        console.log(types);
        const type = types[i].type.name;
        //create a span element
        const typeSpan = document.createElement('span');
        //set the textContent of the span element to the type
        typeSpan.textContent = type;
        //add a class to the span element
        typeSpan.classList.add('type');
        //adding the class which is called the value of type (i.e. fire, water, etc.)
        typeSpan.classList.add(type);
        //add the span element to the container
        pokemonTypesSpan.appendChild(typeSpan);
    }
}

/**
 * A function to set the basic info for the pokemon
 * @param {Object} pokemonData - the data for the pokemon
 */
function setBasicInfo(pokemonData){
    //setting the name of the pokemon
    const pokemonName = document.querySelector('#pokemon-name');
    pokemonName.textContent = pokemonData.name;

    const pokemonImage = document.querySelector('#sprite');
    pokemonImage.src = pokemonData.sprites.front_default;
    pokemonImage.alt = pokemonData.name;

    const pokemonId = document.querySelector('#pokemon-id');
    pokemonId.textContent = `ID: ${pokemonData.id}`;

    const pokemonWeight = document.querySelector('#weight');
    pokemonWeight.textContent = `Weight: ${pokemonData.weight};`

    const pokemonHeight = document.querySelector('#height');
    pokemonHeight.textContent = `Height: ${pokemonData.height}`


    //step 3: Finish the function
    //etc... you continue this for the other basic info
    //get the element by id using querySelector
    //set the textContent of the element to the value from the pokemonData
    //try to set the id, height, and weight
}


/** 
 * A function to set the stats for a pokemon
 * @param {Array} stats - an array of stats for a pokemon
*/
function setStats(stats){

    //setting the stats for the pokemon

    //getting the hp element
    const hp = document.querySelector('#hp');
    //try changing the 0 below to 1, 2, 3, 4, 5
    const pokemonHP = stats[0].base_stat;
    hp.textContent = `${pokemonHP}`;

    //etc... you continue this for the other stats
}


/**
 * A useful function to clear a container
 * @param {Element} container - the container to clear
 */
function clearContainer(container){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

/**
 * A function to clear the pokemon data
 */
function clearPokemonData(){
    //Step 6: Clear the pokemon data
}


/**
 * //Step 1: A function to show the pokemon
 * A function to show the pokemon
 */
async function showPokemon(){
    //get the search-input
    const searchInput = document.querySelector('#search-input');
    const searchValue = searchInput.value;

    //fetch the pokemon
    const apiURL = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchValue}`;

    //try to get the pokemon data
    let pokemonData = null;
    try {
        const response = await fetch(apiURL);
        pokemonData = await response.json();
        console.log(pokemonData);
    }
    catch(error) {
        //if there was an error, alert the user and clear the pokemon data
        console.log('error', error);
        alert('Pokemon not found');
    }
    //display the pokemon -- in three parts
    //Step 2: breaking it down into functions. 
    //First Function -- setBasicInfo (step 3)
    setBasicInfo(pokemonData);
    //Second Function -- makePokemonTypes (step 4)
    makePokemonTypes(pokemonData.types);
    //Third Function -- setStats (step 5)
    setStats(pokemonData.stats);
}

/**
 * A function to run the program
 */
function runProgram(){
    console.log('runProgram');
    //get the button and add an event listener
    const searchButton = document.querySelector('#search-button');
    searchButton.addEventListener('click', showPokemon);
}
document.addEventListener('DOMContentLoaded', runProgram);