import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BasicLayout } from '../layouts/BasicLayout'
import { Home } from '../pages/Home'
import { NoPage } from '../pages/NoPage'
import './App.css'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'

function App() {

  return (
   
    <BrowserRouter>
    <Routes>
        <Route Component={BasicLayout}>
          <Route index path='/' element={<Home />} />
          <Route index path='/login' element={<Login />} />
          <Route index path='/register' element={<Register />} />
          <Route path='*' element={<NoPage />} />    
        </Route>
    </Routes>
  </BrowserRouter>
  )
}
export default App
