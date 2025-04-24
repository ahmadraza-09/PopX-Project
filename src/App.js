import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainpage';
import LoginPage from './pages/loginpage';
import SignupPage from './pages/signuppage';
import ProfilePage from './pages/profilepage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
