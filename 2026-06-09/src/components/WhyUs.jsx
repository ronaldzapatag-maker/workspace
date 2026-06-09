// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  WhyUs.jsx  (¿Por qué elegirnos?)
// ============================================================

// 🛠️ PASO 1: Define tu array de razones
const razones = [
  { 
    icono: '🏆', 
    titulo: 'Experiencia Certificada', 
    descripcion: 'Más de 10 años brindando soluciones eléctricas seguras y normadas con técnicos altamente calificados.' 
  },
  { 
    icono: '⏱️', 
    titulo: 'Atención 24/7 y Puntualidad', 
    descripcion: 'Entendemos que las emergencias no esperan. Estamos listos para ayudarte a cualquier hora, siempre a tiempo.' 
  },
  { 
    icono: '🛡️', 
    titulo: 'Garantía por Escrito', 
    descripcion: 'Todos nuestros proyectos y reparaciones cuentan con respaldo total para tu absoluta tranquilidad.' 
  },
  { 
    icono: '💵', 
    titulo: 'Precios Justos y Transparentes', 
    descripcion: 'Presupuestos detallados sin sorpresas ni costos ocultos antes de iniciar cualquier tipo de trabajo.' 
  },
];

function WhyUs() {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Columna izquierda: imagen */}
          <div className="col-lg-5">
            {/* 🛠️ TODO: Agrega <img> con className="img-fluid rounded shadow" */}
            <img 
              src="https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec" 
              alt="Equipo de VoltTec trabajando" 
              className="img-fluid rounded shadow" 
            />
          </div>

          {/* Columna derecha: texto y razones */}
          <div className="col-lg-7">
            <h2 className="section-titulo mb-3">¿Por qué elegirnos?</h2>

            {/* 🛠️ TODO: Escribe 2-3 párrafos sobre la empresa */}
            <p className="text-muted">
              En <strong>VoltTec</strong> nos apasiona encender la seguridad y la innovación en cada espacio. Nos hemos consolidado como líderes en el sector eléctrico gracias a nuestro compromiso inquebrantable con la calidad, la ingeniería de vanguardia y el respeto riguroso por las normativas vigentes.
            </p>
            <p className="text-muted mb-4">
              Ya sea que necesites una instalación residencial compleja, optimizar el consumo energético de tu empresa o resolver una falla crítica a medianoche, nuestro equipo humano está equipado con las herramientas y el conocimiento para superar tus expectativas.
            </p>

            {/* 🛠️ PASO 2: Renderiza las razones con .map() */}
            <ul className="list-unstyled">
              {/* TODO: razones.map(...) */}
              {razones.map((razon, index) => (
                <li key={index} className="d-flex align-items-start mb-3">
                  <div className="fs-3 me-3 text-primary" style={{ minWidth: '40px' }}>
                    {razon.icono}
                  </div>
                  <div>
                    <h4 className="h5 mb-1 fw-bold">{razon.titulo}</h4>
                    <p className="text-muted">{razon.descripcion}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;