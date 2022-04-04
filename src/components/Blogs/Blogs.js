import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
          return (
                    <div className=' mx-auto w-75'>
                              <h2>Blogs</h2>
                              <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                                  <Accordion.Header>What is Context API?</Accordion.Header>
                                                  <Accordion.Body>
                                                            <p></p>
                                                  </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                                  <Accordion.Header>What is Semantic Tag?</Accordion.Header>
                                                  <Accordion.Body>
                                                            <p> </p>
                                                  </Accordion.Body>
                                        </Accordion.Item>
                              </Accordion>
                    </div>
          );
};

export default Blog;