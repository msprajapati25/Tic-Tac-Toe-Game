let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let finish = document.querySelector(".finish");
let msg = document.querySelector("p");

let winningpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let playerO = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerO) {
      box.innerText = "O";
      playerO = false;
    } else {
      box.innerText = "X";
      playerO = true;
    }
    box.disabled = true;
    winner();
  });
});

const winner = () => {
  for (let pattern of winningpattern) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        finish.classList.remove("hide");
        msg.innerText = `${val1} is the winner!`;
        gameFinish();
      }
    }
  }
};

const gameFinish = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

resetbtn.addEventListener("click", () => {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
    finish.classList.add("hide");
    playerO = true;
  }
});

newGame.addEventListener("click", () => {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
    finish.classList.add("hide");
    playerO = true;
  }
});
