//Arrays of questions,options and correct answers
const questArray = [
    {
        question: '1) What is your name?',
        a: 'Bunmi',
        b: 'Adebisi',
        c: 'Ayomiposi',
        d: 'Adeola',
        correct_answer: 'Ayomiposi'
    },
    {
        question: '2) Where do you stay?',
        a: 'Ikeja',
        b: 'Ketu',
        c: 'Magodo',
        d: 'Lekki',
        correct_answer: 'Magodo'
    },
    {
        question: '3) What is your fav Color?',
        a: 'Pink',
        b: 'Black',
        c: 'White',
        d: 'Yellow',
        correct_answer: 'Black'
    },
    {
        question: '4) What is the name of your university?',
        a: 'Unilag',
        b: 'Uniben',
        c: 'Unilorin',
        d: 'Futa',
        correct_answer: 'Unilag'
    },
    {
        question: '5) What is your Fav food?',
        a: 'Eba',
        b: 'Semo',
        c: 'Spagi',
        d: 'Rice',
        correct_answer: 'Rice'
    },
]
// declaration of VarIble
const questionContainer =document.getElementById('questionContainer');
const optionContainer =document.getElementById('optionContainer');
const next =document.getElementById('next');
const submit = document.getElementById('submit');
const myScore = document. getElementById('myScore');
const prin = document.getElementById('prin');


//hide buttons

submit.style.display = 'none'
prin.style.display ='none'



//initial the  variable myquiz to zero
let myQuiz = 0;

//initialize the score
let score = 0

//create a fuction that will populate  the questions and on the screen

function loadQuiz(){

    //Display questions
        let myQuest = questArray [myQuiz]
        let myQuestion = myQuest.question
        questionContainer.textContent= myQuestion

    //Display options
    let options =`
        <input type ='radio' name ='option' value ='${myQuest.a}'/> ${myQuest.a} <br/></br>
        <input type ='radio' name ='option' value ='${myQuest.b}'/> ${myQuest.b} <br/></br>
        <input type ='radio' name ='option' value ='${myQuest.c}'/> ${myQuest.c} <br/></br>
        <input type ='radio' name ='option' value ='${myQuest.d}'/> ${myQuest.d} <br/></br>
    `

    optionContainer.innerHTML = options


}
loadQuiz()

//Add event to button
next. addEventListener('click',validateNext)
//prin. addEventListener('click',toPrint)

// create a function
function validateNext(){
        let radioCheck = document.querySelector('input[type = radio]:checked')
      // if statement to check if a user checked or not
        if(!radioCheck){
            alert('please select an option')
        }
        else{

        if(myQuiz === questArray.length - 1){
            submit.style.display ='block'
            next.style.display = 'none'
        }
        //Check answer
        if(radioCheck.value === questArray[myQuiz].correct_answer){
            score += 10
            alert(`You score ${score}`)
        }


        //Go to the next question
            myQuiz++
            loadQuiz()
    }
}

//Add an event listener to the sumbit
submit.addEventListener('click',submitFunction)

//create function
function submitFunction(){
    questionContainer.style.display = 'none'
    optionContainer.style.display = 'none'
    submit.style.display ='none'
    next.style.display = 'none'
    prin.style.display ="block"
    myScore.innerHTML = `Your score is ${score} / ${questArray.length *10}`
}

