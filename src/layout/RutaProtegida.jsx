import { Outlet, Navigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useAuth from "../hooks/useAuth"


const RutaProtegida = () => {
    //Se manda llamar la funcion useAuth del hook creado para rutas con autenticacion
    const { auth, cargando } = useAuth()    
    if(cargando) return 'cargando...'
  return (
    <>
        <Header />        
            {auth?._id /*auth.veterinario?._id*/ ? (
                <main className="container mx-auto mt-10">
                    <Outlet />
                </main>
           ): <Navigate to="/" />}
        <Footer />
    </>
  )
}

export default RutaProtegida