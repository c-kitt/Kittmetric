const addMin1 = document.getElementById("addMin1");
const addMax1 = document.getElementById("addMax1");
const addMin2 = document.getElementById("addMin2");
const addMax2 = document.getElementById("addMax2");
const mulMin1 = document.getElementById("mulMin1");
const mulMax1 = document.getElementById("mulMax1");
const mulMin2 = document.getElementById("mulMin2");
const mulMax2 = document.getElementById("mulMax2");
const duration = document.getElementById("duration");

const addCheck = document.getElementById("addCheck");
const subCheck = document.getElementById("subCheck");
const multCheck = document.getElementById("multCheck");
const divCheck = document.getElementById("divCheck");

let addMin1Val, addMax1Val, addMin2Val, addMax2Val, mulMin1Val, mulMax1Val, mulMin2Val, mulMax2Val, durationVal;
let addCheckVal, subCheckVal, multCheckVal, divCheckVal;

let operations = [];

function saveAll(){
    addMin1Val = Number(addMin1.value);
    addMax1Val = Number(addMax1.value);
    addMin2Val = Number(addMin2.value);
    addMax2Val = Number(addMax2.value);
    mulMin1Val = Number(mulMin1.value);
    mulMax1Val = Number(mulMax1.value);
    mulMin2Val = Number(mulMin2.value);
    mulMax2Val = Number(mulMax2.value);
    durationVal = Number(duration.value);

    addCheckVal = addCheck.checked;
    subCheckVal = subCheck.checked;
    multCheckVal = multCheck.checked;
    divCheckVal = divCheck.checked;
}

function saveAllToLocalStorage(){
    localStorage.setItem("addMin1Val", addMin1Val);
    localStorage.setItem("addMax1Val", addMax1Val);
    localStorage.setItem("addMin2Val", addMin2Val);
    localStorage.setItem("addMax2Val", addMax2Val);
    localStorage.setItem("mulMin1Val", mulMin1Val);
    localStorage.setItem("mulMax1Val", mulMax1Val);
    localStorage.setItem("mulMin2Val", mulMin2Val);
    localStorage.setItem("mulMax2Val", mulMax2Val);
    localStorage.setItem("durationVal", durationVal);
    
    localStorage.setItem("addCheckVal", addCheckVal);
    localStorage.setItem("subCheckVal", subCheckVal);
    localStorage.setItem("multCheckVal", multCheckVal);
    localStorage.setItem("divCheckVal", divCheckVal);

    localStorage.setItem("operations", JSON.stringify(operations));
}

document.getElementById("start-button").addEventListener("click", startGame);

function determineOperations(){
    if (addCheckVal){
        operations.push("+");
    }
    if (subCheckVal){
        operations.push("-");
    }
    if (multCheckVal){ 
        operations.push("x");
    }
    if (divCheckVal){
        operations.push("/");
    }
}

function startGame(){
    operations = [];
    saveAll();
    determineOperations();
    saveAllToLocalStorage();

    window.location.href = "../game/game.html";
}


