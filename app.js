// Needed



// triviaWell
let modal = document.querySelector('#modal')
let modalQuestion = document.querySelector('#modalQuestion')
let answerMsg = document.querySelector('#check')
let modalAnswer = document.querySelector('#modalAnswer')
let playerLevel = 1
let playerScore = 0000
let xpChart = [300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
let triviaWell = ''
let triviaDeck = [
   
    {
        question: 'What is a Bulette often called?',
        difficulty: {
            level: 'medium',
            reward: 100
        },
        category: 'monster',
        answers: {
            a: 'Tunnel Snake',
            b: 'Land Shark',
            c: 'Burrow Beast'
        },
        correctAnswer: 'b',   
        correctExplain: 'The bulette also known as a landshark, was a fearsome magical beast whose origins were unknown but had become a dangerous predator.Feared and hated by most living creatures, bulettes were extremely dangerous, burrowing unseen beneath the soil before erupting up at an unexpected moment to seize their prey. Dwarves called the bulette a ghohlbrorn.'
       },    
       {
        question: 'In the land of Halruaa, which of these monsters are bred as pets?',
        difficulty: {
            level: 'very hard',
            reward: 1000
        },
        category: 'forgotten realms',
        answers: {
            a: 'Minature Dragon',
            b: 'Minature Giant Space Hamster',
            c: 'Miniature Behir'
        },
        correctAnswer: 'c',   
        correctExplain: 'Halruaan behirs were a miniature species native to Halruaa, where they were bred as pets or guardians.'
       },
    {
        question: 'You walk into a long dark hall, filled with incredibly realistic stone statues of terrified adventurers. What of these three monsters do you prepared to fight?',
        difficulty: {
            level: 'very hard',
            reward: 1000
        },
        category: 'monster',
        answers: {
            a: 'Basilisk',
            b: 'Tarasque',
            c: 'Frost Troll'
        },
        correctAnswer: 'a',   
        correctExplain: 'Basilisks are the only monster of the three with the ability to Petrify it\'s opponents, turning it\'s foes to stone.'
       },
    {
        question: 'How are Beholders said to be born?',
        difficulty: {
            level: 'hard',
            reward: 500
        },
        category: 'monster',
        answers: {
            a: 'Born out of Dreams',
            b: 'Born from Illithid experiments',
            c: 'Born from strange gods'
        },
        correctAnswer: 'a',   
        correctExplain: 'Beholders don’t truly sleep when they rest. Instead, a beholder’s mind remains semiconscious even as it dreams. As a result, on rare occasions when a beholder dreams of another beholder, the dream-reality becomes warped and takes on physical form, becoming another actual beholder. To call this process reproduction would be inaccurate, because in most cases the old and new beholders fight to the death—a fact for which the rest of the world is thankful.'
       },
    {
        question: 'Banshee are Irish folk monsters whose wail foretells death. What does their name mean?',
        difficulty: {
            level: 'hard',
            reward: 500
        },
        category: 'monster',
        answers: {
            a: 'Evil Woman',
            b: 'Fairy woman',
            c: 'Dark Fairy'
        },
        correctAnswer: 'b',   
        correctExplain: 'A banshee (/ˈbænʃiː/ BAN-shee; Modern Irish bean sí, from Old Irish: ben síde [bʲen ˈʃiːðʲe], "woman of the fairy mound" or "fairy woman") is a female spirit in Irish folklore who heralds the death of a family member.'
       },
    {
        question: 'In Dungeons and Dragons 3.5, Angels are have this particular alignment restriciton.',
        difficulty: {
            level: 'hard',
            reward: 500
        },
        category: 'monster',
        answers: {
            a: 'Always Lawful, often Good',
            b: 'Always Good, often Lawful',
            c: 'Always Chaotic, often Good'
        },
        correctAnswer: 'b',   
        correctExplain: 'Angels in D&D are always Good aligned creatures, but are not always Lawful aligned.'
       },
    {
        question: 'What is an Aboleth?',
        difficulty: {
            level: 'medium',
            reward: 100
        },
        category: 'monster',
        answers: {
            a: 'A shapeshifting treasure chest',
            b: 'A magic cave giant',
            c: 'A psychic water horror'
        },
        correctAnswer: 'c',   
        correctExplain: 'Aboleths (pronounced: /ˈæboʊlɛθ/ ÆB-o-leth  were a race of malevolent, eel-like aberrations with potent psionic abilities.'
       },
    {
        question: 'What is an Aarakocra?',
        difficulty: {
            level: 'medium',
            reward: 100
        },
        category: 'monster',
        answers: {
            a: 'A bird person',
            b: 'A snake person',
            c: 'A tiger person'
        },
        correctAnswer: 'a',   
        correctExplain: 'Aarakocra (pronounced: /ærɑːˈkoʊkrɑː/ æ-ra-KO-kra  or: /ɑːrɑːˈkoʊkrɑː/ a-rah-KO-krah; also called bird-men,were a race of avian humanoids.'
       },
    {
        question: 'What is a Spelljammer?',
        difficulty: {
            level: 'hard',
            reward: 500
        },
        category: 'system',
        answers: {
            a: 'A counterspell item',
            b: 'An anti magic field',
            c: 'A sailing spaceship'
        },
        correctAnswer: 'c',   
        correctExplain: 'A spelljammer was a type of magically powered vessel that could travel great distances, even into space. Each ship had a magical helm or "captains-chair" that allowed a suitably powerful mage to pilot the ship. Some spelljammers were also capable of traveling to other planes of existence.'
       },
    {
        question: 'What character mechanic was first introduced in the "Birthright" Campaign Setting?',
        difficulty: {
            level: 'hard',
            reward: 500
        },
        category: 'system',
        answers: {
            a: 'Feats',
            b: 'Experience Points',
            c: 'Leveling Up'
        },
        correctAnswer: 'a',   
        correctExplain: 'D&D 3rd Edition was the first to implement feats as they are named, taken from a mechanic called Bloodlines.'
       },
    {
        question: 'According to it\'s lore, how was the setting wolrd of Eberron created?',
        difficulty: {
            level: 'hard',
            reward: 500
        },
        category: 'eberron',
        answers: {
            a: 'Ancient Gods made it',
            b: 'Two moons colided',
            c: 'It was born from Three Dragons'
        },
        correctAnswer: 'c',   
        correctExplain: 'The legend of the origin of the world of Eberron states that  three great dragons created the planar system and created (or discovered) the Draconic Prophecy. The Progenitors are often described as being siblings, and the world itself is made from their remains.'
       },
    {
        question: 'Which plane of existence is only canon in Eberron?',
        difficulty: {
            level: 'hard',
            reward: 500
        },
        category: 'eberron',
        answers: {
            a: 'The Plane of Dreams',
            b: 'The demiplane of Dread',
            c: 'The Planar Orrery'
        },
        correctAnswer: 'a',   
        correctExplain: 'Dal Quor, the Region of Dreams, is a plane that mortals visit when they dream. The plane is the home of the Quori, psychic symbionts with intentions to conquer Eberron.'
       },
    {
        question: 'What is the name of the largest City in Eberron?',
        difficulty: {
            level: 'medium',
            reward: 100
        },
        category: 'eberron',
        answers: {
            a: 'Solamnia',
            b: 'Sharn, City of Towers',
            c: 'Waterdeep, City of Splendors'
        },
        correctAnswer: 'b',   
        correctExplain: 'Sharn is the most populous city in all of Eberron. The city literally towers atop a cliff above the mouth of the Dagger River in southern Breland. Sharn is known as the City of Towers, but has also been called many other names, including the City of Knives, the City of Lost Souls, the City of a Thousand Eyes, the Gateway to Xen\'drik, and the Gateway to Perdition.'
       },
    {
        question: 'What three player races appeard first in Eberron?',
        difficulty: {
            level: 'medium',
            reward: 100
        },
        category: 'eberron',
        answers: {
            a: 'Gnomes, Warforged, and Tieflings',
            b: 'Warforged, Shifters, and Kalashtar',
            c: 'Weresharks, Kozakuran, and Merfolk'
        },
        correctAnswer: 'b',   
        correctExplain: 'Warforged are robotic soldiers built for Eberron\'s last Great War. Shifters are humanoid\'s with Lycanthrope ancestry. Kalashtar are a race of monks whose souls have joined with otherplanar creatures. All three made their Dungeons and Dragons debut in Eberron\'s first Campaign setting book.'
       },
    {
        question: 'In Eberron, what is a Dragonmark?',
        difficulty: {
            level: 'medium',
            reward: 100
        },
        category: 'eberron',
        answers: {
            a: 'A magical birthmark',
            b: 'The brand of a dragon',
            c: 'A secret hand signal'
        },
        correctAnswer: 'a',   
        correctExplain: 'In the Setting of Eberron, Dragonmarks are physical manifestations of a Draconic Prophecy. They have appeared on seven of Khorvaire\'s common races, and manifest typically around puberty.'
       },
    {
        question: 'What is the prefferred mounts of halflings in the Eberron setting?',
        difficulty: {
            level: 'hard',
            reward: 500
        },
        category: 'eberron',
        answers: {
            a: 'Ponies',
            b: 'Large Dogs',
            c: 'Dinosaurs'
        },
        correctAnswer: 'c',   
        correctExplain: 'In the Setting of Eberron, The halflings of the Talenta Plains have formed spiritual bonds with the small dinosaurs thatroam the area, and use them as mounts.'
       },
    {
        question: 'What are Lycanthropes (Werewolves and the like) vulnerable to?',
        difficulty: {
            level: 'medium',
            reward: 100
        },
        category: 'monster',
        answers: {
            a: 'Moonlight',
            b: 'Sunlight Spells',
            c: 'Silver weapons'
        },
        correctAnswer: 'c',   
        correctExplain: 'Lycanthropes of all kinds are vulnerable to Silvered weapons, stemming back to a medieval belief that silver was a pure substance. This folklore is a recent addition to Werewolf lore, and only dates back to the early 20th century'
       },
    {
        question: 'Why do Vampires have no reflection in a Mirror?',
        difficulty: {
            level: 'medium',
            reward: 100
        },
        category: 'monster',
        answers: {
            a: 'A weakness to Silver',
            b: 'Vampires are undead creatures, and have no soul',
            c: 'Vampires don\'t block light'
        },
        correctAnswer: 'a',   
        correctExplain: 'Mythologically Silver has been considered a pure and holy substance. Mirrors made from sheets of thin silver have been made as early as 500ce, and became common knowledge. However, after the Renaissance most European mirrors were backed by refelctive Tin instead of Silver.'
       },
    {
        question: 'What are the five standard colors of Chromatic Dragons?',
        difficulty: {
            level: 'medium',
            reward: 100
        },
        category: 'monster',
        answers: {
            a: 'Red, Blue, Yellow, Black, and White',
            b: 'Gold, Silver, Copper, Bronze, and Brass',
            c: 'Red, Blue, Green, Black, and White'
        },
        correctAnswer: 'c',   
        correctExplain: 'Red, Blue, Green, Black, and White are the standard colors for Chromatic Dragons, which are typically evil creatures. Gold, Silver, Copper, Bronze, and Brass dragons are their metallic counterparts, and are typically benign or even helpful.'
       },
    {
     question: 'What is the most Challenging monster of these three in 5th edition?',
     difficulty: {
         level: 'medium',
         reward: 100
     },
     category: 'monster',
     answers: {
         a: 'Lamia',
         b: 'Gorgon',
         c: 'Chimera'
     },
     correctAnswer: 'c',   
     correctExplain: 'Chimera are three headed Greek inspired monstrosities with a Challenge Rating of 6, higher that the 5 of a Gorgon and the 4 of a Lamia.'
    },
    {
        question: 'How was the Eberron campaign setting created?',
        difficulty: {
            level: 'hard',
            reward: 500
        },
        category: 'eberron',
        answers: {
            a: 'Write in Competition',
            b: 'Popular Book Series Adaptation',
            c: 'Original Work by Gary Gygax'
        },
        correctAnswer: 'a',   
        correctExplain: 'In 2002, Wizards of the Coast set a write in competition called "Fantasy Setting Search", a fan submission from designer Keith Baker won in 2004, and the concept eventually became Eberron.'
    },
    {
        question: 'What is the famously complicated name of the Dark Elf city in Faerun?',
        difficulty: {
            level: 'hard',
            reward: 500
        },
        category: 'faerun',
        answers: {
            a: 'Menzoberranzan',
            b: 'It cannot be spoken in common tongues.',
            c: 'Dol\'gur\'landan',
        },
        correctAnswer: 'a',   
        correctExplain: 'Menzoberranzan (pronounced: /ˈmɛnzoʊbəˈrɑːnzɑːn/ MEN-zoh-buh-RAN-zan), is a city in the Forgotten Realms, made popular by bestselling books by R.A. Salvatore.'
    },
    {
        question: 'What is the current Edition of D&D?',
        difficulty:{
            level: 'easy',
            reward: 25
        },
        category: '5e',
        answers: {
            a: 'D&D Next',
            b: '5th Edition',
            c: 'Advanced Dungoens and Dragons',
        },
        correctAnswer: 'b',   
        correctExplain: 'In August of 2014, Wizards of the Coast, the company responsible for Dungeons and Dragons, released Dungeons and Dragons, 5th Edition, after two years of testing. Advanced Dungeons and Dragons released in 1977, and D&d Next was the working title for 5e while it was in production.'
    },
     {
     question: 'Who created Dungeons and Dragons?',
     difficulty: {
         level: 'medium',
         reward: 100
     },
     category: 'system',
     answers: {
         a: 'Tracy Hickman',
         b: 'Gary Gygax',
         c: 'Wizards of the Coast'
     },
     correctAnswer: 'b',   
     correctExplain: 'In 1974, avid wargamer Gary Gygax and firends created and played the first game of Dungeons and Dragons, an expansion on his previous "Chainmail" wargame. Three volumes of rules were published that year, with only 1,000 copies originally printed.'
    },
    
]



document.querySelector('#qCount').innerText = `There are currently ${triviaDeck.length} questions in this game.`

//Eventhandlers

function handleClickEvent() {
    modal.style.display = 'block'
    document.querySelector('#submitBtn').style.display = 'block'
    wellChecker()
    generateTrivia()
}

function handleCloseEvent() {
    console.log('I am handleCloseEvent')
    triviaWell.shift()
    modal.style.display = 'none'
    document.querySelector('#closeBtn').style.display = 'none'
    answerMsg.innerText = ''
    modalAnswer.innerText = ''
    levelChecker()
    cardDeck()
}

function handleSubmitEvent() {
    answerCheck()
    modalAnswer.innerText = (triviaWell[0].correctExplain)
    document.querySelector('#closeBtn').style.display = 'block'
    document.querySelector('#submitBtn').style.display = 'none'
}

// categoryFilter() filters out items by category before the shuffle

// cardDeck() checks the % of questions remaining and changes the deck1 and deck2 images, increasing the deck1 and decreasing the deck2

function cardDeck() {
    if (triviaWell.length <= (triviaDeck.length/4)) {
        document.querySelector('#deck1').innerHTML = "<img src='images/cards.png' alt='first deck'  class='decks'  id='deckImg1'></img>"
        document.querySelector('#deck2').innerHTML = "<img src='images/cards.png' alt='second deck'  class='decks'  id='deckImg2'></img>"
    } else if (triviaWell.length <= (triviaDeck.length/2)) {
        document.querySelector('#deck1').innerHTML = "<img src='images/cards.png' alt='first deck'  class='decks'  id='deckImg1'></img>"
        document.querySelector('#deck2').innerHTML = "<img src='images/cards.png' alt='second deck'  class='decks'  id='deckImg2'></img>"
    } else if (triviaWell.length <= (triviaDeck.length/1.25)) {
        document.querySelector('#deck1').innerHTML = "<img src='images/cards.png' alt='first deck'  class='decks'  id='deckImg1'></img>"
document.querySelector('#deck2').innerHTML = "<img src='images/cards.png' alt='second deck'  class='decks'  id='deckImg2'></img>"
    }
}


// answerCheck() checks the form input against triviaWell[0].correctAnswer

function answerCheck() {
    if (triviaWell[0].correctAnswer == document.querySelector('input[name="answerBtn"]:checked').value) {
    answerMsg.style.color = 'chartreuse'
    answerMsg.innerText = 'You\'re Correct!'
    playerScore+= Math.floor((triviaWell[0].difficulty.reward * (1 + (playerLevel/10))))
    console.log(Math.floor((triviaWell[0].difficulty.reward * (1 + (playerLevel/10)))) )
    document.querySelector('#score').innerText = (`000${playerScore}`)
    } else {
    answerMsg.style.color = 'red'
    answerMsg.innerText = 'That\'s not quite right.'
    }
}

function generateTrivia() {
    modalQuestion.innerText = triviaWell[0].question
    document.querySelector('#a').innerText = triviaWell[0].answers.a
    document.querySelector('#b').innerText = triviaWell[0].answers.b
    document.querySelector('#c').innerText = triviaWell[0].answers.c
}

// Shuffle Trivia take the TriviaWell and randomizes array positions

function shuffleTrivia(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function handleStartEvent() {
    document.querySelector('#openingModal').style.display = 'none'
    playerLevel = 1
    document.querySelector('#level').innerText = (`0${playerLevel}`)
    playerScore = 0
    document.querySelector('#score').innerText = (`000${playerScore}`)
    triviaWell = triviaDeck
    shuffleTrivia(triviaWell)
    
}

//levelChecker() meaasures the player score against the next level array, and increases their level if 

function levelChecker() {
    if (playerScore >= xpChart[0]) {
        playerLevel+=1
        xpChart.shift()
        document.querySelector('#level').innerText = (`0${playerLevel}`)
    }
}

// newQuestion() brings up a modal menu popluated by the trivia well

document.querySelector('#newQBtn').addEventListener('click', handleClickEvent)

// submitAnswer() checks player submission agaisnt answer and displays correct/incorrect (logs score), and displays closeModal button

document.querySelector('#submitBtn').addEventListener('click', handleSubmitEvent)

// closeModal() closes the modal screen so the player get get a new question

document.querySelector('#closeBtn').addEventListener('click', handleCloseEvent)

// wellChecker() checks to see if the triviaWell is empty, and if it is then it prints 'Youre out of Questions!"

function wellChecker() {
    if (triviaWell.length <= 0) {
        modalQuestion.innerText = 'That\'s all folks, check back for more later!'
        document.querySelector('#a').innerText = ''
        document.querySelector('#b').innerText = ''
        document.querySelector('#c').innerText = ''
    }
}


//gameStart/gameReset

document.querySelector('#closeOpenerBtn').addEventListener('click', handleStartEvent)

// FUN STUFF

// The scroll

// The fire! Onhover, the button and fireimg should change opacity to simulate a flicker

// Fire animation effects. Fire should do SOMETHING when clicked, and when mouseovered
document.querySelector('#fire').addEventListener('click', () => {
    document.querySelector('#fire').style.opacity = '100%'
    document.querySelector('#ampersand').style.opacity = '100%'
})

document.querySelector('#fire').addEventListener('mouseover', () => {
    let randoNum = Math.floor(Math.random()*100)
    console.log(randoNum)
    document.querySelector('#fire').style.opacity = `${randoNum}%`
    document.querySelector('#ampersand').style.opacity = `${randoNum}%`
    
}) 

document.querySelector('#fire').addEventListener('mouseleave', () => {
    document.querySelector('#fire').style.opacity = '50%' 
    document.querySelector('#ampersand').style.opacity = '75%'
})
