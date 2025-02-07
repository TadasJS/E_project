import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function BasicLayout () {
    return(
        <>     
          <Header />        
        <main className="regColor">
          <Outlet />
        </main>
          <Footer/>
      </>
    )
}