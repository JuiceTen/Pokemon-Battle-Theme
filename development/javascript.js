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

function pokemonFetch() {
    var abilitytough=[]
    var pokeAbility = []
    for(i=1; i <=151; i++) {
        var pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"+[i]
        fetch(pokemonAPI)
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                if ((data.abilities[0].ability.name === "synchronize")||(data.abilities[1].ability.name === "synchronize")); {
                    pokeAbility.push(data.abilities[0].ability.name)   
                }
                console.log(data.name)
                console.log(data.abilities)
                console.log(pokeAbility)
                console.log(data)
            })
    }
    
}
pokemonFetch();

// var thing = {[
//     ability: "synchronize"
// ]}

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






// missigno easter egg code

//add pokemon music library while user is working on the quiz*



