import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

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
            <div>
                <Link to={`/mylistings`}><button onClick = {() =>(
                 axios.delete (`${process.env.REACT_APP_BACKEND_URL}/listings/${props.id}`).then
                 ((response) =>{
                    console.log(response)
                 })
                )}>Delete</button></Link>
                <Link to={`/mylistings/${props.id}/edit`}><button>Edit</button></Link>
                </div>
            <div>
            <h2>Title: {listing.title}</h2>
            <img src={listing.image}/>
            <p>Description: {listing.description}</p>
            <p>Website: {listing.website}</p>
            <a href={listing.instagram}></a>
            </div>
        </div>
    )
}

export default SingleListing