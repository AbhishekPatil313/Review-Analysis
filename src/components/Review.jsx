import React from 'react';
import Tooltip from './Tootip'; // Assuming you have already implemented Tooltip component
import './Review.css'; // Styling for the review component
import { Rating } from '@mui/material';

const Review = ({ reviewerName, content, date, ratingReviewScore, outOf, source, sentiment,highlight_indices }) => {
  return (
    <div className="review">
      <div className="review-header">
        <div className="reviewer-info">
          <img src={source.icon} alt={source.name} className="source-icon" />
          <span>{reviewerName}</span>
        </div>
        <div className="review-date">{date}</div>
      </div>
      <div className="review-content">
       
       
           
             
            {content.substring(0, highlight_indices?.[0])}
            <Tooltip text={sentiment}>
            <span className={sentiment}>${content.substring(highlight_indices?.[0], highlight_indices?.[1])}</span>
            </Tooltip>
            ${content.substring(highlight_indices?.[1])}
             
      
         
            
      </div>
      <div className="review-rating">
        <span>Rating</span>
        <Rating name="read-only" readOnly defaultValue={ratingReviewScore} max={10} />
      </div>
    </div>
  );
};

export default Review;
