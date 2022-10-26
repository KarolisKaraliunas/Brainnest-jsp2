
let counter = 0;

function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
    document.getElementById("0").disabled = false;
    document.getElementById("00").disabled = false;
}

function clearScreen() {
    document.getElementById("result").value = "";
    document.getElementById("0").disabled = false;
    document.getElementById("00").disabled = false;
}

function display(value) {
    document.getElementById("result").value += value;
    document.getElementById("0").disabled = false;
    document.getElementById("00").disabled = false;
    let r = document.getElementById("result").value;
    if (r.includes(".")) {
        counter++;
    }
    if (counter >= 1) { document.getElementById(".").disabled = true;}
}

function calculate() {
    dotCounter = 0;
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q.toFixed(4);
    document.getElementById("0").disabled = false;
    document.getElementById("00").disabled = false;
}

function clearScreen() {
    document.getElementById("result").value = "";
    document.getElementById("0").disabled = false;
    document.getElementById("00").disabled = false;
    counter = 0;
}

function changePos() {
    let p = document.getElementById("result").value;
    document.getElementById("0").disabled = false;
    document.getElementById("00").disabled = false;
    if (1/(p*0)===1/0) {
        q = -p;
        console.log(p);
    } else {
        q = p
        console.log(p);
    }
    document.getElementById("result").value = q;
}

function percetage() {
    let p = document.getElementById("result").value;
    document.getElementById("0").disabled = false;
    document.getElementById("00").disabled = false;
    const percentage = ((p/ 100) * p).toFixed(2);
    let q = percentage;
    document.getElementById("result").value = q;
}

function backspace () {
    let p = document.getElementById("result").value;
    document.getElementById("0").disabled = false;
    document.getElementById("00").disabled = false;
    let q1 = p.slice(0, p.length-1);
    document.getElementById("result").value = q1;
}


document.getElementById("0").disabled = true;
document.getElementById("00").disabled = true;


window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return;
    }
  
    switch (event.key) {
        case "1":
            document.getElementById("result").value = document.getElementById("result").value + "1" ;
        break;
        case "2":
            document.getElementById("result").value = document.getElementById("result").value + "2";
        break;
        case "3":
            document.getElementById("result").value = document.getElementById("result").value + "3";
        break;
        case "4":
            document.getElementById("result").value = document.getElementById("result").value + "4";
        break;
        case "5":
            document.getElementById("result").value = document.getElementById("result").value + "5";
        break;
        case "6":
            document.getElementById("result").value = document.getElementById("result").value + "6";
        break;
        case "7":
            document.getElementById("result").value = document.getElementById("result").value + "7";
        break;
        case "8":
            document.getElementById("result").value = document.getElementById("result").value + "8";
        break;
        case "9":
            document.getElementById("result").value = document.getElementById("result").value + "9";
        break;
        case "-":
            document.getElementById("result").value = document.getElementById("result").value + "-";
        break;
        case "*":
            document.getElementById("result").value = document.getElementById("result").value + "*";
        break;
        case "/":
            document.getElementById("result").value = document.getElementById("result").value + "/";
        break;
        case "+":
            document.getElementById("result").value = document.getElementById("result").value +"+";
        break;
        case ".":
            document.getElementById("result").value = document.getElementById("result").value + ".";
        break;
        case "0":
            document.getElementById("result").value = document.getElementById("result").value + "0";
        case "Enter":
            calculate();
        break;
        
        default:
        return; 
    }
  
    event.preventDefault();
  }, true);