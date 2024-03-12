//let discount_code = 5000;
//const discount_button = document.getElementById('discount-code');
//const showDiscountCode = () => {
//discount_code = discount_code + 1;
//alert("Your discount code is " + discount_code);
//}
//discount_button.addEventListener("click", showDiscountCode);

// Base URL of the open Mateo API Endpoint
const baseUrl = 'https://api.open-meteo.com/v1/forecast';

//query parameters as a JS object
const queryParams = {
    latitude: -27.4679,
    longitude: 153.0281,
    current_weather: true,
};

//Convert the query parameters object into a query string
const queryString = new URLSearchParams(queryParams).toString();

// Full URL with query parameters
// const urlWithParams = '${baseUrl}?${QueryString}';
const urlWithParams = baseUrl+"?"+queryString;

// Request options 
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

//Making the Fetch call
fetch(urlWithParams, requestOptions)
    .then(response => response.json())
    .then(data => {
        const weather = data.current_weather;
        console.log("Current temperature: " + weather.temperature + "C"); 
        const temperature_element = document.getElementById('current_temperature');
        const windspeed_element = document.getElementById('current_windspeed');
        temperature_element.innerText = weather.temperature + "C";
        windspeed_element.innerText = weather.windspeed + "kph";        
    })
.catch(error => console.log('error', error));
