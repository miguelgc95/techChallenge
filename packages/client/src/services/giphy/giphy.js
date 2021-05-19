import axios from 'axios';

export function getMemes(offset, method = 'get', limit = 12) {
    const api_key = process.env.REACT_APP_GIPHY_KEY;
    const config = {
        method,
        url: `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${limit}&offset=${offset}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    };
    return axios(config);
}
