import React, { useEffect, useState } from 'react';
import { Card, Button, Pagination, Spinner } from 'react-bootstrap';
import { getMovies } from '../../BAL/Services/MoviesService';

function MovieList({ onMovieSelect }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [prevPageUrl, setPrevPageUrl] = useState(null);

    const pageSize = 5; // Set the default page size

    // Fetch movies when the page changes
    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const data = await getMovies(currentPage, pageSize);
                if (data && data.items) {
                    setMovies(data.items); // Set the movies from the API response
                    setNextPageUrl(data.nextPageUrl); // Set the URL for the next page
                    setPrevPageUrl(data.previousPageUrl); // Set the URL for the previous page
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <h3>Movies</h3>

            {loading ? (
                <Spinner animation="border" />
            ) : (
                <>
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <Card key={movie.movieId} className="mb-3">
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>Release Year: {movie.releaseYear}</Card.Text>
                                    <Card.Text>Runtime: {movie.runtimeMinutes} minutes</Card.Text>
                                    <Button
                                        variant="primary"
                                        onClick={() => onMovieSelect(movie.movieId)}
                                    >
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        ))
                    ) : (
                        <p>No movies found.</p>
                    )}

                    <Pagination className="mt-3">
                        <Pagination.Prev
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={!prevPageUrl} // Disable if there's no previous page
                        />
                        <Pagination.Item active>{currentPage}</Pagination.Item>
                        <Pagination.Next
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={!nextPageUrl} // Disable if there's no next page
                        />
                    </Pagination>
                </>
            )}
        </>
    );
}

export default MovieList;
