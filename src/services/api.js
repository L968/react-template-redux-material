import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:44309/api',
    validateStatus: (status) => {
        return status >= 200 && status < 500;
    },
});