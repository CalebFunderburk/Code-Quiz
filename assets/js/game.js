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

// Countdown function
let countdown = () => {
    // Coundown logic
    let updateCountdown = () => {
        let seconds = time;

        countdownEl.innerHTML = `${seconds}`;
        time--;

        if (time <= 0){
            countdownEl.innerHTML = "GAME OVER"
            app.gameOver()
        }
    }

    setInterval(updateCountdown, 1000);
}

// Quiz 
const app = {

    round1: () => {
        console.log("Round 1");

        // Variables for html
        let question = document.getElementById("question");
        let answer1 = document.getElementById("answer1");
        let answer2 = document.getElementById("answer2");
        let answer3 = document.getElementById("answer3");
        let answer4 = document.getElementById("answer4");
        let feedback = document.getElementById("feedback")

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
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.round2();

            }
        });
        answer2.addEventListener("click", e => {
            if(answer2Sol === false){
                feedback.innerHTML = "Wrong!";
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.round2();
            }
        });
        answer3.addEventListener("click", e => {
            if(answer3Sol === true){
                feedback.innerHTML = "Correct!";
                app.round2();
            }
        });
        answer4.addEventListener("click", e => {
            if(answer4Sol === false){
                feedback.innerHTML = "Wrong!";
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.round2();
            }
        });
    },

    round2: () => {
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
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.round3();
            }
        });
        answer2.addEventListener("click", e => {
            if(answer2Sol === false){
                feedback.innerHTML = "Wrong!";
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.round3();
            }
        });
        answer3.addEventListener("click", e => {
            if(answer3Sol === true){
                feedback.innerHTML = "Correct!";
                app.round3();
            }
        });
        answer4.addEventListener("click", e => {
            if(answer4Sol === false){
                feedback.innerHTML = "Wrong!";
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.round3();
            }
        });
    },
    
    round3: () => {
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
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.round4();
            }
        });
        answer2.addEventListener("click", e => {
            if(answer2Sol === false){
                feedback.innerHTML = "Wrong!";
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.round4();
            }
        });
        answer3.addEventListener("click", e => {
            if(answer3Sol === true){
                feedback.innerHTML = "Correct!";
                app.round4();
            }
        });
        answer4.addEventListener("click", e => {
            if(answer4Sol === false){
                feedback.innerHTML = "Wrong!";
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.round4();
            }
        });
    },
    
    round4: () => {
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
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.round5();

            }
        });
        answer2.addEventListener("click", e => {
            if(answer2Sol === false){
                feedback.innerHTML = "Wrong!";
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.round5();
            }
        });
        answer3.addEventListener("click", e => {
            if(answer3Sol === true){
                feedback.innerHTML = "Correct!";
                app.round5();
            }
        });
        answer4.addEventListener("click", e => {
            if(answer4Sol === false){
                feedback.innerHTML = "Wrong!";
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.round5();
            }
        });
    },
    
    round5: () => {
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
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.gameOver();
            }
        });
        answer2.addEventListener("click", e => {
            if(answer2Sol === false){
                feedback.innerHTML = "Wrong!";
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.gameOver();
            }
        });
        answer3.addEventListener("click", e => {
            if(answer3Sol === true){
                feedback.innerHTML = "Correct!";
                app.gameOver();
            }
        });
        answer4.addEventListener("click", e => {
            if(answer4Sol === false){
                feedback.innerHTML = "Wrong!";
                let newTime = time - 10;
                countdownEl.innerHTML = `${newTime}`;
                app.gameOver();
            }
        });
    },
    
    gameOver: () => {
        console.log("GAME OVER");
    }
}

app.round1();
countdown();