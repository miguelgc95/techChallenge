import axios from 'axios';

export function getMemes(method = 'get', limit = 16) {
    const api_key = process.env.REACT_APP_GIPHY_KEY;
    const config = {
        method,
        url: `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${limit}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    };
    console.log(config);
    return axios(config);
}

// export function getMemes(method = 'get', limit = 16) {
//     // const config = {
//     // method,
//     // url: 'api.giphy.com/v1/gifs/trending',
//     // ,
//     // headers: {
//     //     'Access-Control-Allow-Origin': '*',
//     // },
//     // };

//     const url = 'https://api.giphy.com/v1/gifs/trending';
//     const headers = {
//         api_key: process.env.REACT_APP_GIPHY_KEY,
//         limit,
//     };
//     return axios.get(url, headers);
// }
