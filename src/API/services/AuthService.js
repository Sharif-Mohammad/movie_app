import axios from 'axios';

const authApiClient = axios.create({
    baseURL: 'https://localhost:5001/api/Auth',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default authApiClient;


export const login = async (loginData) => {
    const response = await authApiClient.post('/login', loginData);
    return response.data;
};

export const register = async (registerData) => {
    const response = await authApiClient.post('/register', registerData);
    return response.data;
};

export const logout = async () => {
    await authApiClient.post('/logout');
};
