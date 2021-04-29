import {useState} from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import {Redirect} from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState ('')
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    const [shouldRedirect, setShouldRedirect] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/signup`, {email, password})
        .then((response) => {
            console.log(response)
            localStorage.setItem('userId', response.data.user.id)
            setUser(response.data.user)
            setShouldRedirect(true)
        })
    }

    return (
      <div className="signupPage">
        { shouldRedirect && <Redirect to={`/`} exact /> }
       <form className="signupForm" onSubmit={submitForm}>
           
               <label htmlFor="name">Name:</label>
               <input value={name} onChange ={(e) => setName(e.target.value)} />
           
          
               <label htmlFor="email">Email:</label>
               <input value={email} onChange ={(e) => setEmail(e.target.value)} />
           
          
               <label htmlFor="password">Password:</label>
               <input value={password} onChange ={(e) => setPassword(e.target.value)} />
           
          
               <input className="button" type="submit" value = "Sign Up!"/>
           
       </form>
      </div>
    )
}

export default Signup

