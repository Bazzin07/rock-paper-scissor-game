let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userpoints = document.querySelector("#user-score");
const comppoints = document.querySelector("#comp-score");

let compchoice = () =>{
    const options = ["rock","paper","scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}
const drawgame = () => {
    console.log("Game Was Draw");
    move.innerText = "Game was Draw"
    move.style.background = "Yellow"
}
const showwin = (userwin, userchoice , cchoice) => {
    if(userwin){
        console.log("you win");     
      move.innerText = `You Won The Game ${userchoice} beats ${cchoice}`;
      move.style.background = "green";
      userScore++;
      userpoints.innerText = userScore;
    }
    else{
        console.log("you lost")
        move.innerText = `You Lost The Game ${userchoice} beats ${cchoice}`;
        move.style.background = "red";
        compScore++;

        comppoints.innerText = compScore;

    }

}
const game = (userchoice) => {
    console.log("your choice = ",userchoice);
    const cchoice = compchoice();
    console.log("computer choice = ",cchoice);
    if (userchoice === cchoice ){
        drawgame();
    }
    else{
        let userwin = true;

        if(userchoice === "rock"){
            userwin = cchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = cchoice === "scissors" ? false : true;
        }
        else {
            userwin = cchoice === "rock" ? false : true;
        }
        showwin(userwin)
        
    }
}
choices.forEach((choice) => { 
         choice.addEventListener("click",() =>{
            const userchoice = choice.getAttribute("id");
            game(userchoice);
         })
}) 