import { useState, useContext } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import { UserContext } from '../context/UserContext'

const ReviewForm = (props) => {
    const [shouldRedirect, setShouldRedirect] = useState(null)
    const { userState, fetchUser } = useContext(UserContext)
    const [user, setUser] = userState
    const [review, setReview] = useState({
      description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setReview({
          ...review,
          [name]: value
        })
      }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/listings/${props.id}/reviews`, review,{
          headers: {
            Authorization: user.id
          }
        }).then((response) => {
          console.log(response.data);
          setShouldRedirect(response.data.review)
        })
      }

      if  (shouldRedirect) {
        return <Redirect to={`/listings/${shouldRedirect}`} /> 
       } 

    return (
        <div className="createReviewPage">
  
        <form className="createReviewForm" onSubmit={handleSubmit}>
          
            <input name="description" className="inputForm" placeholder="Description" value={review.description} onChange={handleChange} />

          <input className="createReviewButton" type="submit" value="Post Review" />
        </form>
      </div>
    )
}

export default ReviewForm