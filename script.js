const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice"));
const scoreText = document.getElementById("score");
let currentQuestion = {};
let accept = false;
let score=0;
let questioncounter=0;
let avq =[];
let questions = [
    {
        question:"what is the full form of html?",
        choice1:"<hyper text markup language>",
        choice2:"<hyper text markup>",
        choice3:"<hyper markup>",
        choice4:"<text markup>",
        answer:1
    },
    {
        question:"what is the full form of html?",
        choice1:"<hyper text>",
        choice2:"<hyper text markup>",
        choice3:"<hyper markup>",
        choice4:"<hyper text markup language>",
        answer:3
    },
    {
        question:"what is the full form of html?",
        choice1:"<hyper>",
        choice2:"<hyper text markup>",
        choice3:"<hyper markup>",
        choice4:"<hyper text markup language>",
        answer:4
    },
    {
        question:"what is the full form of html?",
        choice1:"<hyper text markup>",
        choice2:"<hyper text markup  language>",
        choice3:"<hyper markup>",
        choice4:"<text markup>",
        answer:2
    }
];

const correct_ans =10;
const max_question =questions.length; 

startGame=()=> {
    questioncounter=0;
    score=0;
    avq = [...questions];
    getNewQuestion();
};

getNewQuestion=()=>{
    questioncounter++;
    const questionIndex = Math.floor(Math.random()*avq.length);
    currentQuestion = avq[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach(choice=> {
        const number = choice.dataset["number"];
        choice.innerText= currentQuestion["choice"+number];
    } )
    avq.splice(questionIndex,1);/*splice function can delete from list*/
    accept=true;
};

choices.forEach(choice=>{
    choice.addEventListener("click",e=>{
        if(!accept) 
            return;
        accept=true;
        const selectChoice=e.target;
        const selectedAnswer = selectChoice.dataset["number"];

        const answerCheck = selectedAnswer==currentQuestion.answer?"correct":"incorrect";

        if(answerCheck=="correct") {
            incrementScore(correct_ans);
        }
        selectChoice.parentElement.classList.add(answerCheck);
        
        setTimeout(()=>{
            selectChoice.parentElement.classList.remove(answerCheck);
            getNewQuestion();
        },2000)
    });
});

incrementScore=num=>{
    score+=num;
    scoreText.innerText=score;
};
startGame();


