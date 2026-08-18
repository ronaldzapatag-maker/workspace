1) HTML
- ¿Qué es una etiqueta HTML?

R1// Una etiqueta HTML es una palabra o conjunto de caracteres escrita entre signos < > que sirve para crear y organizar elementos de una página web..

R2// Una etiqueta HTML es una instrucción que utilizamos para indicarle al navegador qué elemento queremos mostrar en una página web. Por ejemplo, usamos <h1> para títulos y <p> para párrafos.

Ejemplos:
<h1> → “pon aquí un título”
<p> → “pon aquí un párrafo”
<img> → “pon aquí una imagen”
<a> → “pon aquí un enlace”
<button> → “pon aquí un botón”
- ¿Qué etiquetas componen la estructura de un archivo HTML?

R// La estructura básica de un archivo HTML está formada principalmente por DOCTYPE, html, head y body. Dentro de estas etiquetas podemos agregar otros elementos, como títulos, párrafos, imágenes y enlaces. El head contiene información de la página y el body contiene el contenido que verá el usuario.

Ejemplos:
<!DOCTYPE html> → Indica que el documento utiliza HTML5.
<html> → Es la etiqueta principal y contiene todo el documento.
<head> → Contiene información de configuración de la página.
<title> → Define el título que aparece en la pestaña del navegador.
<body> → Contiene todo el contenido que normalmente ve el usuario.
<h1> → Crea un título principal.
<p> → Crea un párrafo.

EXTRA:

html → documento completo
head → información de la página
body → contenido visible
- Explicar 5 etiquetas de texto HTML

R// Cinco etiquetas de texto importantes en HTML son <h1>, <h2>, <p>, <strong> y <em>. Las etiquetas h1 y h2 sirven para títulos y subtítulos, p para párrafos, strong para destacar información importante y em para dar énfasis a una palabra o frase

EJEMPLO:
<h1>Mi página web</h1>

TITULO PRINCIPAL

<h2>Información</h2>

Subtítulo

<p>HTML permite crear la estructura de una página web.</p>

PÁRRAFO

<p>Es muy importante aprender <strong>HTML</strong>.</p>

Texto importante

<p>HTML es <em>fundamental</em> para una página web.</p>

Texto enfatizado

EXTRA EJEMPLO:

h1 = título → h2 = subtítulo → p = párrafo → strong = importante → em = énfasis.

- ¿Cómo funciona un Link en .HTML y qué etiquetas se usan?

R1// En HTML, un link (enlace) sirve para que el usuario pueda hacer clic en un texto, imagen u otro elemento y ir a otra página, sitio web, archivo o sección.

R2// En HTML, un link o enlace se crea principalmente con la etiqueta <a>. Esta etiqueta utiliza el atributo href, que indica la dirección a la que queremos llevar al usuario. Por ejemplo, podemos crear un enlace hacia otra página web o hacia otra página de nuestro propio proyecto

EJEMPLO:

<a> La etiqueta <a> significa anchor (ancla) y se utiliza para crear enlaces

(IMPORTANTE) "href" href indica a dónde debe llevar el enlace.

EJEMPLO DE FUNCIÓN:
<a href="https://www.google.com">Ir a Google</a>
<a href="contacto.html">Contactarme</a>

EXTRA:

<a> → crea el enlace.
href="https://www.google.com" → indica el destino.
Ir a Google → es el texto que verá y podrá pulsar el usuario.
</a> → cierra la etiqueta.
2) INVESTIGAR
- CSS en 3 renglones

R// CSS (Cascading Style Sheets) es un lenguaje que se utiliza para darle estilo y diseño a las páginas web.

Permite cambiar colores, tamaños, fuentes, espacios y posiciones de los elementos HTML.

Trabaja junto con HTML para hacer que una página sea más atractiva, organizada y visualmente agradable.

- Selectores CSS

R// Los selectores CSS sirven para indicar qué elementos HTML queremos modificar o darles estilo.

Por ejemplo, podemos seleccionar una etiqueta, una clase o un identificador para cambiar su color, tamaño o diseño.

Algunos selectores comunes son p, .clase y #id.

EJEMPLO:
p {
  color: blue;
}

porque: Aquí p selecciona todos los párrafos y hace que su texto sea azul.

- ¿Cómo una etiqueta puede ser modificada por múltiples selectores CSS?

R// Una etiqueta HTML puede ser modificada por múltiples selectores CSS. Cada selector puede aplicar diferentes propiedades, como color, tamaño o tipo de letra. CSS combina esas reglas para darle el estilo final al elemento

EJEMPLO:
<p class="texto" id="principal">Hola mundo</p>
EXTRA:
p {
    font-size: 20px;
}


.texto {
    color: blue;
}


#principal {
    font-weight: bold;
}
EJEMPLO DE FUNCIÓN:
p → cambia el tamaño.
.texto → cambia el color.
#principal → pone el texto en negrita.
3) EXPLICAR CON TUS PROPIAS PALABRAS
- ¿Qué es un componente de React?

R1// Un componente de React es una parte de una página web que podemos crear y reutilizar. Puede representar, por ejemplo, un botón, un menú, una tarjeta o un formulario. Cada componente tiene su propia estructura y puede tener diferentes funciones o información.

R2// Para mí, un componente de React es como una pieza de una página web. En lugar de hacer toda la página de una sola vez, podemos dividirla en partes, como un botón, un menú o una tarjeta, y después reutilizar esas partes cuando las necesitemos.

