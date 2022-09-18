// Question info stored into an object
const questionInfo = [
    { question: "Commonly used data types DO NOT include:",
    answers: [
        {text: "Strings", correct: false},
        {text: "Booleans", correct: false},
        {text: "Alerts", correct: true},
        {text: "Numbers", correct: false}
    ]},
    { question: "The condition of an if/else statement is enclosed with _____.",
    answers: [
        {text: "Quotes", correct: false},
        {text: "Curly Brackets", correct: false},
        {text: "Parenthesis", correct: true},
        {text: "Square Brackets", correct: false}
    ]},
    { question: "Arrays in JavaScript can be used to store _____.",
    answers: [
        {text: "Numbers & Strings", correct: false},
        {text: "Other Arrays", correct: false},
        {text: "Booleans", correct: false},
        {text: "All Of The Above", correct: true}
    ]},
    { question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: [
        {text: "Commas", correct: false},
        {text: "Curly Brackets", correct: false},
        {text: "Quotes", correct: true},
        {text: "Parenthesis", correct: false}
    ]},
    { question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
        {text: "JavaScript", correct: false},
        {text: "Bash", correct: false},
        {text: "For Loops", correct: false},
        {text: "console.log", correct: true}
    ]},

]

// Countdown variables
const countdownEl = document.getElementById("countdown");
const startingSeconds = 1.25;
let time = startingSeconds * 60;
 
// Coundown logic
let updateCountdown = () => {
    countdownEl.innerHTML = `Time: ${time}`;
    time--;
    if (time == 0 || time <= 0){
            clearInterval(timer);
            countdownEl.innerHTML = "GAME OVER";
            gameOver();
    }
}

let timer = setInterval(updateCountdown, 1000);

let round1 = () => {
    console.log("Round 1");

    // Variables for html
    let question = document.getElementById("question");
    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2");
    let answer3 = document.getElementById("answer3");
    let answer4 = document.getElementById("answer4");
    let feedback = document.getElementById("feedback");

    // Question & answer data
    let questionData = questionInfo[0].question;
    let answer1Data = questionInfo[0].answers[0].text;
    let answer2Data = questionInfo[0].answers[1].text;
    let answer3Data = questionInfo[0].answers[2].text;
    let answer4Data = questionInfo[0].answers[3].text;

    // Solution data
    let answer1Sol = questionInfo[0].answers[0].correct;
    let answer2Sol =  questionInfo[0].answers[1].correct;
    let answer3Sol =  questionInfo[0].answers[2].correct;
    let answer4Sol =  questionInfo[0].answers[3].correct;

    // Display data from object for question 1
    question.innerHTML = questionData;
    answer1.innerHTML = answer1Data;
    answer2.innerHTML = answer2Data;
    answer3.innerHTML = answer3Data;
    answer4.innerHTML = answer4Data;

    // Add event listeners to start answer verification
    answer1.addEventListener("click", e => {
        if(answer1Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            round2();
        }
    });
    answer2.addEventListener("click", e => {
        if(answer2Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            round2();
        }
    });
    answer3.addEventListener("click", e => {
        if(answer3Sol === true){
            feedback.innerHTML = "Correct!";
            round2();
        }
    });
    answer4.addEventListener("click", e => {
        if(answer4Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            round2();
        }
    });
}

let round2 = () => {
    console.log("Round 2");
    
    // Variables for html
    let question = document.getElementById("question");
    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2");
    let answer3 = document.getElementById("answer3");
    let answer4 = document.getElementById("answer4");
    let feedback = document.getElementById("feedback")

    // Question & answer data
    let questionData = questionInfo[1].question;
    let answer1Data = questionInfo[1].answers[0].text;
    let answer2Data = questionInfo[1].answers[1].text;
    let answer3Data = questionInfo[1].answers[2].text;
    let answer4Data = questionInfo[1].answers[3].text;

    // Solution data
    let answer1Sol = questionInfo[1].answers[0].correct;
    let answer2Sol =  questionInfo[1].answers[1].correct;
    let answer3Sol =  questionInfo[1].answers[2].correct;
    let answer4Sol =  questionInfo[1].answers[3].correct;

    // Display data from object for question 1
    question.innerHTML = questionData;
    answer1.innerHTML = answer1Data;
    answer2.innerHTML = answer2Data;
    answer3.innerHTML = answer3Data;
    answer4.innerHTML = answer4Data;

    // Add event listeners to start answer verification
    answer1.addEventListener("click", e => {
        if(answer1Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            round3();
        }
    });
    answer2.addEventListener("click", e => {
        if(answer2Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            round3();
        }
    });
    answer3.addEventListener("click", e => {
        if(answer3Sol === true){
            feedback.innerHTML = "Correct!";
            round3();
        }
    });
    answer4.addEventListener("click", e => {
        if(answer4Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            round3();
        }
    });
}

