import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(config => {
    config.url =
        config.url + '/weather?q=' + '&appid=' + process.env.REACT_APP_API_KEY;
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    return config;
});

export default api;