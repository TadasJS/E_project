import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BasicLayout } from '../layouts/BasicLayout';
import { UserLayout } from '../layouts/UserLayout';
import { Home } from '../pages/Home';
import { NoPage } from '../pages/NoPage';
import './App.css';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { UserProfile } from '../pages/UserProfile';


function App() {

  return (
   
    <BrowserRouter>
    <Routes>
        <Route Component={BasicLayout}>
          <Route index path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NoPage />} />  
       </Route>  
        <Route Component={UserLayout}>
          <Route path='/profile' element={<UserProfile />} />
        </Route>
        {/* <Route Component={AdminLayout}>
        </Route> */}
    </Routes>
           
  </BrowserRouter>
  )
}
export default App
