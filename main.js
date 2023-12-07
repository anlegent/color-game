function startGame() {

}
let btnStart = document.querySelector("#startBtn");
btnStart.addEventListener("click",startGame);

function pickred() {
document.querySelector("#divRouge").style.backgroundColor ="red";
}

function pickblue() {
document.querySelector("#divBleu").style.backgroundColor ="blue";
}

function pickyellow() {
document.querySelector("#divJaune").style.backgroundColor ="yellow";    
}

function pickgreen(){
document.querySelector("#divVert").style.backgroundColor ="green";
}