let buttons=document.querySelectorAll('.buttons');

let btns=["green","orange","blue","purple"];

let gameSequence=[];
let userSequence=[];

let h3=document.querySelector("h3");

let st=false;
let level=0;
// first start the game
document.addEventListener("keypress",function(){
    if(st==false){
        st=true;
        levelUp();
    }
});
// gameFlash function
function gameFlash(btn){
    let store=buttons[btn].style.backgroundColor;
    buttons[btn].style.backgroundColor="transparent";
    setTimeout(function(){
        buttons[btn].style.backgroundColor=store;
    },300);
}
// for upgrading the levels in game.
function levelUp(){
    userSequence=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randomNumber=Math.floor(Math.random()*3);
    gameFlash(randomNumber);
    gameSequence.push(randomNumber);
}
// check if button was press by gamer is right or not.
function checkAns(idx){
    if(userSequence[idx]==gameSequence[idx]){
        if(userSequence.length==gameSequence.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerText=`Game is over,Please enter any key to restart the game! ${level}`;
        let h5=document.querySelector("h5");
        h5.innerText=`your score is ${level}`;
        setTimeout(function(){
            h5.innerText=``;
        },1000);
        reset();
    }
}
// button press.
function btnPress(){
    let btn=this;
    let store=this.style.backgroundColor;
    btn.style.backgroundColor="limegreen";
    setTimeout(function(){
        btn.style.backgroundColor=store;
    },300);

    userSequence.push(btn.innerText);
    checkAns(userSequence.length-1);
}
// reset the game.
function reset(){
    st=false;
    gameSequence=[];
    userSequence=[];
    level=0;
}

for(button of buttons){
    button.addEventListener("click",btnPress);
}
