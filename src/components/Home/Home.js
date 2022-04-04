import React, { useEffect, useState } from 'react';
import '../Home/Home.css'
import { Col, Container, Row } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';
import useReviews from '../../hooks/useReviews';
import ReviewsPage from '../ReviewsPage/ReviewsPage';
import { Link } from 'react-router-dom';

const Home = () => {
          const [review, setReview] = useReviews();
          return (
                    <div>
                              <Container>
                                        <Row>
                                                  <Col>
                                                            <div className='home-article'>
                                                                      <h1 className='font-bold'>Find your desire Laptop</h1>
                                                                      <h1><span className='text-danger'>Best Laptop for you</span> </h1>
                                                                      <p>Hi there! Are you looking for best laptop in city? Then we're here to assist you to find the best laptop, You can check reviews from customer reviews section. </p>
                                                            </div>
                                                  </Col>


                                                  <Col className='home-image'>
                                                            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/773cca43-1ee5-4ace-9600-a628f182891a.__CR0,375,3000,2250_PT0_SX800_V1___.jpg" alt="laptop-pictures" />
                                                  </Col>
                                        </Row>

                                        <Col>
                                                  <div className="review-container">
                                                            <div>
                                                                      <h2>Customer Reviews ({review.length})</h2>
                                                            </div>
                                                            {
                                                                      review.slice(0, 3).map(review => <Reviews key={review.id} review={review}></Reviews>)
                                                            }

                                                            <Link to="/reviews">
                                                                      <button className='btn btn-primary mt-2'>See All Reviews</button>
                                                            </Link>

                                                  </div>
                                        </Col>
                              </Container>
                    </div>
          );
};

export default Home;