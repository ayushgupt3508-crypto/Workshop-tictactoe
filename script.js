let boxes = document.querySelectorAll('.box');
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgContainer");
let count = 0;
let turnX = true;

let resetBtn = document.getElementById("reset");

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const enableBtn = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
    msgContainer.classList.add("hide");
    msg.innerText = "";
};

const disableBtn = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const resetGame = () => {
    turnX = true;
    count = 0;
    enableBtn();
    resetBtn.innerHTML = "Reset Game";
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log(count);
    
        if(turnX){
            box.innerHTML = "X";
            turnX = false;
        }else{
            box.innerHTML = "O";
            turnX = true;
        }

        if(count == 8){
            msg.innerHTML = "Draw";
            msgContainer.classList.remove("hide");
            resetBtn.innerHTML = "New Game";
        }
        count++;
        box.disabled = true;

        checkWinner();
    });

    
    const showWinner = (winner) => {
        msg.innerText = `${winner} Won!`;
        msgContainer.classList.remove("hide");
        disableBtn();
        
        resetBtn.innerHTML = "New Game";
    };

    const checkWinner = () => {
        for(let pattern of winPattern){
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if(pos1 != "" && pos2 != "" && pos3 != ""){
                if (pos1 == pos2 && pos2 == pos3){
                    console.log(pos1);
                    showWinner(pos1 , count);
                }
            }
        }
    };
});
resetBtn.addEventListener("click", resetGame);