import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function AdminLayout () {

  const ctx = useContext(UserContext)

    return(
        <>     
          <Header />        
        <main>
        {(ctx.user.role_name === '' ) && <h1>Sita puslapi gali matyti tik prisijunges Administratorius</h1>}
        {(ctx.user.role_name === 'admin') && <Outlet />}
        </main>
          <Footer/>
      </>
    )
}