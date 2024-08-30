const solve=(Char)=>{
    let display = document.getElementById("display");
    display.value += Char;
}

const Clear=()=>{
    document.getElementById("display").value = "";
}

const backspace=()=>{
    let display=document.getElementById("display");
  display.value = display.value.slice(0,-1);
}

const result=()=>{
    let display= document.getElementById("display");
    let expression = display.value;
    display.value = eval(expression);
}
const sound=()=>{
    document.getElementById("sound").onplay();
}