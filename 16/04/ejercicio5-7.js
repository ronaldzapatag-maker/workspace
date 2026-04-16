//### Ejercicio 5.7 — Bucles anidados
//Imprime un cuadrado de asteriscos de 5x5 usando bucles anidados:
//```
//* * * * *
//* * * * *
//* * * * *
//* * * * *
//* * * * *
//```
let tamaño = 5;

for (let i = 0; i < tamaño; i++) {
  let fila = "";

  for (let j = 0; j < tamaño; j++) {
    fila += "* ";
  }

  console.log(fila);
}