function enter(a) {
    document.getElementById('inputArea').value += a;
}

function calculate() {
    let a = document.getElementById('inputArea').value;
    let b = eval(a)
    document.getElementById("inputArea").value = b ;
}
function clr() {
    document.getElementById('inputArea').value = '';
}