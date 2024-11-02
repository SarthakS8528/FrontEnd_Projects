//bascially we will start with two variables
//phela wala would store ther score of the user
//dusra wala would store the score of the computer

let userScore=0;
let compScore=0;

//JS mai hume yeh bhi mention karna padega ki out of 3 choices
//kon si choice select ho rhi hai

const choices=document.querySelectorAll(".choice");
//since the size of the image and div are almost equal
//hence we will add a event listener which will track mouse activity
const msg= document.querySelector("#msg");
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock",'paper','scissors'];
    // Math.random()   //generates 0 to 1 random value
    //it is not possible to generate random strings but it is very
    //much possible to generate a random whole nummber and associate them
    //with choices in the array.
    
    //Since math.random generates value from 0 to 1, if we multiply it with 3
    //it will generate value between 0 and 3(both excluded.)

    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawgame=()=>{
    console.log("Game was a draw.");
    msg.innerText="Draw";
    msg.style.backgroundColor="grey";
}

const playGame=(userChoice)=>{
    console.log("user choice= ",userChoice);
    //generate computer choice 
    //this is the modular way of coding where we write one function for just one task.
    //this increases the reusability.

    const compChoice=genCompChoice();
    console.log("comp choice", compChoice);

    if(userChoice===compChoice){
        drawgame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock") //compChoice can be rock or scissors
        //draw wala automatically upar se ho jayega.
        {
         userWin=compChoice==="paper"? false : true;
        }
        else if( userChoice==="paper"){
            //rock or scissors
            userWin=compChoice==="scissors"? false: true;
        }
        else{
            //comp has rock or paper
            userWin=compChoice==="rock"? true: false;
        }
        showWinner(userWin);
    }

        
};

const showWinner=(userWin)=>{
    if(userWin)
    {
        console.log("You Win");
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
        userScore++;
        userscore.innerText=userScore;
        
    }
    else
    {
    console.log("You lose");
    msg.innerText="You Lose!!"
    msg.style.backgroundColor="red";
    compScore++;
    compscore.innerText=compScore;
    }
};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id"); 
            playGame(userChoice);
    });
});