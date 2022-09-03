// Question 1 info stored into an object
const questionInfo = [
    { question: "Commonly used data types DO NOT include:",
    answers: [
        {text: "Strings", correct: false, feedback: "Wrong!"},
        {text: "Booleans", correct: false, feedback: "Wrong!"},
        {text: "Alerts", correct: true, feedback: "Correct!"},
        {text: "Numbers", correct: false, feedback: "Wrong!"}
    ]},
    { question: "The condition if an if/else statement is enclosed with _____.",
    answers: [
        {text: "Quotes", correct: false, feedback: "Wrong!"},
        {text: "Curly Brackets", correct: false, feedback: "Wrong!"},
        {text: "Parenthesis", correct: true, feedback: "Correct!"},
        {text: "Square Brackets", correct: false, feedback: "Wrong!"}
    ]},
    { question: "Arrays in JavaScript can be used to store _____.",
    answers: [
        {text: "Numbers & Strings", correct: false, feedback: "Wrong!"},
        {text: "Other Arrays", correct: false, feedback: "Wrong!"},
        {text: "Booleans", correct: false, feedback: "Wrong!"},
        {text: "All Of The Above", correct: true, feedback: "Correct!"}
    ]},
    { question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: [
        {text: "Commas", correct: false, feedback: "Wrong!"},
        {text: "Curly Brackets", correct: false, feedback: "Wrong!"},
        {text: "Quotes", correct: true, feedback: "Correct!"},
        {text: "Parenthesis", correct: false, feedback: "Wrong!"}
    ]},
    { question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
        {text: "JavaScript", correct: false, feedback: "Wrong!"},
        {text: "Bash", correct: false, feedback: "Wrong!"},
        {text: "For Loops", correct: false, feedback: "Wrong!"},
        {text: "console.log", correct: true, feedback: "Correct!"}
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
        let feedback = document.getElementById("feedback");

        // // Display data from object for question 1
        question.innerHTML = questionInfo[0].question;
        answer1.innerHTML = questionInfo[0].answers[0].text;
        answer2.innerHTML = questionInfo[0].answers[1].text;
        answer3.innerHTML = questionInfo[0].answers[2].text;
        answer4.innerHTML = questionInfo[0].answers[3].text;
        answer1Feed = questionInfo[0].answers[0].feedback;
        feedback.innerHTML = answer1Feed;


        // Add event listeners to start answer verification
        answer1.addEventListener("click", app.answerVerify);
        answer2.addEventListener("click", app.answerVerify);
        answer3.addEventListener("click", app.answerVerify);
        answer4.addEventListener("click", app.answerVerify);
    },

    round2: () => {

    },
    
    round3: () => {

    },
    
    round4: () => {

    },
    
    round5: () => {

    },

    answerVerify: (e) => {

        // Test
        const selectedAnswer = e.target;
        console.log(`${selectedAnswer}`);

        // Variables for html
        let feedback = document.getElementById("feedback");
        
    },
    
    store: () => {

    }
}

app.game();