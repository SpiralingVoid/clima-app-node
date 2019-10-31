const axios = require('axios');

const getLugarLatitud = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '5fa2ca5704mshf624681d80e851fp153f45jsnd18f3cd87d76' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {

        throw new Error(`No hay resultado para ${direccion}`);

    }


    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatitud
}

//console.log(encodeUrl);