import React, { useState } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Use Link from React Router
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

function HomePage() {
    const [selectedMovieId, setSelectedMovieId] = useState(null);

    const handleMovieSelect = (id) => {
        setSelectedMovieId(id);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">MovieApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} to="/register">
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="mt-4">
                <Row>
                    <Col md={8}>
                        <MovieList onMovieSelect={handleMovieSelect} />
                    </Col>
                    <Col md={4}>
                        {selectedMovieId ? (
                            <MovieDetails movieId={selectedMovieId} />
                        ) : (
                            <p>Select a movie to see its details.</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HomePage;
