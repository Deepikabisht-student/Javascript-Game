let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#New_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let turn0 = true; //PlayerX, PlayerY

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
   turn0 = true;
   enableBoxes();
   msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        if(turn0 ) {
            box.innerHTML = "O";
            turn0 = false;
        } else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;


        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is ${winner} `;
  msgContainer.classList.remove("hide");
  disableBoxes();
}


const checkWinner = () => {
    for ( let pattern of winPatterns) {
          let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

      if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
      }

    }
};



newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);