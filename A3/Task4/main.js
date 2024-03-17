$(document).ready(function () {
    var choices = ["rock", "paper", "scissors"];
    var userScore = 0;
    var computerScore = 0;
  
    function computerChoice() {
      var randomIndex = Math.floor(Math.random() * 3);
      return choices[randomIndex];
    }
  
    function determineWinner(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
        return "It's a tie!";
      }
      if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        userScore++;
        return "You win!";
      } else {
        computerScore++;
        return "Computer wins!";
      }
    }
  
    $(".choice").click(function () {
      var userChoice = this.id;
      var compChoice = computerChoice();
      var result = determineWinner(userChoice, compChoice);
      let line = `You chose ${userChoice}. </br>
      Computer chose ${compChoice} .</br>
      <strong>${result}</strong>
      `;
      $("#result").html(line);
      $("#score").html(
        "Your Score: " + userScore + " <br/> Computer Score: " + computerScore
      );
    });
  
    $("#reset").click(function () {
      userScore = 0;
      computerScore = 0;
      $("#result").text("");
      $("#score").html("Your Score: 0 <br/> Computer Score: 0");
    });
  });