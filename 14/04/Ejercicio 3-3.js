//### Ejercicio 3.3 - Búsqueda en strings 
//Declara ˋlet email = "usuario@dominio.com"ˋ.
//-¿Incluye el carácter ˋ@ˋ?
//-¿Con que índice empieza ˋ"dominio"ˋ?
//- ¿Termina con ˋ".com"ˋ?

//java script tiene una funcion llamada includes
let email = "usuario@DOMImplementation.com";
//incluye el caracter @
console.log("El texto incluye @:",email.incluide("@"));
//con qué índice empieza "dominio" usando indexof 
console.log("El texto comienza con:",email.indexOf("dominio"));
//Termina con .com usando ensWith
console.log("El texto termina con .com",email.endsWith(".com"));