import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'

import { UserContext } from '../context/UserContext'

const ListingsList = (props) => {
  const [allListings, setAllListings] = useState([])
  const { userState, fetchUser } = useContext(UserContext)
  const [user, setUser] = userState
  
  
  const fetchAllListings = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}${props.route}`, {
        headers: {
          Authorization: user.id
        }
      })
    .then((response) => {
      setAllListings(response.data.listing)
    })
  }
  useEffect(fetchAllListings, [])
  
  return (
    <div className="listingsList">
      {
        allListings.length ? 
        allListings.map((listing) => {
          return <div className="singleListing">
            <span key={listing.id}>
            <Link to={`/listings/${listing.id}`}>{listing.title}</Link>
            </span>
            <img src={listing.image}/>
            <span>{listing.description}</span>  
          </div>

        })
        :
        <p>You haven't created any listings yet.</p>
      }
    </div>
  )
}

export default ListingsList