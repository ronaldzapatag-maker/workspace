import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import Login from './Login'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    // 1. Obtener sesión actual al cargar
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // 2. Escuchar cambios de estado (Login / Logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      }
    )

    // 3. Limpiar el listener al desmontar el componente
    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setSession(null)
  }

  // Si no hay usuario logueado, muestra el formulario de Login
  if (!session) {
    return <Login onLogin={setSession} />
  }

  // Si está logueado, muestra la pantalla de bienvenida
  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <h2>Bienvenido, {session.user.email}</h2>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}

export default App