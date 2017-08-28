console.log("js loaded");
function sayHello(){
    console.log("hi");
}
function setH1(string) {
    var h1EL = document.querySelector('h1');
    h1.innerText = string;
}

function showGreeting(){
    setH1(sayHello("Nate"));
}

var buttonEL = document.querySelector('button');
buttonEL.addEventListener('click', showGreeting);