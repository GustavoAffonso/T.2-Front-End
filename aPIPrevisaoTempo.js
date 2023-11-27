const axios = require('axios');
const appid = "c934854f9d06b1dcad2aa06472958e19";
const q = "São Caetano Do Sul";
const cnt = "1";
const countryCode = 55;
const urlCoordenada = `http://api.openweathermap.org/geo/1.0/direct?q=${q},${countryCode}&limit=${cnt}&appid=${appid}`;
axios
    .get(urlCoordenada)
    .then(res => {
        console.log(res); 
        return res.data;
    }
    )
    .then((res) => {
        for(let previsao of res) {
            console.log(`${`Latitude de `+ q + ` é ` + previsao.main.lat} ${`e longitude é `+ previsao.main.lon}.`)
        }
        return res;
    }
    )
const urlTemperatura = `https://api.openweathermap.org/data/2.5/weather?lat=${previsao.main.lat}&lon=${previsao.main.lon}&appid=${appid}}`;
axios
    .get(urlTemperatura)
    .then(res => {
        console.log(res); 
        return res.data;
    }
    )
    .then((res) => {
        for(let previsao of res) {
            console.log(`${`sensação térmica é .`+ previsao.main.feels_like` graus Celsius e a descrição é `+ previsao.weather[0].description}`)
        }
        return res;
    }
    )