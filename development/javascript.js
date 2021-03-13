var startButton = document.querySelector(".start-button")

console.log(startButton)
startButton.addEventListener("click", startGame)
fucntion startGame () {
    
}

// add the loading / status bar when user submits the final question


// create a function to start the quiz
    // prevent default




// save user inputs to local storage

//pokemon result screen
// fetch from pokemon api
        // fetch pokemon name
        // fetch sprite if available
        // the pokemon description
        // stats
        //fetch all pokemon data
var abilityTough=[]
function pokemonFetch() {
    for(i=1; i <152; i++) {
        var pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"+[i]
        fetch(pokemonAPI)
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                // debugger
                if ((data?.abilities[0]?.ability?.name === "synchronize")||(data?.abilities[1]?.ability?.name === "synchronize")||(data?.abilities[2]?.ability?.name === "synchronize")) {
                    abilityTough.push(data.name)   
                }
                // console.log(data?.abilities[0]?.ability?.name)
                // console.log(data?.abilities[1]?.ability?.name)
                // console.log(data?.abilities[2]?.ability?.name)
                // // console.log(data.name)
                // console.log(data.abilities)
                // console.log(abilitytough)
                // console.log(data)
            })
    }
    
}
console.log(abilityTough)
pokemonFetch();



    // fetch from music api
        // fetch music

    // var for array of pokemon team = [151]
    // 4 different pokemon array

    // array 1 = {[beach + tough/soft + warm/cod + action/drama]}
    // example if (user.input === tough) {
        //return 
    // }
    // array 2 = [space + tough/soft + warm/cod + action/drama]
    // array 3 = [mountain + tough/soft + warm/cod + action/drama]
    // array 4 = [cloud + tough/soft + warm/cod + action/drama]

    // var for array of music choices = [20] 

    // precreate the teams in new vars (for example 10 predetermined teams = 10 var arrays)
    // precreate mini arrays of music

    // if team array 0 then music array 0

    // create logic for responses to select team
        // if responses to question (x5)
        // recursive function so that user doesn't get same pokemon twice
    // create logic for responses to select music
        // if responses to questions (x5)


    // add the pokemon team to the results page

    // add the music to the results page

// call the function to start the quiz






// *missigno easter egg code*
// *add a pokemon music library while user is working on the quiz*
// *if third party music api is working and running then let's challenege ourselves to incrporate spotify api*

//add pokemon music library while user is working on the quiz*



