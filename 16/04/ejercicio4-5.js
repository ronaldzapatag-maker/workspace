//### Ejercicio 4.5 — Validación de formulario
//Declara variables `usuario` (string) y `contrasena` (string).  
//- Si `usuario` está vacío o `contrasena` tiene menos de 8 caracteres, imprime el error correspondiente.
//- Si todo es válido, imprime `"Login exitoso"`.
let usuario = "Sebastian"; 
let contrasena = "4023534579"; 

if (usuario === "") {
  console.log("Error: el usuario está vacío");
} else if (contrasena.length < 8) {
  console.log("Error: la contraseña debe tener al menos 8 caracteres");
} else {
  console.log("Login exitoso");
}