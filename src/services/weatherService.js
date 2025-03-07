const  API_KEY = '369834722c124c2cae1160323250703'
const BASE_URL = `http://localhost:3000/weather/`;

const show = async (city) => {
    try {
        const resFromAPI = await fetch(BASE_URL + city);
        const data = await resFromAPI.json();
        return data;
      } catch (err) {
        console.log(err);
      }
}

export {show};