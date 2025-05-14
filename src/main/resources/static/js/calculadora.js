var display = document.getElementById('display');

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        alert("Error en la expresión");
    }
}

function sqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        alert("Error al calcular raíz cuadrada");
    }
}

function log() {
    try {
        display.value = Math.log(eval(display.value));
    } catch {
        alert("Error al calcular logaritmo");
    }
}

function power() {
    try {
        var base = eval(display.value);
        var exponent = prompt("Ingresa el exponente:");
        if (exponent !== null) {
            display.value = Math.pow(base, parseFloat(exponent));
        }
    } catch {
        alert("Error al calcular potencia");
    }
}