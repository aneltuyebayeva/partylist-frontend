import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Navbar = () => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState



    return (
        <div className="headerSection">
            <div className="logo">
                <span className="homeTitle">Partylist</span>
            </div>
            
            <div>
            <nav className="navbar">
           
            <span className="navLinks">
            <Link to="/">Home</Link>
            </span>
            {localStorage.getItem('userId') ?     
            <span>
                <span className="navLinks">
                <Link to="/listings">All Listings</Link>
                </span>
                <span className="navLinks">
                <Link to="/mylistings">My Listings</Link>
                </span>
                <span className="navLinks">
                <Link to="/create">Create</Link>
                </span>
                <span className="navLinks" onClick ={() => {
               localStorage.removeItem('userId')
               setUser({})
                }}>Logout</span>
            </span>       
            :
            <span>
                <span className="navLinks">
                <Link to="/signup">Sign Up</Link>
                </span>
                <span className="navLinks">
                <Link to="/login">Login</Link>
                </span>
            </span>
            }
            </nav>
            </div>
        </div>
        
    ) 
 }
    
    export default Navbar