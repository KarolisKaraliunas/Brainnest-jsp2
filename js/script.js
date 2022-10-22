// *************** Assignment (Rock Paper Scissors - UI):**********************
//////////////////////////////////////////////////////////////////////////////

// Hide selection at first
var pHidden = document.getElementById("pSelection");

// Set player values 
// var playerSelection;
var defaultValue;
var compChoice ;
var playerScore = 0;
var computerScore = 0;
var count = 0 ;



var div1 = document.getElementById("divR1");
var div2 = document.getElementById("divR2");
var div3 = document.getElementById("divR3");
var div4 = document.getElementById("divR4");
var div5 = document.getElementById("divR5");



// Handle checkbox changes hide / unhide
function handleChange(checkbox) {
    if(checkbox.checked == true){
        document.querySelector("#pSelection").style.display = "none";
        defaultValue = true;
    }else{
        document.querySelector("#pSelection").style.display = "block";
        defaultValue = false;
   }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function computerPickOption() {
    switch(getRandomInt(3)) {
        case 0:
            compChoice = "rock";
        break;
        case 1:
            compChoice = "paper";
        break;
        case 2:
            compChoice = "scissors";
            break; 
    }     
}

function playerPickOption() {
    if(defaultValue) {
        playerSelection = "rock" ;
    } else {
        var def = document.getElementById("selection").value;
        def = def.toLowerCase();
        console.log(def);
        if(def === "rock" || def === "paper" || def === "scissors") {
            playerSelection = def;
        } else {
            alert("Incorrect choice, try again");
        }
    }
}

function showRounds(playerType)  {
    var color;

    if (playerType == "Player") {
        color = "#00e600";
    } else if (playerType == "Computer") {
        color = "#ff3300";
    } else { 
        color = "#ffbf80";
    }

    switch(count) {
        case 0:
            div1.style.backgroundColor = color;
            div1.innerHTML = "The winner is: " + playerType;
          break;
        case 1:
            div2.style.backgroundColor = color;
            div2.innerHTML = "The winner is: " + playerType;
          break;
        case 2:
            div3.style.backgroundColor = color;
            div3.innerHTML = "The winner is: " + playerType;
          break;
        case 3:
            div4.style.backgroundColor = color;
            div4.innerHTML = "The winner is: " + playerType;
          break;
        case 4  :
            div5.style.backgroundColor = color;
            div5.innerHTML = "The winner is: " + playerType;
          break;
      }

}

function beginGame(playerSelection) {
    console.clear();
    var finalScore = document.getElementById("finalwinner");
    finalScore.innerHTML = "";

    computerPickOption();

    console.log("Player choice: " + playerSelection);
    console.log("Computer choice: " + compChoice);

    playRound(playerSelection,compChoice );

    if (count >= 6) {
        count = 0;
        playerScore = 0;
        computerScore = 0;
        
        div1.innerHTML = "Round 1";
        div2.innerHTML = "Round 2";
        div3.innerHTML = "Round 3";
        div4.innerHTML = "Round 4";
        div5.innerHTML = "Round 5";

        div1.style.backgroundColor = "#fff";
        div2.style.backgroundColor = "#fff";
        div3.style.backgroundColor = "#fff";
        div4.style.backgroundColor = "#fff";
        div5.style.backgroundColor = "#fff";
    } else  if (count == 5) {
        if (playerScore > computerScore) {
            finalScore.innerHTML = "Player wins!!!!";
        } else if (computerScore > playerScore) {
            finalScore.innerHTML = "Computer wins!!!!";
        } else {
            finalScore.innerHTML = "It's a tie!!!!";
        }
    }
    console.log(count);

}

function computerWon() {
    computerScore++;
    var computerScoreShown = document.getElementById("computerWon");
    computerScoreShown.innerHTML = "Computer won: " + computerScore + " times";
}

function playerWon() {
    playerScore++;
    var playerScoreShown = document.getElementById("playerWon");
    playerScoreShown.innerHTML = "Player won: " + playerScore + " times";
}


function playRound(playerSelection, compChoice) {
    if (playerSelection === "rock" && compChoice === "paper") {
        console.log("--- Computer wins!");
        computerWon();
        showRounds("Computer");
    } else if (playerSelection === "rock" && compChoice === "scissors") {
        console.log("--- Player wins!");
        playerWon();
        showRounds("Player");
    } else if (playerSelection === "paper" && compChoice === "scissors") {
        console.log("--- Computer wins!");
        computerWon();
        showRounds("Computer");
    } else if (playerSelection === "paper" && compChoice === "rock") {
        console.log("--- Player wins!");
        playerWon();
        showRounds("Player");
    } else if (playerSelection === "scissors" && compChoice === "rock") {
        console.log("--- Computer wins!");
        computerWon();
        showRounds("Computer");
    } else if (playerSelection === "scissors" && compChoice === "paper") {
        console.log("--- Player wins!");
        playerWon();
        showRounds("Player");
    } else if (JSON.stringify(playerSelection) === JSON.stringify(compChoice)) {
        console.log("--- Tie!");
        showRounds("Tie");
    } else {
        console.log("Error");
    }
    count++;
}




