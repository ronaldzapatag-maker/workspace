//### Ejercicio 4.2 — if / else if / else
//Usando la misma variable `nota`, imprime una escala de calificaciones:
//- 90–100 → `"Excelente"`
//- 75–89 → `"Bueno"`
//- 60–74 → `"Suficiente"`
//- menor a 60 → `"Insuficiente"`
let nota = 95;
if (nota >= 90 && nota <= 100){
console.log("Excelente");
} else if(nota >= 75 && nota <= 89){
console.log ("bueno");
} else if (nota >= 60 && nota < 75){
console.log ("suficiente");
} else {
console.log("insuficiente")
}