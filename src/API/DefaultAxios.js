import axios from 'axios'

export const instance = axios.create({
    baseURL: `http://localhost:8000/api/v1/`,
    headers: {
        Authorization:`Bearer ${localStorage.getItem('AccessToken')}`,
        Accept: 'application/json;charset=UTF-8',
    },
});
