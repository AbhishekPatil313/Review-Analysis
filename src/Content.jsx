import React, { useState, useEffect } from 'react';
function ReviewList() {
  const [reviewData, setReviewData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchReviews();
//   }, []);

  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const response = await fetch('data2.json'); // Replace 'https://example.com/data' with the actual URL containing your JSON data
        if (!response.ok) {
          throw new Error('Failed to fetch JSON data');
        }
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJsonData();
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

//   const fetchReviews = async () => {
//     try {
//       const response = await fetch('./reviews.json'); // Assuming reviews.json is the name of your JSON file
//       if (!response.ok) {
//         throw new Error('Failed to fetch reviews');
//       }
//       const data = await response.json();
//       console.log(data);
//       setReviewData(data);
//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const { reviewer_name: reviewerName, content, rating_review_score: ratingReviewScore, out_of: outOf, source, analytics } = reviewData;

  return (
    <div>
      {/* <h1>{reviewerName}</h1>
      <p>{content}</p>
      <p>Rating: {ratingReviewScore}/{outOf}</p>
      <p>Source: {source.name}</p>
      <ul>
        {analytics.map((item, index) => (
          <li key={index}>
            <p>Category: {item.category}</p>
            <p>Topic: {item.topic}</p>
            <p>Phrases: {item.phrases.join(", ")}</p>
            <p>Sentences: {item.sentences.join(", ")}</p>
            <p>Sentiment: {item.sentiment}</p>
          </li>
        ))}
      </ul> */}

    </div>
  );
}

export default ReviewList;
