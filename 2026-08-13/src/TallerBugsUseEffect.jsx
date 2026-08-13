/**
 * =========================================================
 * 🛠️ INFORME DE ENTREGA: TALLER DE USEEFFECT Y CICLO DE VIDA
 * =========================================================
 * 
 * Respuestas y análisis de los 4 bugs corregidos en App.jsx:
 * 
 * 🐛 BUG 1 — El reloj sigue corriendo aunque lo oculten
 * ----------------------------------------------------
 * - Comportamiento: El componente se desmontaba, pero los logs de "tick" seguían saliendo en consola.
 * - Causa raíz: 'setInterval' es un temporizador del navegador que corre fuera de React. Al no limpiarlo,
 *   permanecía en memoria ejecutándose infinitamente.
 * - Solución: Se agregó el retorno de la función de limpieza (cleanup): `return () => clearInterval(id);`.
 * - Impacto real: Esto previene fugas de memoria (Memory Leaks) en la aplicación.
 * 
 * 🐛 BUG 2 — El contador automático se queda pegado en 1
 * ------------------------------------------------------
 * - Comportamiento: El contador cambiaba de 0 a 1 y se congelaba en 1 para siempre.
 * - Causa raíz: Se conoce como "Stale Closure" (clausura obsoleta). El callback dentro de 'setInterval'
 *   capturó únicamente el valor inicial del estado (contador = 0) al tener el arreglo de dependencias vacío `[]`.
 * - Solución: Se cambió `setContador(contador + 1)` por la forma funcional `setContador((prev) => prev + 1)`.
 * 
 * 🐛 BUG 3 — El ancho de ventana duplica los mensajes
 * ---------------------------------------------------
 * - Comportamiento: Cada vez que se redimensionaba la ventana, se acumulaban los eventos e imprimían logs duplicados.
 * - Causa raíz: Faltaba remover el escuchador de eventos y el efecto tenía dependencias innecesarias que
 *   volvían a agregar event listeners repetidos.
 * - Solución: Se cambió el arreglo a `[]` y se agregó la limpieza `return () => window.removeEventListener('resize', manejarResize);`.
 * 
 * 🐛 BUG 4 — El nombre no cambia al elegir otro usuario
 * ----------------------------------------------------
 * - Comportamiento: Al pulsar "Usuario 2", la interfaz no reaccionaba y el nombre se quedaba en "Ana".
 * - Causa raíz: El arreglo de dependencias estaba vacío `[]`, por lo que el efecto sólo se ejecutaba
 *   durante la fase de Montaje y no reaccionaba ante cambios en la prop 'id'.
 * - Solución: Se incluyó 'id' dentro del arreglo de dependencias `[id]`.
 */

export default function TallerBugsUseEffectDoc() {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', background: '#f4f4f4', borderRadius: '8px' }}>
      <h2>📘 Documentación del Taller useEffect</h2>
      <p>Las soluciones activas del taller están ejecutándose directamente en el archivo <code>App.jsx</code>.</p>
      <p>Abre este archivo en tu editor de código para revisar el informe teórico de cada bug.</p>
    </div>
  );
}