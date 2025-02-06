import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BasicLayout } from '../layouts/BasicLayout';
import { UserLayout } from '../layouts/UserLayout';
import { Home } from '../pages/Home';
import { NoPage } from '../pages/NoPage';
import './App.css';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { UserProfile } from '../pages/UserProfile';
import { UserProvider } from '../context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route Component={BasicLayout}>
            <Route index path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route Component={UserLayout}>
            <Route path="/profile" element={<UserProfile />} />
          </Route>
          {/* <Route Component={AdminLayout}>
              </Route> */}
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
export default App;
