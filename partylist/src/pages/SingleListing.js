import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const SingleListing = (props) => {
    const [listing, setListing] = useState ({})
    const { userState, fetchUser } = useContext(UserContext)
    const [user, setUser] = userState
    

    const fetchSingleListing = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/listings/${props.id}`,{
            headers: {
              Authorization: user.id
            }
          })
        .then((response) => {
        console.log(response.data)
         setListing(response.data.listing) 
        })
       }
      
    useEffect(fetchSingleListing, [])

    return (
        <div>
            <div className="listingNavLinks">
                <Link to={`/mylistings`}><button className="listingButton" onClick = {() =>(
                 axios.delete (`${process.env.REACT_APP_BACKEND_URL}/listings/${props.id}`).then
                 ((response) =>{
                    console.log(response)
                 })
                )}>Delete</button></Link>
                <Link to={`/mylistings/${props.id}/edit`}><button className="listingButton">Update</button></Link>
                </div>
            <div className="singleListingContainer">
            <h2>{listing.title}</h2>
            <img src={listing.image}/>
            <p>{listing.description}</p>
            <a href={listing.website}>Website: {listing.website}</a>
            <div className="social-container">
            <a href={listing.instagram} className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href={listing.facebook} className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            </div>
            
            </div>
        </div>
    )
}

export default SingleListing