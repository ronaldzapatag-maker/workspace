///### Ejercicio 3.5 — Split y Join
//Declara `let csv = "manzana,pera,uva,mango,banano"`.  
//- Convierte el string en un array separando por coma.
//- Imprime cuántos elementos tiene el array.
//- Une el array de nuevo con ` - ` como separador
let csv = "manzana,tomate,sandia,piña,banano";
let separados= csv.split(",");
console.log("El string tiene", separados.length);
console.log(separados.join("-"));