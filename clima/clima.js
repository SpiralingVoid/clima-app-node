const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2fabc645ef4e4b7f8b734a84113d3f05&units=metric`);

    return resp.data.main.temp;
}




module.exports = {
    getClima
}