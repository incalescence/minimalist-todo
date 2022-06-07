let sum = 0;

function addNumber(element) {
    sum = sum + element;
}

function printSum() {
    console.log(sum);
    document.getElementById("answer").innerHTML = sum;
}

