//## 🏁 Reto Final — Integrando todo

//Crea un programa que simule un cajero automático básico:

//- Define un `saldo` inicial de `$500.000`
//- Usando un bucle, simula 5 transacciones (decláralas como un array de números positivos o negativos)
//- Para cada transacción:
  //- Si es positiva → es un depósito
  //- Si es negativa → es un retiro
  //- Si un retiro supera el saldo disponible → imprime `"Fondos insuficientes"` y no lo apliques
//- Al final, imprime el saldo total.
let saldo = 500000;

let transacciones = [100000, -200000, -400000, 50000, -100000];

for (let i = 0; i < transacciones.length; i++) {
  let t = transacciones[i];

  if (t > 0) {
    // Depósito
    saldo += t;
    console.log("Depósito de $" + t + " | Nuevo saldo: $" + saldo);
  } else {
    // Retiro
    if (saldo + t < 0) {
      console.log("Retiro de $" + Math.abs(t) + " | Fondos insuficientes");
    } else {
      saldo += t;
      console.log("Retiro de $" + Math.abs(t) + " | Nuevo saldo: $" + saldo);
    }
  }
}

console.log("Saldo final: $" + saldo);