// Global
const acceptingAnswers = true;

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
        let question = document.getElementById("question");
        let answer1 = document.getElementById("answer1");
        let answer2 = document.getElementById("answer2");
        let answer3 = document.getElementById("answer3");
        let answer4 = document.getElementById("answer4");

        // // Display data from object for question 1
        question.innerHTML = questionInfo[0].question;
        answer1.innerHTML = questionInfo[0].answers[0].text;
        answer2.innerHTML = questionInfo[0].answers[1].text;
        answer3.innerHTML = questionInfo[0].answers[2].text;
        answer4.innerHTML = questionInfo[0].answers[3].text;

        // Add event listeners to start answer verification
        answer1.addEventListener("click", function(){console.log("Hello");});
        answer2.addEventListener("click", function(){console.log("Hello");});
        answer3.addEventListener("click", function(){console.log("Hello");});
        answer4.addEventListener("click", function(){console.log("Hello");});
    },

    round2: () => {

    },
    
    round3: () => {

    },
    
    round4: () => {

    },
    
    round5: () => {

    },
    
    gameOver: () => {
        console.log("GAME OVER");
    }
}

app.game();