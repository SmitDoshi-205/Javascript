let box = document.querySelectorAll("#container div");
let resetBtn = document.querySelector("#reset-btn");
let result = document.getElementById("result");
let turnO = true;
let gameOver = false;
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
box.forEach((box) => {
    box.addEventListener("click", () => {
        if(gameOver) return;
        if(box.innerText !== "") return;
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winningPatterns) {
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;

        if(pos1 !== "" && pos2 != "" && pos3 !== "") {
            if(pos1 === pos2 && pos2 === pos3) {
                result.innerText = `${pos1} wins!`;
                gameOver = true;
                return;
            }
        }
    }
    let isTie = true;
    box.forEach((box) => {
        if (box.innerText === "") {
            isTie = false;
        }
    });
    if (isTie) {
        result.innerText = "It's a tie!";
        gameOver = true;
    }
}

const resetGame = () => {
    box.forEach((box) => {
        box.innerText = "";
    });

    result.innerText = "";
    turnO = true;
    gameOver = false;
}
resetBtn.addEventListener("click", resetGame);

let isDark = false;
function changeMode() {
  if (isDark) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    for(let i = 0; i<box.length; i++){
        box[i].style.border = "2px solid black";
    }
    resetBtn.style.backgroundColor = "black";
    resetBtn.style.color = "white";
    isDark = false;
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    for(let i = 0; i<box.length; i++){
        box[i].style.border = "2px solid white";
    }
    resetBtn.style.backgroundColor = "white";
    resetBtn.style.color = "black";
    isDark = true;
  }
}