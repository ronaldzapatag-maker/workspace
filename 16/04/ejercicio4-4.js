//### Ejercicio 4.4 — Condiciones anidadas
//Declara las variables `edad` y `tienePermiso` (boolean). Imprime:
//- Si tiene 18 o más **y** tiene permiso → `"Puede entrar"`
//- Si tiene 18 o más pero **no** tiene permiso → `"Necesita permiso"`
//- Si es menor de 18 → `"No puede entrar"`

let edad = 14; 
let tienePermiso = false; 

if (edad >= 20) {
  if (tienePermiso) {
    console.log("Puede entrar");
  } else {
    console.log("Necesita permiso");
  }
} else {
  console.log("No puede entrar");
}