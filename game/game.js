let score = 0;

let addMin1Val = Number(localStorage.getItem("addMin1Val"));
let addMax1Val = Number(localStorage.getItem("addMax1Val"));
let addMin2Val = Number(localStorage.getItem("addMin2Val"));
let addMax2Val = Number(localStorage.getItem("addMax2Val"));
let mulMin1Val = Number(localStorage.getItem("mulMin1Val"));
let mulMax1Val = Number(localStorage.getItem("mulMax1Val"));
let mulMin2Val = Number(localStorage.getItem("mulMin2Val"));
let mulMax2Val = Number(localStorage.getItem("mulMax2Val"));
let durationVal = Number(localStorage.getItem("durationVal")) || 120;
let operations = JSON.parse(localStorage.getItem("operations") || '["+","-","x","/"]');

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let currentProblem = { num1: 0, num2: 0, operation: "+" };

function makeProblem() {
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let n1, n2;
  
    if (operation === "+") {
      n1 = getRandomInt(addMin1Val, addMax1Val);
      n2 = getRandomInt(addMin2Val, addMax2Val);
  
    } else if (operation === "-") {
      n1 = getRandomInt(addMin1Val, addMax1Val);
      n2 = getRandomInt(addMin2Val, addMax2Val);
      if (n1 < n2) [n1, n2] = [n2, n1]; 
  
    } else if (operation === "x") {
      n1 = getRandomInt(mulMin1Val, mulMax1Val);
      n2 = getRandomInt(mulMin2Val, mulMax2Val);
  
    } else {
        const factor = getRandomInt(mulMin2Val, mulMax2Val);
        const divisor = getRandomInt(Math.max(1, mulMin1Val), mulMax1Val);
        n2 = divisor
        n1 = factor * divisor;
      }
      
  
    return { num1: n1, num2: n2, operation };
  }

function updateProblem(){
    currentProblem = makeProblem();
    console.log(problem);
    document.getElementById("problem").textContent = `${currentProblem.num1} ${currentProblem.operation} ${currentProblem.num2} = `;
}

function updateScore(){
    document.getElementById("score").textContent = `Score: ${score}`;
}
function runGame(){
    updateProblem();
    updateScore();
  
    const ans = document.getElementById("answer");
  
    ans.addEventListener("input", () => {
      const guess = Number(ans.value);
  
      const ops = {
        "+": (a,b)=>a+b,
        "-": (a,b)=>a-b,
        "x": (a,b)=>a*b,
        "/": (a,b)=>a/b
      };

      const correct = ops[currentProblem.operation](currentProblem.num1, currentProblem.num2);
  
      if (guess === correct) {
        score++;
        updateScore();
        ans.value = "";
        updateProblem();
      }
    });
  
    ans.focus();
  }
  
function updateTimer(){
    let timer = document.getElementById("timer");
    timer.textContent = `Seconds left: ${durationVal}`;
    setInterval(() => {
        durationVal--;
        timer.textContent = `Seconds left: ${durationVal}`;
        if (durationVal === 0){
            endGame();
        }
    }, 1000);
    if (durationVal === 0){
        endGame();
    }
}

runGame();
updateTimer();

function endGame(){
    localStorage.setItem("score", score);
    window.location.href = "../end/end.html";
}