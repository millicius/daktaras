import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = ({setIsAuth}) => {
  let navigate = useNavigate()

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
      navigate('/')
    })
  }

  return (
    <div className="loginPage">
        <div className="login-header">
            <p>Sveiks, <span style={{fontWeight: "bold"}}>Audrelio!</span></p>
            <button className="loginBtn" onClick={signInWithGoogle}>Prisijunk su Google</button>
        </div>
    </div>
  )
}

export default Login