import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import { UserContext } from '../context/UserContext'

const ListingForm = () => {
    const [shouldRedirect, setShouldRedirect] = useState(null)
    const { userState, fetchUser } = useContext(UserContext)
    const [user, setUser] = userState
    const [listing, setListing] = useState({
      title: '',
      image: '',
      description: '',
      website: '',
      instagram: '',
      facebook: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setListing({
          ...listing,
          [name]: value
        })
      }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/listings/create`, listing,{
          headers: {
            Authorization: user.id
          }
        }).then((response) => {
          console.log(response);
          setShouldRedirect(response.data.listing.id)
        })
      }

       if  (shouldRedirect) {
        return <Redirect to={`/listings/${shouldRedirect}`} /> 
       } 

    return (
        <div className="createPage">
        <form className="createForm" onSubmit={handleSubmit}>
          
            <input name="title" className="inputForm" placeholder="Title" value={listing.title} onChange={handleChange} />
            <input name="image" className="inputForm" placeholder="Image" value={listing.image} onChange={handleChange} />
            <input name="description" className="inputForm" placeholder="Description" value={listing.description} onChange={handleChange} />
            <input name="website" className="inputForm" placeholder="Website" value={listing.website} onChange={handleChange} />
            <input name="instagram" className="inputForm" placeholder="Instagram" value={listing.instagram} onChange={handleChange} />
            <input name="facebook" className="inputForm" placeholder="Facebook" value={listing.facebook} onChange={handleChange} />
          
          <input className="createButton" type="submit" value="Create" />
        </form>
      </div>
    )
}

export default ListingForm