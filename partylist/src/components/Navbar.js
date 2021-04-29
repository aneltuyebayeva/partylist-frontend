import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Navbar = () => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState



    return (
        <nav>
            <Link to="/">Home</Link>{' | '}
            {localStorage.getItem('userId') ?     
            <span>
            <Link to="/listings">All Listings</Link>{' | '}
            <Link to="/mylistings">My Listings</Link>{' | '}
            <Link to="/create">Create</Link>{' | '}
            <span onClick ={() => {
               localStorage.removeItem('userId')
               setUser({})
            }}>Logout</span>{' | '}
            </span>       
            :
            <span>
            <Link to="/signup">Sign Up</Link>{' | '}
            <Link to="/login">Login</Link>
            </span>
            }
        </nav>
    ) 
 }
    
    export default Navbar