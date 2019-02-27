import axios from 'axios';
let HTTP = axios.create({
    baseURL: 'http://localhost:8000'
});

export function getAuthorizationToken(credentials) {
    return HTTP.post('get-auth-token');
}