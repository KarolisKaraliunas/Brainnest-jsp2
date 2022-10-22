
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function changePos() {
    var p = document.getElementById("result").value;
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
    var p = document.getElementById("result").value;
    const percentage = ((p/ 100) * p).toFixed(2)
    var q = percentage;
    document.getElementById("result").value = q;
}