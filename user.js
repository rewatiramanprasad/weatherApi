const fetch = require('node-fetch');

const current = async (city = 'patna',aqi) => {
    const key = 'e198c5da26ce404fa43182509222705';
    const url = 'https://api.weatherapi.com/v1/current.json?key=' + key + '&q=' + city + '&aqi=no';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}




const forecast = async (city='patna',aqi) => {
    const key = 'e198c5da26ce404fa43182509222705';
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=' + key + '&q=' + city + '&days=1&aqi=no&alerts=no';
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

module.exports = { current, forecast }