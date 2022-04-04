
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import '../Reviews/Reviews.css'
const Reviews = (props) => {
          const { name, review, rating, img } = props.review;
          return (
                    <CardGroup>
                              <Card className="cards">
                                        <Card.Img variant="top" src={img} />
                                        <Card.Body>
                                                  <Card.Title>{name}</Card.Title>
                                                  <Card.Text>
                                                            Reviews: {review}
                                                  </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                                  <small className="text-muted">Rating: {rating}</small>
                                        </Card.Footer>
                              </Card>

                    </CardGroup>
          );
};

export default Reviews;