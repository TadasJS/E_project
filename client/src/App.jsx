import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BasicLayout } from '../layouts/BasicLayout';
import { UserLayout } from '../layouts/UserLayout';
import { AdminLayout } from '../layouts/AdminLayout';
import { Home } from '../pages/Home';
import { NoPage } from '../pages/NoPage';
import './App.css';
import '../../client/pages/PageStyle.css';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { UserProfile } from '../pages/UserProfile';
import { UserProvider } from '../context/UserContext';
import { Admin } from '../pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route Component={BasicLayout}>
            <Route index path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route Component={UserLayout}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<UserProfile />} />
          </Route>
          <Route Component={AdminLayout}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/admin" element={<Admin />} />
        </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
export default App;
