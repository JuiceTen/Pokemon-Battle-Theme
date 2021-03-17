var startButton = document.querySelector(".start-button")
var coldClass = document.querySelectorAll(".cold")
var beachClass = document.querySelectorAll(".beach")
var toughClass = document.querySelectorAll(".tough")
var flexClass = document.querySelectorAll(".flex")
// vars for giphy fetch function
var giphyApiKey = "tH4RZrQuamL0pNhPo7JKg8xo5vcFANzX"
var giphyApiUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + giphyApiKey + "&limit=1"
var gifImage = document.querySelector(".moving-gif")
var pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"
console.log(coldClass)
console.log(beachClass)
console.log(toughClass)
console.log(flexClass)

var abilityTough=[]
var abilityFlex=[]
var abilityBeach=[]
var abilityCold=[]
var pokemonTeam = []
var uniquePokemon = []

// console.log(startButton)
// startButton.addEventListener("click", startGame)
// fucntion startGame () {
    
// }

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
//TO DO
// refactor ability sorter
function pokemonFetch() {
    for(i=1; i <152; i++) {
        var pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"+[i]
        fetch(pokemonAPI)
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                // debugger
                if ((data?.abilities[0]?.ability?.name === "big-pecks")||(data?.abilities[1]?.ability?.name === "big-pecks")||(data?.abilities[2]?.ability?.name === "big-pecks")||(data?.abilities[0]?.ability?.name === "battle-armor")||(data?.abilities[1]?.ability?.name === "battle-armor")||(data?.abilities[2]?.ability?.name === "battle-armor")||(data?.abilities[0]?.ability?.name === "pressure")||(data?.abilities[1]?.ability?.name === "pressure")||(data?.abilities[2]?.ability?.name === "pressure")||(data?.abilities[0]?.ability?.name === "effect-spore")||(data?.abilities[1]?.ability?.name === "rock-head")||(data?.abilities[2]?.ability?.name === "rock-head")||(data?.abilities[0]?.ability?.name === "guts")||(data?.abilities[1]?.ability?.name === "guts")||(data?.abilities[2]?.ability?.name === "guts")||(data?.abilities[0]?.ability?.name === "shell-armor")||(data?.abilities[1]?.ability?.name === "shell-armor")||(data?.abilities[2]?.ability?.name === "shell-armor")||(data?.abilities[0]?.ability?.name === "sheer-force")||(data?.abilities[1]?.ability?.name === "sheer-force")||(data?.abilities[2]?.ability?.name === "sheer-force")||(data?.abilities[0]?.ability?.name === "anger-point")||(data?.abilities[1]?.ability?.name === "anger-point")||(data?.abilities[2]?.ability?.name === "anger-point")||(data?.abilities[0]?.ability?.name === "intimidate")||(data?.abilities[1]?.ability?.name === "intimidate")||(data?.abilities[2]?.ability?.name === "intimidate")||(data?.abilities[0]?.ability?.name === "moxie")||(data?.abilities[1]?.ability?.name === "moxie")||(data?.abilities[2]?.ability?.name === "moxie")||(data?.abilities[0]?.ability?.name === "thick-fat")||(data?.abilities[1]?.ability?.name === "thick-fat")||(data?.abilities[2]?.ability?.name === "thick-fat")||(data?.abilities[0]?.ability?.name === "inner-focus")||(data?.abilities[1]?.ability?.name === "inner-focus")||(data?.abilities[2]?.ability?.name === "inner-focus")) {
                    abilityTough.push(data.name)   
                }
                if ((data?.abilities[0]?.ability?.name === "cute-charm")||(data?.abilities[1]?.ability?.name === "cute-charm")||(data?.abilities[2]?.ability?.name === "cute-charm")||(data?.abilities[0]?.ability?.name === "magic-guard")||(data?.abilities[1]?.ability?.name === "magic-guard")||(data?.abilities[2]?.ability?.name === "magic-guard")||(data?.abilities[0]?.ability?.name === "cloud-nine")||(data?.abilities[1]?.ability?.name === "cloud-nine")||(data?.abilities[2]?.ability?.name === "cloud-nine")||(data?.abilities[0]?.ability?.name === "effect-spore")||(data?.abilities[1]?.ability?.name === "effect-spore")||(data?.abilities[2]?.ability?.name === "effect-spore")||(data?.abilities[0]?.ability?.name === "limber")||(data?.abilities[1]?.ability?.name === "limber")||(data?.abilities[2]?.ability?.name === "limber")||(data?.abilities[0]?.ability?.name === "technician")||(data?.abilities[1]?.ability?.name === "technician")||(data?.abilities[2]?.ability?.name === "technician")||(data?.abilities[0]?.ability?.name === "synchronize")||(data?.abilities[1]?.ability?.name === "synchronize")||(data?.abilities[2]?.ability?.name === "synchronize")||(data?.abilities[0]?.ability?.name === "poison-point")||(data?.abilities[1]?.ability?.name === "poison-point")||(data?.abilities[2]?.ability?.name === "poison-point")||(data?.abilities[0]?.ability?.name === "keen-eye")||(data?.abilities[1]?.ability?.name === "keen-eye")||(data?.abilities[2]?.ability?.name === "keen-eye")||(data?.abilities[0]?.ability?.name === "shield-dust")||(data?.abilities[1]?.ability?.name === "shield-dust")||(data?.abilities[2]?.ability?.name === "shield-dust")||(data?.abilities[0]?.ability?.name === "regenerator")||(data?.abilities[1]?.ability?.name === "regenerator")||(data?.abilities[2]?.ability?.name === "regenerator")||(data?.abilities[0]?.ability?.name === "unaware")||(data?.abilities[1]?.ability?.name === "unaware")||(data?.abilities[2]?.ability?.name === "unaware")) {
                    abilityFlex.push(data.name)   
                }
                if ((data?.abilities[0]?.ability?.name === "solar-power")||(data?.abilities[1]?.ability?.name === "solar-power")||(data?.abilities[2]?.ability?.name === "solar-power")||(data?.abilities[0]?.ability?.name === "sand-veil")||(data?.abilities[1]?.ability?.name === "sand-veil")||(data?.abilities[2]?.ability?.name === "sand-veil")||(data?.abilities[0]?.ability?.name === "flash-fire")||(data?.abilities[1]?.ability?.name === "flash-fire")||(data?.abilities[2]?.ability?.name === "flash-fire")||(data?.abilities[0]?.ability?.name === "chlorophyll")||(data?.abilities[1]?.ability?.name === "chlorophyll")||(data?.abilities[2]?.ability?.name === "chlorophyll")||(data?.abilities[0]?.ability?.name === "harvest")||(data?.abilities[1]?.ability?.name === "harvest")||(data?.abilities[2]?.ability?.name === "harvest")||(data?.abilities[0]?.ability?.name === "dry-skin")||(data?.abilities[1]?.ability?.name === "dry-skin")||(data?.abilities[2]?.ability?.name === "dry-skin")||(data?.abilities[0]?.ability?.name === "blaze")||(data?.abilities[1]?.ability?.name === "blaze")||(data?.abilities[2]?.ability?.name === "blaze")||(data?.abilities[0]?.ability?.name === "drought")||(data?.abilities[1]?.ability?.name === "drought")||(data?.abilities[2]?.ability?.name === "drought")||(data?.abilities[0]?.ability?.name === "natural-cure")||(data?.abilities[1]?.ability?.name === "natural-cure")||(data?.abilities[2]?.ability?.name === "natural-cure")||(data?.abilities[0]?.ability?.name === "serene-grace")||(data?.abilities[1]?.ability?.name === "serene-grace")||(data?.abilities[2]?.ability?.name === "serene-grace")||(data?.abilities[0]?.ability?.name === "stench")||(data?.abilities[1]?.ability?.name === "stench")||(data?.abilities[2]?.ability?.name === "stench")||(data?.abilities[0]?.ability?.name === "clear-body")||(data?.abilities[1]?.ability?.name === "clear-body")||(data?.abilities[2]?.ability?.name === "clear-body")||(data?.abilities[0]?.ability?.name === "flame-body")||(data?.abilities[1]?.ability?.name === "flame-body")||(data?.abilities[2]?.ability?.name === "flame-body")) {
                    abilityBeach.push(data.name)   
                }
                if ((data?.abilities[0]?.ability?.name === "damp")||(data?.abilities[1]?.ability?.name === "damp")||(data?.abilities[2]?.ability?.name === "damp")||(data?.abilities[0]?.ability?.name === "drizzle")||(data?.abilities[1]?.ability?.name === "drizzle")||(data?.abilities[2]?.ability?.name === "drizzle")||(data?.abilities[0]?.ability?.name === "ice-body")||(data?.abilities[1]?.ability?.name === "ice-body")||(data?.abilities[2]?.ability?.name === "ice-body")||(data?.abilities[0]?.ability?.name === "rain-dish")||(data?.abilities[1]?.ability?.name === "rain-dish")||(data?.abilities[2]?.ability?.name === "rain-dish")||(data?.abilities[0]?.ability?.name === "liquid-ooze")||(data?.abilities[1]?.ability?.name === "liquid-ooze")||(data?.abilities[2]?.ability?.name === "liquid-ooze")||(data?.abilities[0]?.ability?.name === "swift-swim")||(data?.abilities[1]?.ability?.name === "swift-swim")||(data?.abilities[2]?.ability?.name === "swift-swim")||(data?.abilities[0]?.ability?.name === "rain-dish")||(data?.abilities[1]?.ability?.name === "rain-dish")||(data?.abilities[2]?.ability?.name === "rain-dish")||(data?.abilities[0]?.ability?.name === "shell-armor")||(data?.abilities[1]?.ability?.name === "shell-armor")||(data?.abilities[2]?.ability?.name === "shell-armor")||(data?.abilities[0]?.ability?.name === "water-veil")||(data?.abilities[1]?.ability?.name === "water-veil")||(data?.abilities[2]?.ability?.name === "water-veil")||(data?.abilities[0]?.ability?.name === "lightning-rod")||(data?.abilities[1]?.ability?.name === "lightning-rod")||(data?.abilities[2]?.ability?.name === "lightning-rod")||(data?.abilities[0]?.ability?.name === "static")||(data?.abilities[1]?.ability?.name === "static")||(data?.abilities[2]?.ability?.name === "static")||(data?.abilities[0]?.ability?.name === "weak-armor")||(data?.abilities[1]?.ability?.name === "weak-armor")||(data?.abilities[2]?.ability?.name === "weak-armor")||(data?.abilities[0]?.ability?.name === "magnet-pull")||(data?.abilities[1]?.ability?.name === "magnet-pull")||(data?.abilities[2]?.ability?.name === "magnet-pull")||(data?.abilities[0]?.ability?.name === "water-absorb")||(data?.abilities[1]?.ability?.name === "water-absorb")||(data?.abilities[2]?.ability?.name === "water-absorb")||(data?.abilities[0]?.ability?.name === "volt-absorb")||(data?.abilities[1]?.ability?.name === "volt-absorb")||(data?.abilities[2]?.ability?.name === "volt-absorb")||(data?.abilities[0]?.ability?.name === "hydration")||(data?.abilities[1]?.ability?.name === "hydration")||(data?.abilities[2]?.ability?.name === "hydration")||(data?.abilities[0]?.ability?.name === "levitate")||(data?.abilities[1]?.ability?.name === "levitate")||(data?.abilities[2]?.ability?.name === "levitate")) {
                    abilityCold.push(data.name)   
                }
            })
    }
    console.log(abilityTough)
    console.log(abilityFlex)  
    console.log(abilityBeach)
    console.log(abilityCold)      
}

