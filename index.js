let button = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let turn0 = true;
let newgame = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#message")

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true;
    enablebutton();
    msgcontainer.classList.add("hide");
}

button.forEach((box) =>{
      box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        winner();
      });
});

const disableButton = () => {
    for(let box of button){
        box.disabled = true;
        box.innerText = "";
    }
}

const enablebutton = () => {
    for(let box of button){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (theWinner) => {
    msg.innerText = `congratulations the winner is ${theWinner}`;
    msgcontainer.classList.remove("hide");
    disableButton();
};
const winner = () => {
    for (let pattern of winpatterns) {
           let pos1val = button[pattern[0]].innerText;
           let pos2val =  button[pattern[1]].innerText;
           let pos3val = button[pattern[2]].innerText;
           
           if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);

            }
         }
       }
};


newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);