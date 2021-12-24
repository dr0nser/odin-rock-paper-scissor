let playerScore = 0, computerScore = 0, roundNumber = 1, totalRounds = 5;

        const rock = document.getElementById("rock");
        const scissor = document.getElementById("scissor");
        const paper = document.getElementById("paper");
        const roundAnswer = document.getElementById("roundAnswer");
        const pScore = document.getElementById("playerscore");
        const cScore = document.getElementById("computerscore");
        const currentRound = document.getElementById("currentRound");
        const gamewindow = document.getElementById("gamewindow");
        const resultwindow = document.getElementById("resultwindow");
        const playerFinalScore = document.getElementById("playerFinalScore");
        const computerFinalScore = document.getElementById("computerFinalScore");
        const verdict = document.getElementById("verdict");

        const choices = ['rock', 'paper', 'scissor'];

        function computerPlay() {
            let randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        function playRound(playerSelection, computerSelection) {
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerPlay();
            if (playerSelection == computerSelection) {
                return "Draw!";
            } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                return "You Lose! Paper beats Rock";
            } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                return "You Win! Paper beats Rock";
            } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
                return "You Lose! Scissors cut Paper";
            } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
                return "You Win! Scissors cut Paper";
            } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
                return "You Win! Rock crushes Scissors";
            } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
                return "You Lose! Rock crushes Scissors";
            }
        }

        function endGame() {
            gamewindow.style.display = 'none';
            playerFinalScore.innerHTML = playerScore;
            computerFinalScore.innerHTML = computerScore;
            if (playerScore > computerScore) {
                verdict.innerHTML = 'You Win!';
            } else if (playerScore < computerScore) {
                verdict.innerHTML = 'You Lose!';
            } else {
                verdict.innerHTML = 'Draw.'
            }
            resultwindow.style.display = 'block';
        }

        function replay() {
            window.location.reload();
        }

        function rockClicked() {
            const playerChoice = 'rock';
            const computerChoice = computerPlay();
            let ans = playRound(playerChoice, computerChoice);
            roundAnswer.innerHTML = ans;
            if (ans.includes('Win')) {
                playerScore += 1;
            } else if (ans.includes('Lose')) {
                computerScore += 1;
            } 
            pScore.innerHTML = playerScore;
            cScore.innerHTML = computerScore;
            roundNumber += 1;
            currentRound.innerHTML = roundNumber;
            if (roundNumber > totalRounds) {
                endGame();
            }
        }

        function scissorClicked() {
            const playerChoice = 'scissor';
            const computerChoice = computerPlay();
            let ans = playRound(playerChoice, computerChoice);
            roundAnswer.innerHTML = ans;
            if (ans.includes('Win')) {
                playerScore += 1;
            } else if (ans.includes('Lose')) {
                computerScore += 1;
            } 
            pScore.innerHTML = playerScore;
            cScore.innerHTML = computerScore;
            roundNumber += 1;
            currentRound.innerHTML = roundNumber;
            if (roundNumber > totalRounds) {
                endGame();
            }
        }

        function paperClicked() {
            const playerChoice = 'paper';
            const computerChoice = computerPlay();
            let ans = playRound(playerChoice, computerChoice);
            roundAnswer.innerHTML = ans;
            if (ans.includes('Win')) {
                playerScore += 1;
            } else if (ans.includes('Lose')) {
                computerScore += 1;
            } 
            pScore.innerHTML = playerScore;
            cScore.innerHTML = computerScore;
            roundNumber += 1;
            currentRound.innerHTML = roundNumber;
            if (roundNumber > totalRounds) {
                endGame();
            }
        }