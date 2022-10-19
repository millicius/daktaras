import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <nav>
        <div className="logo">operacijos 2023</div>
        <div className="links">
          <Link to='/'>home</Link>
          <Link to='/surgery'>operacijos</Link>
          <Link to='/create'>sukurti</Link>
          {!isAuth && <Link to='/login'>prisijunk</Link>}
        </div>
    </nav>
  )
}

export default Navbar