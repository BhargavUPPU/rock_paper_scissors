const playerSelection=document.querySelectorAll("img");
const me=document.getElementById("me");
const computer1=document.getElementById("computer");


let score=0;
let computerScore=0;
let computer;
//setInterval(computerPlay,1000);
//setInterval(playGround,1000);
function computerPlay(){
    let num=["rock","paper","scissors"];
    let i= Math.floor(Math.random()*num.length);
    return num[i];
}


function paper(){
    computer= computerPlay();
    if(me){
        me.innerHTML=""
    }
    let div1=document.createElement("img")
    div1.src="./paper.png";
    div1.style.width=230+"px"
    me.appendChild(div1);
  
    if(playerSelection[0].id==="paper"&& computer==="rock"){
    score++
    }
    else{
        computerScore++
    }
  paper1()
   
}
function rock(){
    computer= computerPlay();
    if(me){
        me.innerHTML=""
    }
    let div1=document.createElement("img")
    div1.src="./rock.png";
    div1.style.width=230+"px"
    me.appendChild(div1);
  
    if(playerSelection[1].id==="rock" && computer==="scissors"){
    score++
    }
    else{
        computerScore++
    }
  paper1()
   
}
function scissors(){
    computer= computerPlay();
    if(me){
        me.innerHTML=""
    }
    let div1=document.createElement("img")
    div1.src="./scissors.png";
    div1.style.width=230+"px"
    me.appendChild(div1);
  
    if(playerSelection[1].id==="scissors"&& computer==="paper"){
    score++
    }
    else{
        computerScore++
    }
  paper1()
   
}
playerSelection[0].addEventListener("click",paper);
playerSelection[1].addEventListener("click",rock);
playerSelection[2].addEventListener("click",scissors)
function paper1(){
    if(computer1){
        computer1.innerHTML="";
    }
    let div2=document.createElement("img");
    div2.style.width=230+"px"
    div2.src= "./"+computerPlay()+".png";
    computer1.appendChild(div2);

    document.getElementById("score1").innerHTML=score;
    document.getElementById("score2").innerHTML=computerScore;

}




   