Ejemplo:

↳ 🔝 Barra de navegación
↳ 📦 Tarjeta de producto
↳ 🔘 Botón de comprar
↳ 🦶 Pie de página

EXTRA:

React = construir la página con piezas reutilizables.

- ¿Cómo los componentes se relacionan con las etiquetas HTML, diferencias y parecidos?

R// Los componentes de React se relacionan con HTML porque dentro de un componente podemos utilizar etiquetas HTML para construir la interfaz. La diferencia es que una etiqueta HTML representa un elemento, mientras que un componente de React puede ser una parte completa y reutilizable de una página. Por ejemplo, un componente de producto puede contener un título, una imagen, un precio y un botón

HTML / React
HTML: Utiliza etiquetas como <h1>, <p>, <div>.
React: Utiliza componentes como Saludo, Menu o Producto.
HTML: Las etiquetas son elementos básicos de una página.
React: Los componentes son partes reutilizables de una aplicación.
HTML: Por sí solo estructura el contenido.
React: Permite crear interfaces más dinámicas e interactivas.
HTML: Una etiqueta normalmente representa un elemento.
React: Un componente puede contener muchas etiquetas y lógica.

EXTRA:

HTML = piezas básicas.

👉 React = componentes que pueden juntar muchas piezas y reutilizarlas.

4) AVERIGUAR
- Tipos de variables en un componente de React

R// En un componente de React podemos manejar diferentes tipos de variables. Las variables normales sirven para guardar información, las props permiten recibir datos de otros componentes y el state sirve para guardar datos que pueden cambiar durante el funcionamiento de la aplicación. Por ejemplo, un contador puede utilizar un state para aumentar su número cada vez que presionamos un botón.

EJEMPLO: Variables normales (const y let)
const nombre = "Juan";
let edad = 17;
Props (recibe desde otro componente.):
function Saludo({ nombre }) {
  return <h1>Hola {nombre}</h1>;
}
State (useState): (cambiar mientras se utiliza la página)
const [contador, setContador] = useState(0);

EXTRA:

Variable → guarda información
Props → recibe información
State → guarda información que puede cambiar
- ¿Qué son los Props de un componente?

R1// Los props son datos que un componente de React recibe de otro componente. Sirven para enviar información y hacer que un mismo componente pueda funcionar con diferentes datos. Por ejemplo, podemos tener un componente de saludo y pasarle como prop el nombre de una persona

EJEMPLO:
function Saludo({ nombre }) {
  return <h1>Hola, {nombre}</h1>;
}


<Saludo nombre="Carlos" />
<Saludo nombre="Laura" />

EXTRA:

Saludo → es el componente.
nombre → es un prop.
"Carlos" y "Laura" → son los valores que recibe el componente

Props = información que un componente recibe.

- ¿Qué es useState?

R// useState es una función de React que permite guardar y actualizar información dentro de un componente. Por ejemplo, se puede utilizar para hacer un contador, donde cada vez que presionamos un botón cambia el número que aparece en pantalla.

EJEMPLO:
import { useState } from "react";


function Contador() {
  const [numero, setNumero] = useState(0);


  return (
    <button onClick={() => setNumero(numero + 1)}>
      {numero}
    </button>
  );
}

EXTRA:

numero → guarda el valor actual.
setNumero → permite cambiar ese valor.
useState(0) → comienza el contador en 0.
Al presionar el botón, setNumero aumenta el número.

ejemplo: useState = guardar un dato + poder cambiarlo.

- ¿Qué es useEffect?

R// useEffect es una función de React que permite ejecutar acciones como respuesta a cambios o eventos relacionados con un componente. Por ejemplo, podemos usarlo para realizar una acción cuando un componente aparece en la pantalla o cuando cambia un dato.

EJEMPLO:
import { useEffect } from "react";


function MiComponente() {


  useEffect(() => {
    console.log("El componente apareció");
  }, []);


  return <h1>Hola</h1>;
}

EXTRA:

useState → guarda y cambia datos.
useEffect → ejecuta acciones cuando ocurre algo.
- Diferencias entre useState y useEffect

La diferencia es que useState se utiliza para guardar y actualizar datos dentro de un componente, mientras que useEffect se utiliza para ejecutar acciones cuando ocurre un cambio o después de que el componente se muestra. Por ejemplo, useState puede guardar el número de un contador y useEffect puede detectar cuando ese número cambia

useState / USEEFFECT
useState: Sirve para guardar y cambiar datos.
USEEFFECT: Sirve para ejecutar acciones.
useState: Maneja el estado de un componente.
USEEFFECT: Responde a cambios o situaciones del componente.
useState: Puede hacer que el componente se actualice cuando cambia su estado.
USEEFFECT: Se utiliza para acciones que ocurren después de un renderizado o cuando cambian ciertas dependencias.
useState: Ejemplo: contador, nombre, edad.
USEEFFECT: Ejemplo: cargar datos, mostrar un mensaje en consola o reaccionar a un cambio.
EJEMPLO:

useState se encarga de guardar el número y permitir cambiarlo.

const [numero, setNumero] = useState(0);

(useEffect puede detectar que numero cambió y ejecutar una acción.)

useEffect(() => {
  console.log("El número cambió");
}, [numero]);

EXTRA:

useState = guardar/cambiar datos
useEffect = hacer algo cuando ocurre un cambio
