import { useState, useEffect } from 'react'
import axios from 'axios'
import EditForm from '../components/EditForm'

const EditListing = (props) => {

    const [listing, setListing] = useState ({})

    const fetchSingleListing = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/listings/${props.id}`)
        .then((response) => {
        console.log(response.data)
         setListing(response.data.listing) 
        })
       }
      
    useEffect(fetchSingleListing, [])

    return (
        <div>
           <EditForm />
        </div>
    )
}

export default EditListing