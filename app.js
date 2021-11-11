// Needed

// triviaWell
let modal = document.querySelector('#modal')
let modalQuestion = document.querySelector('#modalQuestion')
let answerMsg = document.querySelector('#check')
let modalAnswer = document.querySelector('#modalAnswer')
let playerScore = 0000
let triviaWell = [
    {
     question: 'Who created Dungeons and Dragons?',
     difficulty: 'medium',
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
        difficulty: 'hard',
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
        difficulty: 'hard',
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
        difficulty: 'easy',
        category: '5e',
        answers: {
            a: 'D&D Next',
            b: '5th Edition',
            c: 'Advanced Dungoens and Dragons',
        },
        correctAnswer: 'b',   
        correctExplain: 'In August of 2014, Wizards of the Coast, the company responsible for Dungeons and Dragons, released Dungeons and Dragons, 5th Edition, after two years of testing. Advanced Dungeons and Dragons released in 1977, and D&d Next was the working title for 5e while it was in production.'
    },
    
]

console.log(triviaWell);

//Eventhandlers

function handleClickEvent() {
    console.log('I am handleClickEvent')
    modal.style.display = 'block'
    document.querySelector('#submitBtn').style.display = 'block'
    wellChecker()
    console.log(triviaWell)
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

// Fire animation effects. Fire should do SOMETHING when clicked, and when mouseovered
document.querySelector('#fire').addEventListener('click', () => {
    console.log('You clicked the fire')
})
document.querySelector('#fire').addEventListener('mouseover', () => {
    console.log('You hovered the fire')
})

// answerCheck() checks the form input against triviaWell[0].correctAnswer

function answerCheck() {
    if (triviaWell[0].correctAnswer == document.querySelector('input[name="answerBtn"]:checked').value) {
    answerMsg.style.color = 'green'
    answerMsg.innerText = 'You\'re Correct!'
    playerScore++
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

// The fire! Onhover, the button and fireimg should animate, flaring slightly more, glowing??