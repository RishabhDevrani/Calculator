var screen = document.getElementById("screen")
function appendvalue(value) {
    if (screen.value == '0' && screen.value == '.') {
        screen.value = value;
    }
    else {
        screen.value += value;
    }
}

function clearscreen() {
    screen.value = '';
}

function backspace() {
    screen.value = screen.value.slice(0,-1)
}

function calculate() {
    try {
        screen.value = eval(screen.value) || '';
    } catch (error) {
        screen.value="Error"
    }
}