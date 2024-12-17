import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { getMovieDetails } from '../../BAL/Services/MoviesService';

function MovieDetails({ movieId }) {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setLoading(true);
            try {
                const data = await getMovieDetails(movieId);
                setMovie(data); // Set the response data directly
            } catch (error) {
                console.error('Error fetching movie details:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovieDetails();
    }, [movieId]);

    if (loading) return <Spinner animation="border" />;

    if (!movie) return <p>Select a movie to see details.</p>;

    return (
        <>
           <h3>Movies Details</h3>
           <Card>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    <strong>Release Year:</strong> {movie.releaseYear}
                </Card.Text>
                <Card.Text>
                    <strong>Runtime:</strong> {movie.runtimeMinutes} minutes
                </Card.Text>
                <Card.Text>
                    <strong>Adult Content:</strong> {movie.isAdult ? 'Yes' : 'No'}
                </Card.Text>
                <Card.Text>
                    <strong>Plot:</strong> {movie.plot}
                </Card.Text>
            </Card.Body>
        </Card>
        </>

    );
}

export default MovieDetails;
