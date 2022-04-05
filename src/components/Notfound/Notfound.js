import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Notfound/Notfound.css';
const Notfound = () => {
          return (
                    <Container>
                              <Row>
                                        <Col className='img-fluid'>
                                                  <h1>Page Not Found</h1>
                                                  <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png" alt="error-pictures" />
                                        </Col>
                              </Row>
                    </Container>
          );
};

export default Notfound;