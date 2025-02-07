import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { AdvertList } from "../pages/AdvertList";

export function UserLayout () {

  const ctx = useContext(UserContext);

    return(
        <>     
          <Header />        
        <main className="regColor">
        {(ctx.user.role_name === '' ) && <h1>Sita puslapi gali matyti tik prisijunges vartotojoas</h1>}
        {(ctx.user.role_name === 'user' ||ctx.user.role_name === 'admin') && <Outlet />}
        {/* <AdvertList /> */}
        </main>
          <Footer/>
      </>
    )
}