let round3 =  () => {
    console.log("Round 3");

    // Variables for html
    let question = document.getElementById("question");
    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2");
    let answer3 = document.getElementById("answer3");
    let answer4 = document.getElementById("answer4");
    let feedback = document.getElementById("feedback")

    // Question & answer data
    let questionData = questionInfo[2].question;
    let answer1Data = questionInfo[2].answers[0].text;
    let answer2Data = questionInfo[2].answers[1].text;
    let answer3Data = questionInfo[2].answers[2].text;
    let answer4Data = questionInfo[2].answers[3].text;

    // Solution data
    let answer1Sol = questionInfo[2].answers[0].correct;
    let answer2Sol =  questionInfo[2].answers[1].correct;
    let answer3Sol =  questionInfo[2].answers[2].correct;
    let answer4Sol =  questionInfo[2].answers[3].correct;

    // Display data from object for question 1
    question.innerHTML = questionData;
    answer1.innerHTML = answer1Data;
    answer2.innerHTML = answer2Data;
    answer3.innerHTML = answer3Data;
    answer4.innerHTML = answer4Data;

    // Add event listeners to start answer verification
    answer1.addEventListener("click", e => {
        if(answer1Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            round4();
        }
    });
    answer2.addEventListener("click", e => {
        if(answer2Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            round4();
        }
    });
    answer3.addEventListener("click", e => {
        if(answer3Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            round4();
        }
    });
    answer4.addEventListener("click", e => {
        if(answer4Sol === true){
            feedback.innerHTML = "Correct!";
            round4();
        }
    });
}

let round4 = () => {
    console.log("Round 4");

    // Variables for html
    let question = document.getElementById("question");
    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2");
    let answer3 = document.getElementById("answer3");
    let answer4 = document.getElementById("answer4");
    let feedback = document.getElementById("feedback")

    // Question & answer data
    let questionData = questionInfo[3].question;
    let answer1Data = questionInfo[3].answers[0].text;
    let answer2Data = questionInfo[3].answers[1].text;
    let answer3Data = questionInfo[3].answers[2].text;
    let answer4Data = questionInfo[3].answers[3].text;

    // Solution data
    let answer1Sol = questionInfo[3].answers[0].correct;
    let answer2Sol =  questionInfo[3].answers[1].correct;
    let answer3Sol =  questionInfo[3].answers[2].correct;
    let answer4Sol =  questionInfo[3].answers[3].correct;

    // Display data from object for question 1
    question.innerHTML = questionData;
    answer1.innerHTML = answer1Data;
    answer2.innerHTML = answer2Data;
    answer3.innerHTML = answer3Data;
    answer4.innerHTML = answer4Data;

    // Add event listeners to start answer verification
    answer1.addEventListener("click", e => {
        if(answer1Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            round5();

        }
    });
    answer2.addEventListener("click", e => {
        if(answer2Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            round5();
        }
    });
    answer3.addEventListener("click", e => {
        if(answer3Sol === true){
            feedback.innerHTML = "Correct!";
            round5();
        }
    });
    answer4.addEventListener("click", e => {
        if(answer4Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            round5();
        }
    });
}

let round5 = () => {
    console.log("Round 5");

    // Variables for html
    let question = document.getElementById("question");
    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2");
    let answer3 = document.getElementById("answer3");
    let answer4 = document.getElementById("answer4");
    let feedback = document.getElementById("feedback")

    // Question & answer data
    let questionData = questionInfo[4].question;
    let answer1Data = questionInfo[4].answers[0].text;
    let answer2Data = questionInfo[4].answers[1].text;
    let answer3Data = questionInfo[4].answers[2].text;
    let answer4Data = questionInfo[4].answers[3].text;

    // Solution data
    let answer1Sol = questionInfo[4].answers[0].correct;
    let answer2Sol =  questionInfo[4].answers[1].correct;
    let answer3Sol =  questionInfo[4].answers[2].correct;
    let answer4Sol =  questionInfo[4].answers[3].correct;

    // Display data from object for question 1
    question.innerHTML = questionData;
    answer1.innerHTML = answer1Data;
    answer2.innerHTML = answer2Data;
    answer3.innerHTML = answer3Data;
    answer4.innerHTML = answer4Data;

    // Add event listeners to start answer verification
    answer1.addEventListener("click", e => {
        if(answer1Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            clearInterval(timer);
            gameOver();
        }
    });
    answer2.addEventListener("click", e => {
        if(answer2Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            clearInterval(timer);
            gameOver();
        }
    });
    answer3.addEventListener("click", e => {
        if(answer3Sol === false){
            feedback.innerHTML = "Wrong!";
            // let newTime = time - 10;
            // countdownEl.innerHTML = `${newTime}`;
            clearInterval(timer);
            gameOver();
        }
    });
    answer4.addEventListener("click", e => {
        if(answer4Sol === true){
            feedback.innerHTML = "Correct!";
            clearInterval(timer);
            gameOver();
        }
    });
}

let gameOver = () => {

    // Remove html elements
    const quizEl = document.getElementById("quiz-div");
    quizEl.remove();        
    

    // Add new html to the page
    const gameOverEl = document.getElementById("game-over");
    const h2El = document.getElementById("header")
    const p1El = document.getElementById("p1");
    const p2El = document.getElementById("p2");
    
    h2El.innerHTML = "GAME OVER";
    p1El.innerHTML = "Your final score is";
    p2El.innerHTML = "Enter your initials: ";

    gameOverEl.className = "text-center";

    const inputDiv = document.getElementById("input-div");
    const inputEl = document.createElement("input");
    inputDiv.appendChild(inputEl);

    const btnDiv = document.getElementById("btn-div")
    const btnEl = document.createElement("button")
    btnDiv.appendChild(btnEl);
    btnEl.className = "btn btn-primary my-2"
    btnEl.innerHTML = "Save"
    btnDiv.addEventListener("click", e => { 
        let userSave = {
            initials: `${inputEl.value}`
        }
        localStorage.setItem("Personal Score", JSON.stringify(userSave));  
    })

}

round1();
updateCountdown();