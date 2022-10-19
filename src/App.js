import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from './pages/Home'
import Surgery from './pages/Surgery'
import Create from './pages/Create'
import Footer from './components/Footer'
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { signOut } from "firebase/auth";
import { auth } from './firebase';

function App() {

  let navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(false)
  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      navigate('/login')
    })
  }

  return (
    <div className="App">
      <nav>
        <div className="logo">operacijos 2023</div>
        <div className="links">
          <Link to='/'>home</Link>
          <Link to='/surgery'>operacijos</Link>
          {isAuth && <Link to='/create'>sukurti</Link>}
          {!isAuth ? <Link to='/login'>prisijunk</Link> : <button className='logOutBtn' onClick={signOutUser}>Log Out</button>}
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/surgery' element={<Surgery />} />
        <Route path='/create' element={<Create setIsAuth={setIsAuth}/>} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
