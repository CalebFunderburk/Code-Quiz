// Question info stored into an object
const questionInfo = [
    { question: "Commonly used data types DO NOT include:",
    answers: [
        {text: "Strings", correct: false},
        {text: "Booleans", correct: false},
        {text: "Alerts", correct: true},
        {text: "Numbers", correct: false}
    ]},
    { question: "The condition if an if/else statement is enclosed with _____.",
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

// Quiz 
const app = {

    game: () => {

        app.countdown();
        app.round1();

    },

    countdown: () => {

        // Variables for countdown
        const countdownEl = document.getElementById("countdown");
        const startingMinutes = 1.25;
        let time = startingMinutes * 60;

        // Coundown logic
        let updateCountdown = () => {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;

            countdownEl.innerHTML = `${minutes}: ${seconds}`;
            time--;

            if (time <= 0){
                countdownEl.innerHTML = "GAME OVER"
                app.gameOver()
            }
        }

        setInterval(updateCountdown, 1000);
    },

    round1: () => {

        // // Variables for html
        const question = document.getElementById("question");
        const answer1 = document.getElementById("answer1");
        const answer2 = document.getElementById("answer2");
        const answer3 = document.getElementById("answer3");
        const answer4 = document.getElementById("answer4");
        const feedback = document.getElementById("feedback")

        // Question & answer data
        let questionData = questionInfo[0].question;
        let answer1Data = questionInfo[0].answers[0].text;
        let answer2Data = questionInfo[0].answers[1].text;
        let answer3Data = questionInfo[0].answers[2].text;
        let answer4Data = questionInfo[0].answers[3].text;

        // Solution data
        const answer1Sol = questionInfo[0].answers[0].correct;
        const answer2Sol =  questionInfo[0].answers[1].correct;
        const answer3Sol =  questionInfo[0].answers[2].correct;
        const answer4Sol =  questionInfo[0].answers[3].correct;

        // // Display data from object for question 1
        question.innerHTML = questionData;
        answer1.innerHTML = answer1Data;
        answer2.innerHTML = answer2Data;
        answer3.innerHTML = answer3Data;
        answer4.innerHTML = answer4Data;

        // Add event listeners to start answer verification
        answer1.addEventListener("click", () => {
            if(answer1Sol === false){
                feedback.innerHTML = "Wrong!";
                app.round2();
            }
        });
        answer2.addEventListener("click", () => {
            if(answer2Sol === false){
                feedback.innerHTML = "Wrong!";
                app.round2();
            }
        });
        answer3.addEventListener("click", () => {
            if(answer3Sol === true){
                feedback.innerHTML = "Correct!";
                app.round2();
            }
        });
        answer4.addEventListener("click", () => {
            if(answer4Sol === false){
                feedback.innerHTML = "Wrong!";
                app.round2();
            }
        });
    },

    round2: () => {
        console.log("ding ding ding!")
    },
    
    round3: () => {

    },
    
    round4: () => {

    },
    
    round5: () => {

    },
    
    gameOver: () => {
        
    }
}

app.game();