const cpuOption = () => {
  const options = ["stone", "paper", "scissor"];
  const randomNumber = Math.random() * 3;
  const convertToWholeNumber = Math.floor(randomNumber);
  const computerChoice = options[convertToWholeNumber];
  return computerChoice;
};

const userOption = (userChoice) => {
  const usersChoiceTag = document.querySelector("#users-choice");
  const cpuChoiceTag = document.querySelector("#cpu-choice");
  const resultTag = document.querySelector("#result");

  //   console.log(`The option is ${option}`);

  usersChoiceTag.innerHTML = `<img src='${userChoice}.png'>`;
  const cpuChoice = cpuOption();
  cpuChoiceTag.innerHTML = `<img src='${cpuChoice}.png'>`;

  let result = "";

  if (cpuChoice === userChoice) {
    result = "Draw";
  } else if (cpuChoice === "stone" && userChoice === "scissor") {
    result = "CPU Wins";
  } else if (cpuChoice === "paper" && userChoice === "stone") {
    result = "CPU Wins";
  } else if (cpuChoice === "scissor" && userChoice === "paper") {
    result = "CPU Wins";
  } else {
    result = "Player wins";
  }

  resultTag.textContent = result;
};

window.onload = () => {
  const stoneTag = document.querySelector("#stone");
  const paperTag = document.querySelector("#paper");
  const scissorTag = document.querySelector("#scissor");

  stoneTag.addEventListener("click", () => {
    userOption("stone");
  });
  paperTag.addEventListener("click", () => {
    userOption("paper");
  });
  scissorTag.addEventListener("click", () => {
    userOption("scissor");
  });
};

// function name () {

// }

// const name = () => {

// }
