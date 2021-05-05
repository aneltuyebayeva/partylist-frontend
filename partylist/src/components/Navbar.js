import {Link, useHistory} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Navbar = () => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    let history = useHistory()

    const returnHome = () => {
        history.push("/")
    }

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
            <span className="navLinks">
                <Link to="/listings">All Listings</Link>
                </span>
            {localStorage.getItem('userId') ?     
            <span>
                
                <span className="navLinks">
                <Link to="/mylistings">My Listings</Link>
                </span>
                <span className="navLinks">
                <Link to="/create">Create</Link>
                </span>
                <span className="navLinks">
                <Link to=" " onClick ={(e) => {
                    e.preventDefault()
                    localStorage.removeItem('userId')
                    setUser({})
                    returnHome()
                }}>Logout</Link>
                </span>
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