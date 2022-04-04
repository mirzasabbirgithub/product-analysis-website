import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';

const ReviewsPage = () => {
          const [review, setReview] = useState([]);
          useEffect(() => {
                    fetch('review.json')
                              .then(res => res.json())
                              .then(data => setReview(data));
          }, [])
          return (
                    <div>
                              <h2>All Customer Reviews</h2>
                              {
                                        review.map(review => <Reviews key={review.id} review={review}></Reviews>)
                              }
                    </div>
          );
};

export default ReviewsPage;