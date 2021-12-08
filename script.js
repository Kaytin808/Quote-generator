// Rick and Morty quotes //

    let words = [ 
        {
            quote: "Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV.",
            author: "— Morty"
        },
        {
            quote: "What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time?",
            author:"— Rick"
        },
        {
            quote: "Wubba Lubba dub dub!",
            author: "— Rick",
            id: "Wubba"
        },
        {
            quote: "Sometimes science is more art than science.",
            author:"— Rick"
        },
        {
            quote:"Honey, stop raising your father’s cholesterol so you can take a hot funeral selfie.",
            author:"— Beth"
        },
        {
            quote: "B*tch, my generation gets traumatized for breakfast!",
            author: "— Summer"
        },
        {
            quote: "Having a family doesn’t mean that you stop being an individual. <br>You know the best thing you can do for the people that depend on you? <br>Be honest with them, even if it means setting them free.",
            author: "— Mr. Meeseeks"
        },
        {
            quote: "Life is effort and I’ll stop when I die!",
            author: "— Jerry"
        },
        {
            quote: "There’s a lesson here, and I’m not going to be the one to figure it out.",
            author: "— Rick"
        },
        {
            quote: "Wait a minute! Is that Mountain Dew in my quantum-transport-solution?",
            author:"— Rick"
        },
        {
            quote: "Don’t move. Gonorrhea can’t see us if we don’t move. Wait! I was wrong! I was thinking of a T. rex.",
            author: "— Rick"
        },
        {
            quote: "Boom! Big reveal! I turned myself into a pickle!",
            author: "— Rick",
            id: "Pickle"
        },
        {
            quote: "If I let you make me nervous, then we can’t get schwifty.",
            author: "— Rick"
        },
        {
            quote: "You gotta do it for Grandpa, Morty. You gotta put these seeds inside your butt.",
            author:"— Rick"
        },
        {
            quote:"Thanks, Mr. Poopybutthole. I always could count on you.",
            author: "— Rick"
        },
        {
            quote: "Excuse me. Coming through. What are you here for? Just kidding, I don’t care.",
            author: "— Rick"
        }
    ]

// Randomizes quotes from Rick and Morty into innerHTML //
var button = document.querySelector('.generate')
var rando = function () {
    thing =words[Math.floor(Math.random()* words.length)]
    var pQuote = document.querySelector('.quote')
    var pAuthor = document.querySelector('.author')
    var containerImg = document.querySelector('.container-img')
    var img = document.createElement('img')
    pAuthor.classList.add('author')
    pAuthor.innerHTML = thing['author']
    pQuote.innerHTML = thing['quote']
    var containerImg = document.querySelector('.container-img')
    var img = document.getElementById('myImg')
    if (thing['id'] == "Wubba" && thing['author'] == "— Rick") {
            img.src = '/imgs/wubba.gif'
    } else if (thing['id'] == "Pickle" && thing['author'] == "— Rick") {
        img.src = '/imgs/picklerick.gif'
    } else if (thing['author'] == "— Summer") {
        img.src = '/imgs/summer.png'
    } else if (thing['author'] == "— Mr. Meeseeks") {
        img.src = '/imgs/meeseeks.png'
    } else if (thing['author'] == "— Beth") {
        img.src = '/imgs/Beth_Smith.png'
    } else if (thing['author'] == "— Morty") {
        img.src = '/imgs/Morty_Smith.png'
    } else if (thing['author'] == "— Jerry") {
        img.src = '/imgs/jerry.gif'
    } else if (thing['author'] == "— Rick") {
        img.src = '/imgs/rick.png'
    }
}

button.addEventListener('click', rando);