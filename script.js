let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


// genrate computer choice 
const getCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randomInx = Math.floor(Math.random() * 3);
    return option[randomInx];
}

// drawGame
const drawGame = () => {
    msg.innerText = "Game Draw, Try again!";
    msg.style.backgroundColor = "orange";
}

// display
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// Game-logic
const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    console.log("user choice = ",userChoice);
    console.log("computer choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

// event
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});