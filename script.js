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
            img.src = 'http://68.media.tumblr.com/dfe8acf02763a30e76c50be1241c9306/tumblr_owpeei8Awk1uaqtxco1_540.gif'
    } else if (thing['id'] == "Pickle" && thing['author'] == "— Rick") {
        img.src = 'https://media2.giphy.com/media/JmPenP1svctdfDCEHi/giphy.gif'
    } else if (thing['author'] == "— Summer") {
        img.src = 'https://static.miraheze.org/animatedmusclewomenwiki/thumb/3/3f/Rick-and-morty-png-summer-1.png/120px-Rick-and-morty-png-summer-1.png'
    } else if (thing['author'] == "— Mr. Meeseeks") {
        img.src = 'https://upload.wikimedia.org/wikipedia/en/1/1d/Mr._Meeseeks.png'
    } else if (thing['author'] == "— Beth") {
        img.src = 'https://upload.wikimedia.org/wikipedia/en/5/58/Beth_Smith.png'
    } else if (thing['author'] == "— Morty") {
        img.src = 'https://upload.wikimedia.org/wikipedia/en/c/c3/Morty_Smith.png'
    } else if (thing['author'] == "— Jerry") {
        img.src = 'https://media3.giphy.com/media/lOrfnPFFK8uKH1X88S/giphy.gif'
    } else if (thing['author'] == "— Rick") {
        img.src = 'http://assets.stickpng.com/images/58f37709a4fa116215a9240d.png'
    }
}

button.addEventListener('click', rando);