let boxes= document.querySelectorAll(".box");
let restartbtn=document.querySelector("#restart");
let newgame=document.querySelector("#newbtn");
let msg=document.querySelector(".msg");
let txt=document.querySelector("#txt");
const arr=[[0,1,2],[0,4,8],[0,3,6],[6,7,8],
[2,5,8],[1,4,7],[3,4,5],[2,4,6]];
let turn0 = true;
let count =0;
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const resetgame=()=>{
    turn0=true;
    count=0;
    enableboxes();
    msg.classList.add("hide");
};
const draw=()=>{
    txt.innerText=`it's a Draw`;
    disableboxes();
    msg.classList.remove("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turn0){
        box.innerText="X";
        turn0=false;
    }
    else{
        box.innerText="O";
        turn0=true;
    }
    box.disabled=true;
    count++;
    let iswinner=checkWinner();
    if(count===9&&!iswinner){
        draw();
    }
    });
});
const showWinner=(winner)=>{
    txt.innerText=`Winner is ${winner}`;
    msg.classList.remove("hide");
    disableboxes();
};
const checkWinner = ()=>{
    for(let pattern of arr){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!=""&&val2!=""&&val3!=""){
            if(val1===val2&&val2===val3){
                showWinner(val2);
                return true;
            }
        }
    }
};
newgame.addEventListener("click",resetgame);
restartbtn.addEventListener("click",resetgame);
   