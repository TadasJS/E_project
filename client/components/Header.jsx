import { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { UserContext } from "../context/UserContext";

export function Header () {

const navigate = useNavigate();
const ctx = useContext(UserContext)

function navLogin() {
  navigate('/login');
};
function navRegister() {
  navigate('/register');
};

function handleLogout () {
  ctx.logoutUser()
  navigate('/')
}
    return(
        <>
 <header className=" headerColor d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <Link to='/' type="text" className="nav-link px-2" >Registracija</Link>
      <Link to='/profile' type="text" className="nav-link px-2" >Profile</Link>
      <Link to='/admin' type="text" className="nav-link px-2" >Admin</Link>
      <Link to='/' type="text" className="nav-link px-2" >Puslapis3</Link>
      {ctx.user.role_name === 'admin' && <Link to='/nopage' type="text" className="nav-link px-2" >NoPage</Link>}
       
      </ul>

      <div className="col-md-3 text-end me-3">
      {ctx.user.role_name === '' && <button type="button" onClick={navRegister} className="btn btn-outline-primary me-2">Register</button>}
        {ctx.user.role_name === '' && <button type="button" onClick={navLogin} className="btn btn-outline-primary me-2">Login</button>}
        {(ctx.user.role_name === 'user' || ctx.user.role_name === 'admin') && <button to='/login' onClick={handleLogout} type="button" className="btn btn-primary ms-3">Logout</button> }
      </div>
    </header>
    </>
    )
}