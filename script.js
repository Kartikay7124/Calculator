function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    let display = document.getElementById('display').innerText;
    if (display.length > 1) {
        document.getElementById('display').innerText = display.slice(0, -1);
    } else {
        document.getElementById('display').innerText = '0';
    }
}

function appendToDisplay(value) {
    let display = document.getElementById('display').innerText;
    if (display === '0') {
        document.getElementById('display').innerText = value;
    } else {
        document.getElementById('display').innerText += value;
    }
}

function calculateResult() {
    let display = document.getElementById('display').innerText;
    try {
        document.getElementById('display').innerText = eval(display);
    } catch {
        document.getElementById('display').innerText = 'Error';
    }
}
