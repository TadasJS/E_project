import { Outlet } from "react-router-dom";
import { UserHeader } from "../components/UserHeader";
import { Footer } from "../components/Footer";

export function UserLayout () {
    return(
        <>     
          <UserHeader />        
        <main >
          <Outlet />
        </main>
          <Footer/>
      </>
    )
}