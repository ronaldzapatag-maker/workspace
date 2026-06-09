import { useState } from 'react';

// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  Contact.jsx
// ============================================================

function Contact() {
  // RETO ADICIONAL: Estado para manejar el formulario de forma controlada
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Alerta mostrando los datos capturados
    alert(`¡Formulario enviado con éxito! 🎉\n\nNombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\nServicio: ${formData.servicio}\nMensaje: ${formData.mensaje}`);
    
    // Opcional: Limpiar el formulario después del envío
    setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo text-white">Contáctenos</h2>
          <p className="text-light opacity-75">
            {/* 🛠️ TODO: Escribe un texto invitando al contacto */}
            ¿Tienes un proyecto en mente o una urgencia eléctrica? Déjanos tus datos y te responderemos en minutos.
          </p>
        </div>

        <div className="row g-5">

          {/* Columna izquierda: información de contacto */}
          <div className="col-lg-4">
            <h4 className="mb-4">Información de contacto</h4>
            {/* 🛠️ TODO: Lista con 📍 dirección, 📞 teléfono, 📧 email, 🕐 horario */}
            <ul className="list-unstyled lh-lg">
              <li className="mb-3">
                <span className="fs-4 me-2">📍</span> 
                <strong>Dirección:</strong> Av. de la Energía 456, Parque Industrial
              </li>
              <li className="mb-3">
                <span className="fs-4 me-2">📞</span> 
                <strong>Teléfono:</strong> +1 (555) 123-4567
              </li>
              <li className="mb-3">
                <span className="fs-4 me-2">📧</span> 
                <strong>Email:</strong> contacto@volttec.com
              </li>
              <li className="mb-3">
                <span className="fs-4 me-2">🕐</span> 
                <strong>Horario:</strong> Lun - Vie: 8:00 AM - 6:00 PM (Soporte de emergencias 24/7)
              </li>
            </ul>
          </div>

          {/* Columna derecha: formulario */}
          <div className="col-lg-8">
            <div className="bg-white text-dark rounded-3 p-4">
              {/* Añadimos la etiqueta form para manejar el submit */}
              <form onSubmit={handleSubmit} className="row g-3">

                {/* Campo: Nombre */}
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label fw-bold">Nombre Completo</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="nombre" 
                    name="nombre"
                    placeholder="Juan Pérez" 
                    value={formData.nombre}
                    onChange={handleChange}
                    required 
                  />
                </div>

                {/* Campo: Email */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-bold">Correo Electrónico</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    placeholder="juan.perez@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>

                {/* Campo: Teléfono */}
                <div className="col-md-6">
                  <label htmlFor="telefono" className="form-label fw-bold">Teléfono de Contacto</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    id="telefono" 
                    name="telefono"
                    placeholder="+1 (555) 000-0000" 
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>

                {/* Campo: Tipo de servicio — usa <select> con 5+ opciones */}
                <div className="col-md-6">
                  <label htmlFor="servicio" className="form-label fw-bold">Tipo de Servicio</label>
                  <select 
                    className="form-select" 
                    id="servicio" 
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Selecciona una opción...</option>
                    <option value="instalacion">Instalaciones Residenciales</option>
                    <option value="mantenimiento">Mantenimiento Industrial</option>
                    <option value="reparacion">Reparación de Emergencia 24/7</option>
                    <option value="paneles_solares">Instalación de Paneles Solares</option>
                    <option value="iluminacion">Proyecto de Iluminación LED</option>
                  </select>
                </div>

                {/* Campo: Mensaje — usa <textarea> */}
                <div className="col-12">
                  <label htmlFor="mensaje" className="form-label fw-bold">Cuéntanos más sobre tu requerimiento</label>
                  <textarea 
                    className="form-control" 
                    id="mensaje" 
                    name="mensaje"
                    rows="4" 
                    placeholder="Escribe los detalles de tu consulta aquí..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Botón enviar */}
                <div className="col-12">
                  <button type="submit" className="btn btn-warning w-100 fw-bold py-2 text-uppercase">
                    Enviar Mensaje
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;