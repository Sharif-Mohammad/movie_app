import moviesApiClient from '../../API/services/MoviesApiClient';

export const getMovies = async (page = 1, pageSize = 10) => {
    const response = await moviesApiClient.get('/', {
        params: { page, pageSize },
    });
    return response.data;
};

export const getMovieDetails = async (id) => {
    if (!id) throw new Error('Movie ID is required');
    const response = await moviesApiClient.get(`/${id}`);
    return response.data;
};
