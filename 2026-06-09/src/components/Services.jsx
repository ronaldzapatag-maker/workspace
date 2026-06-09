// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  Services.jsx
// ============================================================

// 🛠️ PASO 1: Define aquí tu array de servicios
const servicios = [
  {
    icono: '⚡',
    titulo: 'Instalaciones Residenciales',
    descripcion: 'Diseño e instalación de sistemas eléctricos completos para tu hogar con la máxima seguridad.',
  },
  {
    icono: '🏢',
    titulo: 'Mantenimiento Industrial',
    descripcion: 'Soporte técnico preventivo y correctivo para maquinarias y tableros de control.',
  },
  {
    icono: '🔌',
    titulo: 'Reparaciones Urgentes',
    descripcion: 'Atención inmediata para apagones, cortocircuitos y fallas eléctricas las 24 horas.',
  },
  {
    icono: '☀️',
    titulo: 'Paneles Solares',
    descripcion: 'Transición hacia la energía limpia instalando sistemas fotovoltaicos eficientes.',
  },
  {
    icono: '💡',
    titulo: 'Iluminación LED',
    descripcion: 'Proyectos de iluminación inteligente y de bajo consumo para interiores y exteriores.',
  },
  {
    icono: '🛡️',
    titulo: 'Certificaciones y Planos',
    descripcion: 'Elaboración de planos eléctricos y trámites de certificación bajo normativas vigentes.',
  },
];

function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo">Nuestros Servicios</h2>
          <p className="section-subtitulo text-muted">
            {/* 🛠️ TODO: Escribe una descripción corta de la sección */}
            Ofrecemos soluciones eléctricas profesionales, eficientes y seguras para tu hogar, comercio o industria.
          </p>
        </div>

        {/* 🛠️ PASO 2: Renderiza las tarjetas con servicios.map(...) */}
        <div className="row g-4">

          {/* TODO: Tu código .map() va aquí */}
          {servicios.map((servicio, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="fs-1 mb-3">{servicio.icono}</div>
                  <h3 className="card-title h5 fw-bold">{servicio.titulo}</h3>
                  <p className="card-text text-muted">{servicio.descripcion}</p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;