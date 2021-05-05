import {useState, useEffect} from 'react'
import axios from 'axios'

const AllReviews = (props) => {

    const [reviews, setReviews] = useState ({})

    const fetchReviews = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/listings/${props.listingId}/reviews`)
        .then((response) => {
        console.log(response.data)
         setReviews(response.data.reviews) 
        })
       }
      
    useEffect(fetchReviews, [])

    return (
        <div className="reviewContainer">
      <div className="reviewList">
      {
        reviews.length ? 
        reviews.map((review) => {
          return <div className="singleReview">
            <span key={review.id}>
            {review.description}
            </span>
            

          </div>

        })
        :
        <p>There are no reviews at this moment. Be the first, write a review.</p>
      }
    </div>
        </div>
    )
}


export default AllReviews