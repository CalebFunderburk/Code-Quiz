// Quiz 
const app = {

    game: () => {

        app.countdown();

    },

    countdown: () => {

        //Variables for countdown
        const countdownEl = document.getElementById("countdown");
        const startingMinutes = 10;
        let time = startingMinutes * 60;

        setInterval(updateCountdown, 1000);

        function updateCountdown() {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;

            countdownEl.innerHTML = `${minutes}: ${seconds}`;
            time--;
        }
    },

    round1: ()=> {

    },

    round2: ()=> {

    },
    
    round3: ()=> {

    },
    
    round4: ()=> {

    },
    
    round5: ()=> {

    },
    
    score: ()=> {

    }
}

app.game();