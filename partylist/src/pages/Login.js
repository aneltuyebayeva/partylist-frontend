import {useState} from 'react'
import axios from 'axios'
import { useContext } from 'react'
 import { UserContext } from '../context/UserContext'
 import {Redirect} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')
  const { userState } = useContext(UserContext)
  const [user, setUser] = userState
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const loginForm = (e) => {
      e.preventDefault()
      
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {email, password})
      .then((response) => {
          console.log(response)
          localStorage.setItem('userId', response.data.id)
          setUser(response.data)
          setShouldRedirect(true)
      })
  }

  return (
    <div className="loginPage">
    { shouldRedirect && <Redirect to={`/`} exact /> }
     <form className ="loginForm" onSubmit={loginForm}>
        
             <label htmlFor="email">Email:</label>
             <input value={email} onChange ={(e) => setEmail(e.target.value)} />
       
        
             <label htmlFor="password">Password:</label>
             <input value={password} onChange ={(e) => setPassword(e.target.value)} />
       
        
             <input className="button" type="submit" value = "Login!"/>
         
     </form>
    </div>
  )
}

export default Login