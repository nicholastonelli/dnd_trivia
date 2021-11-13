// Needed



// triviaWell
let modal = document.querySelector('#modal')
let modalQuestion = document.querySelector('#modalQuestion')
let answerMsg = document.querySelector('#check')
let modalAnswer = document.querySelector('#modalAnswer')
let playerScore = 0000
let triviaWell = ''
let triviaDeck = [
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

triviaWell = triviaDeck


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
}

function handleSubmitEvent() {
console.log('Submitted!')
answerCheck()
modalAnswer.innerText = (triviaWell[0].correctExplain)
document.querySelector('#closeBtn').style.display = 'block'
document.querySelector('#submitBtn').style.display = 'none'
}

// answerCheck() checks the form input against triviaWell[0].correctAnswer

function answerCheck() {
    if (triviaWell[0].correctAnswer == document.querySelector('input[name="answerBtn"]:checked').value) {
    answerMsg.style.color = 'chartreuse'
    answerMsg.innerText = 'You\'re Correct!'
    playerScore+=triviaWell[0].difficulty.reward
    document.querySelector('#score').innerText = (`000${playerScore}`)
    console.log(playerScore)
    console.log(document.querySelector('input[name="answerBtn"]:checked').value)
    } else {
    answerMsg.style.color = 'red'
    answerMsg.innerText = 'That\'s not quite right.'
    console.log('You are wrong')
    }
}

function generateTrivia() {
// this function fills the modal with the neccesary question, form, and etc..
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

shuffleTrivia(triviaWell)
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

// triviaRandomizer() reaaranged the array of tiviaWell so questions don't stay in the same order, goes in gameStart/Reset

//gameStart/gameReset

// FUN STUFF

// The scroll

// The fire! Onhover, the button and fireimg should change opacity to simulate a flicker

// Fire animation effects. Fire should do SOMETHING when clicked, and when mouseovered
document.querySelector('#fire').addEventListener('click', () => {
    console.log('You clicked the fire')
    document.querySelector('#fire').style.opacity = '100%'
})

document.querySelector('#fire').addEventListener('mouseover', () => {
    console.log('You hovered the fire')
    // document.querySelector('#fire').style.opacity = '100%'
    document.querySelector('#fire').style.opacity = String(Math.floor(Math.random()*100)) + '%'
    let fireHover = setInterval(function() {
         let rando = (Math.floor((Math.random()*100) + 40))
         document.querySelector('#fire').style.opacity = String(rando) + '%'
         // This h1 will be replaced by the background image, to get it to flicker consistantly along with the fire.
        document.querySelector('h1').style.opacity = String(rando+10) + '%'
        }, 300)
}) 

document.querySelector('#fire').addEventListener('mouseleave', () => {
    console.log('You left the fire')
    document.querySelector('#fire').style.opacity = '50%' 
})
