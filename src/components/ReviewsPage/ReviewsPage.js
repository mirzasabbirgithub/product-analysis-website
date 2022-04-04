import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';

const ReviewsPage = () => {
          const [review, setReview] = useReviews();
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