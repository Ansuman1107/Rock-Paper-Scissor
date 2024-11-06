let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let displayUserScore = document.querySelector("#user-score");
let displayCompScore = document.querySelector("#comp-score");

const compChoiceGenerator = () => {
  const choicesList = ["rock","paper","scissor"];
  const rdmChoiceNumber = Math.floor(Math.random()*3);
  return choicesList[rdmChoiceNumber];
}
const draw = () => {
  msg.innerText = "OOPS! It was a draw."
  msg.style.backgroundColor = "#3f334d";
}

const userFate = (userWin,userChoice,compChoice) => {
  if(userWin){
    msg.innerText = `Yayyy! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    displayUserScore.innerText = userScore;
  }else{
    msg.innerText = `Sorry! Your ${userChoice} lost to ${compChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    displayCompScore.innerText = compScore;
  }
};

const winnerCalculator = (userChoice,compChoice) => {
  let userWin = true;
  if (userChoice === compChoice){
    draw();
  }else{
    if (userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true;
    }else if (userChoice === "paper"){
      userWin = compChoice === "scissor" ? false : true;
    }else {
      userWin = compChoice === "rock" ? false : true;
    }
    userFate(userWin,userChoice, compChoice);
  }
  
}

const playGame = (userChoice) =>{
  console.log(`User Choice is ${userChoice}`);
  const compChoice = compChoiceGenerator();
  console.log(`Computer Choice is ${compChoice}`);
  winnerCalculator(userChoice,compChoice);
}

choices.forEach((choice) => {
  choice.addEventListener("click" , () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})