import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header/Header.css'
const Header = () => {
          return (
                    <nav className='header'>
                              <Navbar bg="black" variant="dark">
                                        <Container>
                                                  <Nav className="mx-auto align-center">
                                                            <Link to="/home">Home</Link>
                                                            <Link to="/reviews">Reviews</Link>
                                                            <Link to="/dashboard">Dashboard</Link>
                                                            <Link to="/blogs">Blogs</Link>
                                                            <Link to="/about">About</Link>
                                                  </Nav>
                                        </Container>
                              </Navbar>
                    </nav>
          );
};

export default Header;