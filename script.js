let firstnum;
let operator;
let ans;
let secondsign;
let disp=document.querySelector('#display');

function display(val){ 
    if(ans==Number(disp.textContent)||firstnum==disp.textContent){
        disp.textContent="";
    }
    disp.textContent+=val;
  
}
function operate(sign){
    if(isEmpty(operator)){
    operator=sign;
    firstnum=disp.textContent;
   
    console.log(firstnum);}
    else{secondnum=disp.textContent;
        disp.textContent="";
        console.log(firstnum);
        console.log(secondnum);
        secondnum=Number(secondnum);
    firstnum=Number(firstnum);
        if(operator=="+"){
            ans=add(firstnum,secondnum);
         }
         else if(operator=="-"){
             ans=sub(firstnum,secondnum);
         }
         else if(operator=="*"){
             ans=multiply(firstnum,secondnum);
         }
         else{
             ans=divide(firstnum,secondnum);
         }
         if(!(Number.isInteger(ans))){
        
             let res=ans.toFixed(3);
             disp.textContent=`${res}`;
         }
         else{
             disp.textContent=`${ans}`;
             firstnum=ans;
         }
         operator=sign;
    }
}
function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}


function equal(){
    if(!(isEmpty(firstnum)&&isEmpty(secondnum))){
    secondnum=disp.textContent;
    secondnum=Number(secondnum);
    firstnum=Number(firstnum);
    if(operator=="+"){
       ans=add(firstnum,secondnum);
    }
    else if(operator=="-"){
        ans=sub(firstnum,secondnum);
    }
    else if(operator=="*"){
        ans=multiply(firstnum,secondnum);
    }
    else{
        ans=divide(firstnum,secondnum);
    }
    if(!(Number.isInteger(ans))){
        let res=ans.toFixed(3);
        disp.textContent=`${res}`;
    }
    else{
        disp.textContent=`${ans}`;
    }
    
    firstnum=undefined;
  secondnum=undefined;
    ans=undefined;
    sign=undefined;

    res=undefined;
    }
    else{
        return
    }
}
function clearAll(){
    disp.textContent="";
    firstnum=undefined;
  secondnum=undefined;
    ans=undefined;
    operator=undefined;
}

function backSpace(){
    disp.textContent=disp.textContent.slice(0,-1);

}

const add=(a,b)=> a+b;
const sub=(a,b)=> a-b;
const multiply=(a,b)=> a*b;
const divide=(a,b)=>a/b;
