var css = document.querySelector("h3");
var back = document.querySelector(".back");
var chisom = document.querySelector(".chisom");
var body = document.getElementById("gradient");
function setGradient(){
    body.style.background = 
    "linear-gradient(to right,"+ 
    back.value+","+ chisom.value+")";
    css.textContent = body.style.background+";";
}
back.addEventListener("input", setGradient);
chisom.addEventListener("input", setGradient);

