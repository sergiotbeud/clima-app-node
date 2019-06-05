const axios = require('axios');


const getClima = async(lat, lng) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=11d41096b3a12f7cf9c38cc93a89d344&units=metric`);
    return response.data.main.temp;
}

module.exports = {
    getClima
}