import { useEffect, useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

const CreateListings = () => {
    const [shouldRedirect, setShouldRedirect] = useState(null)
    const [listing, setListing] = useState({
      title: '',
      image: '',
      description: '',
      website: '',
      instagram: '',
      facebook: ''
    })


    return (
        <div>
            Create listing page
        </div>
    )
}

export default CreateListings