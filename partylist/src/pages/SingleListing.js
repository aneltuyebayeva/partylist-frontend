import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import AllReviews from '../components/AllReviews'

const SingleListing = (props) => {
    const [listing, setListing] = useState ({})
    const { userState, fetchUser } = useContext(UserContext)
    const [user, setUser] = userState
    const [shouldRedirect, setShouldRedirect] = useState(null)
    const [shouldReload, setShouldReload] = useState(true)
    const [creator, setCreator] = useState(false)
    

    const fetchSingleListing = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/listings/${props.id}`,{
            headers: {
              Authorization: user.id
            }
          })
        .then((response) => {
        console.log(response.data)
         setListing(response.data.listing) 
         setShouldReload(false)
         isCreator()
        })
       }
      
    useEffect(fetchSingleListing, [])
    useEffect(fetchSingleListing, [shouldReload])

    const isCreator = () => {
      
      if (listing.userId && listing.userId === user.id) {
       setCreator(true) 
      } 
      
    }


    return (
        <div>
          { shouldRedirect && <Redirect to={shouldRedirect} /> }
          { creator && 
            <div className="listingNavLinks">
                <Link to={`/mylistings`}><button className="listingButton" onClick = {() =>(
                 axios.delete (`${process.env.REACT_APP_BACKEND_URL}/listings/${props.id}`, {
                  headers: {
                    Authorization: user.id
                  }
                }).then((response) => {
                  setShouldRedirect("/mylistings")
                 })
                )}>Delete</button></Link>
                <Link to={`/mylistings/${props.id}/edit`}><button className="listingButton">Update</button></Link>
                </div>
            }
            <div className="singleListingContainer">
            <h2>{listing.title}</h2>
            <div className="singleListingImage">
              <img src={listing.image}/>
            </div>
            <p>{listing.description}</p>
            <a href={listing.website}>Website: {listing.website}</a>
            <div className="social-container">
            <a href={listing.instagram} className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href={listing.facebook} className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            </div>

            </div>
            <div>
            <Link to={`/listings/${props.id}/reviews`}><button className="reviewButton">Write a review</button></Link>
            </div>
            <div className="allReviewContainer">
             <AllReviews listingId={props.id} setShouldReload={setShouldReload}/> 
            </div>
        </div>
    )
}

export default SingleListing