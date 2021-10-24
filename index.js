// function toCelsius(f) {
//     return (5/9) * (f-32);
//   }
//   document.getElementById("demo").innerHTML = toCelsius(77);
let bill = 0
let tip = 0

function setBill(value) {
    bill = value
}

function setTip(value) {
    tip = value
}

function calculate(divider){
    let result = bill/tip
    document.getElementById("result1").innerHTML = "$  " + result.toFixed(2)
    result = bill/tip/divider
    document.getElementById("result2").innerHTML = "$  " + result.toFixed(2)
}