pokemonFetch();

function getGif() {
    
    var firstPoke = pokemonTeam[0]
    var giphyApiUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + giphyApiKey + "&limit=1"  + "&q=" + "pokemon:" + firstPoke ;

    // console.log(giphyApiUrl)
    // console.log(pokemonTeam)
    // console.log(pokemonTeam[0])
    // console.log(firstPoke)

    fetch(giphyApiUrl)
        .then(function(response) {
            return response.json()
        }) 
        .then(function(json) {
            console.log(json)
            gifImage.src = json.data[0].images.downsized.url;
            gifImage.alt = json.data[0].title;
            console.log(gifImage.alt)
            console.log(gifImage.src)
        })
    
}


var firstSprite = document.querySelector(".first-poke")
var secondSprite = document.querySelector(".second-poke")
var thirdSprite = document.querySelector(".third-poke")
var fourthSprite = document.querySelector(".fourth-poke")
var fifthSprite = document.querySelector(".fifth-poke")
var sixthSprite = document.querySelector(".sixth-poke")

function getSprites() {

    // TODO hide quiz

    if (uniquePokemon[0]) {
        var pokemonAPI = "https://pokeapi.co/api/v2/pokemon/" + uniquePokemon[0];
        console.log(pokemonAPI)
        fetch(pokemonAPI)
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                console.log(json)
                firstSprite.src = json.sprites.front_default
                firstSprite.alt = json.name
            })
    }
    if (uniquePokemon[1]) {
        var pokemonAPI = "https://pokeapi.co/api/v2/pokemon/" + uniquePokemon[1];
        console.log(pokemonAPI)
        fetch(pokemonAPI)
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                console.log(json)
                secondSprite.src = json.sprites.front_default
                secondSprite.alt = json.name
            })
    }
    if (uniquePokemon[2]) {
        var pokemonAPI = "https://pokeapi.co/api/v2/pokemon/" + uniquePokemon[2];
        console.log(pokemonAPI)
        fetch(pokemonAPI)
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                console.log(json)
                thirdSprite.src = json.sprites.front_default
                thirdSprite.alt = json.name
            })
    }
    if (uniquePokemon[3]) {
        var pokemonAPI = "https://pokeapi.co/api/v2/pokemon/" + uniquePokemon[3];
        console.log(pokemonAPI)
        fetch(pokemonAPI)
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                console.log(json)
                fourthSprite.src = json.sprites.front_default
                fourthSprite.alt = json.name
            })
    }
    if (uniquePokemon[4]) {
        var pokemonAPI = "https://pokeapi.co/api/v2/pokemon/" + uniquePokemon[4];
        console.log(pokemonAPI)
        fetch(pokemonAPI)
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                console.log(json)
                fifthSprite.src = json.sprites.front_default
                fifthSprite.alt = json.name
            })
    }
    if (uniquePokemon[5]) {
        var pokemonAPI = "https://pokeapi.co/api/v2/pokemon/" + uniquePokemon[5];
        console.log(pokemonAPI)
        fetch(pokemonAPI)
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                console.log(json)
                sixthSprite.src = json.sprites.front_default
                sixthSprite.alt = json.name
            })
    }

}



