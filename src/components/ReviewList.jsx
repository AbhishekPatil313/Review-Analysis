import React, { useState, useEffect } from 'react';
import data from "./data"
import "./reviewList.css"
import Review from './Review';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
   
    setReviews(data);
  }, []); // Empty dependency array ensures this effect runs only once
//   Review = ({ reviewerName, content, date, ratingReviewScore, outOf, source, analytics })
  return (
    <div className='review-container'>
      <h1>Reviews</h1>
      
        {reviews.map(review => (
        
            <Review key={review.review_id} reviewerName={review.reviewer_name} content={review.content} date={review.date} ratingReviewScore={review.rating_review_score} outOf={review.out_of} source={review.source} sentiment={review.sentiment} highlight_indices={review.highlight_indices?.[0]} />
          
        ))}
      
    </div>
  );
};

export default Reviews;
