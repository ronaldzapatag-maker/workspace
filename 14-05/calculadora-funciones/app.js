// =====================================
// CALCULADORA CON FUNCIONES
// =====================================

// Función suma
function sumar(a, b) {
    return a + b;
}

// Función resta
function restar(a, b) {
    return a - b;
}

// Función multiplicación
function multiplicar(a, b) {
    return a * b;
}

// Función división
function dividir(a, b) {
    return a / b;
}

// =====================================
// LLAMADO DE FUNCIONES
// =====================================

console.log("Resultado suma:");
console.log(sumar(10, 77));

console.log("----------------");

console.log("Resultado resta:");
console.log(restar(10, 57));

console.log("----------------");

console.log("Resultado multiplicación:");
console.log(multiplicar(10, 120));

console.log("----------------");

console.log("Resultado división:");
console.log(dividir(10, 50));

// Función potencia
function potencia(a, b) {
    return a ** b;
}

console.log(potencia(100, 200));
 
// Función número mayor
function mayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(mayor(10, 4));
// Función división
function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    } else {
        return a / b;
    }
}

console.log(dividir(10, 10));
console.log(dividir(10, 5));