function pokemonBeach() {
    var randomBeach = Math.floor(Math.random() * abilityBeach.length -1)
    pokemonTeam.push(abilityBeach[randomBeach])

    if ((uniquePokemon.includes(pokemonTeam[pokemonTeam.length-1]))||(pokemonTeam[pokemonTeam.length-1] === undefined)){
        pokemonBeach()
    }
    
    pokemonTeam.forEach((c)=> {
        if(!uniquePokemon.includes(c)) {
            uniquePokemon.push(c)
        }
        console.log(c)
    })

    // pokemonTeam.push(abilityBeach[randomBeach])
    console.log(uniquePokemon)
}
function pokemonCold() {
    var randomCold = Math.floor(Math.random() * abilityCold.length -1)
    pokemonTeam.push(abilityCold[randomCold])

    if ((uniquePokemon.includes(pokemonTeam[pokemonTeam.length-1]))||(pokemonTeam[pokemonTeam.length-1] === undefined)){
        pokemonCold()
    }
    
    pokemonTeam.forEach((c)=> {
        if(!uniquePokemon.includes(c)) {
            uniquePokemon.push(c)
        }
        console.log(c)
    })

    console.log(uniquePokemon)
}

function pokemonTough() {
    var randomTough = Math.floor(Math.random() * abilityTough.length -1)
    pokemonTeam.push(abilityTough[randomTough])
    if ((uniquePokemon.includes(pokemonTeam[pokemonTeam.length-1]))||(pokemonTeam[pokemonTeam.length-1] === undefined)){
        pokemonTough()
    }
    
    pokemonTeam.forEach((c)=> {
        if(!uniquePokemon.includes(c)) {
            uniquePokemon.push(c)
        }
        console.log(c)
    })

    console.log(uniquePokemon)
}
function pokemonFlex() {
    var randomFlex = Math.floor(Math.random() * abilityFlex.length -1)
    pokemonTeam.push(abilityFlex[randomFlex])
  
    if ((uniquePokemon.includes(pokemonTeam[pokemonTeam.length-1]))||(pokemonTeam[pokemonTeam.length-1] === undefined)){
        pokemonFlex()
    }
    
    pokemonTeam.forEach((c)=> {
        if(!uniquePokemon.includes(c)) {
            uniquePokemon.push(c)
        }
        console.log(c)
    })
    console.log(uniquePokemon)
    console.log(pokemonTeam)
}






// fetch from music api
        // fetch music

    // var for array of pokemon team = [151]
    // 4 different pokemon array

    // array 1 = {[beach + tough/soft + warm/cod + action/drama]}
    // example if (user.input === tough) {
        //return 
    // }


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



