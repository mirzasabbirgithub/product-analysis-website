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
                                                            <p>The context API is basically a React structure that allows you to exchange unique details and solving prop diriling from al level of applications. It's a system for react app to create global variable that can be passed around. It's a alternative way to bypass props drilling.
                                                                      A context API is likewise touted as a very easier technique to control the usage of Redux. Context API used when data need to use from different level of nested components.</p>
                                                  </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                                  <Accordion.Header>What is Semantic Tag?</Accordion.Header>
                                                  <Accordion.Body>
                                                            <p> Semantic tag refers to those tags that provide meaning to a web page rather than just a normal presentation. It's understandle for both user and machines. It makes web page more user friendly by defining sections and also layouts of a web page. Semantic tags are one of the major features of html5. It allows web page more adaptable and make browesing experience much better. </p>
                                                  </Accordion.Body>
                                        </Accordion.Item>
                              </Accordion>
                    </div>
          );
};

export default Blog;