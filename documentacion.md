-COMO SE DOCUMENTA CODIGO FRONTEND  Y CUAL  ES LA DIFERENCIA CON CÓDIGO BACKEND
Documentación Frontend
Se enfoca en componentes visuales, props y estado.

Componentes y Props: Uso de JSDoc o Typescript (/** @param {string} variant */).

Catálogo Visual: Storybook para probar botones, inputs y estados en vivo.

Flujo de UI: Documentar manejo de estado global (Redux/Zustand) y rutas.

Diferencia vs Backend

Frontend: Documenta lo que se ve y se toca (Props, componentes, estilos, eventos de usuario).

Backend: Documenta lo que se procesa y guarda (Endpoints de API, esquemas JSON, bases de datos, autenticación con Swagger/Postman).
  
  EJ-FRONTEND
  Frontend (React) —
  /** Botón reusable de la UI. Recibe tipo y evento click. */
const Boton = ({ tipo, onClick }) => (
  <button className={tipo} onClick={onClick}>Enviar</button>
);

EJ-Backend (API)

// GET /api/usuario -> Retorna { id: 1, nombre: "Ana" } (200 OK)
app.get('/api/usuario', (req, res) => {
  res.json({ id: 1, nombre: "Ana" });
});

-COMO SE DOCUMENTA CODIGO CSS 
Se documenta con comentarios /* ... */ directo en el archivo para explicar secciones, variables y hacks visuales.
/* --- SECCIÓN: BOTONES --- */

:root {
  --primary: #6366f1; /* Color principal de marca */
}

.modal {
  /* Fix para scroll en Safari iOS */
  -webkit-overflow-scrolling: touch; 
}
-Se documenta con comentarios simples (//) para notas rápidas o JSDoc (/** ... */) para describir funciones, parámetros y retornos.
// 1. NOTA RÁPIDA: Explica el "porqué" de una línea
const precioConIva = total * 1.19; // 19% de IVA según normativa actual

/**
 * 2. JSDoc: Describe funciones complejas, tipos y retornos
 * @param {string} email - Correo del usuario
 * @returns {boolean} True si el email es válido
 */
function validarEmail(email) {
  return email.includes('@');
}
-como se documenta codigo react en especifico
/** Tarjeta que muestra el perfil de usuario. */
interface Props {
  /** Nombre completo del usuario */
  nombre: string;
  /** Estado de conexión (opcional) */
  online?: boolean;
}

export const Tarjeta = ({ nombre, online = false }: Props) => (
  <div>
    <h3>{nombre}</h3>
    {/* Hack: detiene propagación del evento */}
    <span onClick={(e) => e.stopPropagation()}>
      {online ? "En línea" : "Desconectado"}
    </span>
  </div>
);
