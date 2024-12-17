import axios from 'axios';

const moviesApiClient = axios.create({
    baseURL: 'https://localhost:5001/api/movies',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default moviesApiClient;
