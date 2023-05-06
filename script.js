let firstnum;
let operator;
let ans;
let secondnum;
let currentdisp=document.querySelector('.current');
let predisp=document.querySelector(".pre");
document.addEventListener("keydown",e=>{keypressed(e.key);});
function keypressed(k){
    if(k=="Control"||k=="Shift"){
        return;
    }
    if(k=="Backspace"){
        backSpace();
    }
    else{
    if(k=="+"){
        operate("+");
    }
    else if(k=="-"){
        operate("-");
    }
    else if(k=="x"){
        operate("*");
    }
    else if(k=="/"){
        operate("÷");
    }
    else if(k=="="||k=="Enter"){
        equal();
    }
    else{
        if(ans==Number(currentdisp.textContent)||firstnum==currentdisp.textContent){
            currentdisp.textContent="";
        }
        currentdisp.textContent+=k;
        
    }
}
}

function display(val){ 
    if(ans==Number(currentdisp.textContent)||firstnum==currentdisp.textContent){
        currentdisp.textContent="";
    }
    currentdisp.textContent+=val;
    

}
function operate(sign){
    if(isEmpty(operator)){
    operator=sign;
    firstnum=currentdisp.textContent;
    currentdisp.textContent="";
    predisp.textContent=`${firstnum} ${operator}`;
}
    else{
        secondnum=currentdisp.textContent;
        firstnum=predisp.textContent.slice(0,-1);
        secondnum=Number(secondnum);
        firstnum=Number(firstnum);
        if(operator=="+"){
            ans=add(firstnum,secondnum);
         }
         else if(operator=="-"){
             ans=sub(firstnum,secondnum);
         }
         else if(operator=="x"){
             ans=multiply(firstnum,secondnum);
         }
         else if(operator=="÷") {
             ans=divide(firstnum,secondnum);
         }
         else{
             console.log("you pressed a wrong key");
         }
         if(!(Number.isInteger(ans))){
             ans=ans.toFixed(3);
             predisp.textContent=`${ans} ${sign}`;
             currentdisp.textContent=`${ans}`;
         }
         else{
            predisp.textContent=`${ans} ${sign}`;
            currentdisp.textContent=`${ans}`;
            
         }
         operator=sign;

         
    }
}
function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}


function equal(){
    if(!(isEmpty(firstnum)&&isEmpty(secondnum))){
        firstnum=predisp.textContent.slice(0,-1);
    secondnum=currentdisp.textContent;
    secondnum=Number(secondnum);
    firstnum=Number(firstnum);
    if(operator=="+"){
       ans=add(firstnum,secondnum);
    }
    else if(operator=="-"){
        ans=sub(firstnum,secondnum);
    }
    else if(operator=="x"){
        ans=multiply(firstnum,secondnum);
    }
    else if(operator=="÷") {
        ans=divide(firstnum,secondnum);
    }
    else{
        console.log("you pressed a wrong key");
    }
    if(!(Number.isInteger(ans))){
        let res=ans.toFixed(3);
        currentdisp.textContent=`${res}`;
        predisp.textContent=`${firstnum} ${operator} ${secondnum} =`;
        
    }
    else{
        currentdisp.textContent=`${ans}`;
        predisp.textContent=`${firstnum} ${operator} ${secondnum} =`;
        
    }
    
    firstnum=undefined;
  secondnum=undefined;
    ans=undefined;
    operator=undefined;
    res=undefined;
    }
    else{
        return
    }
}
function clearAll(){
    currentdisp.textContent="";
    predisp.textContent="";
    firstnum=undefined;
  secondnum=undefined;
    ans=undefined;
    operator=undefined;
}

function backSpace(){
    currentdisp.textContent=currentdisp.textContent.slice(0,-1);

}

const add=(a,b)=> a+b;
const sub=(a,b)=> a-b;
const multiply=(a,b)=> a*b;
const divide=(a,b)=>a/b;
