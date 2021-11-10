// Needed

// triviaWell
let modal = document.querySelector('#modal')
let modalQuestion = document.querySelector('#modalQuestion')
let modalList = document.querySelector('#modalList')
let modalAnswer = document.querySelector('#modalAnswer')
let triviaWell = [
    {
     question: 'Who created Dungeons and Dragons?',
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
        answers: {
            a: 'Write in Competition',
            b: 'Popular Book Series Adaptation',
            c: 'Original Work by Gary Gygax'
        },
        correctAnswer: 'a',   
        correctExplain: 'In 2002, Wizards of the Coast set a write in competition called "Fantasy Setting Search", a fan submission from designer Keith Baker won in 2004, and the concept eventually became Eberron.'
    },
    
]

console.log(triviaWell);

//Eventhandlers

function handleClickEvent() {
    console.log('I am handleClickEvent')
    modal.style.display = 'block'
    wellChecker()
    console.log(triviaWell)
    generateTrivia()

}

function handleCloseEvent() {
    console.log('I am handleCloseEvent')
    triviaWell.shift()
    modal.style.display = 'none'
    document.querySelector('#closeBtn').style.display = 'none'
    modalAnswer.innerText = ''
}

function handleSubmitEvent() {
console.log('Submitted!')
answerCheck()
modalAnswer.innerText = (triviaWell[0].correctExplain)
// The submit event should display the Close button
document.querySelector('#closeBtn').style.display = 'block'
}

// answerCheck() checks the form input against triviaWell[0].correctAnswer

function answerCheck() {
    if (triviaWell[0].correctAnswer == document.querySelector('input[name="answerBtn"]:checked').value) {
    console.log('You\'re correct')
    console.log(document.querySelector('input[name="answerBtn"]:checked').value)
    } else {
    console.log('You are wrong')
    console.log(document.querySelector('input[name="answerBtn"]:checked').value)
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