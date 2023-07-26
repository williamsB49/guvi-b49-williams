
let cardList = document.createElement('div');
cardList.classList.add('card-list');


//fetching data

async function getData() {
    let url = 'https://restcountries.com/v3.1/all';
    let result = await fetch(url);
    let data = await result.json();
    data.forEach((country) => {
        let card = document.createElement('div');
        card.classList.add('card', 'col-lg-3', 'col-sm-12');
        
        let cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        let cardHeaderText = document.createElement('h3');
        cardHeaderText.innerText = `${country.name.common}`;
        
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        let cardImage = document.createElement('img');
        cardImage.setAttribute('src', `${country.flags.svg}`);
        
        let capital = cardDetails('Capital', `${country.capital}`);
        let region = cardDetails('Region', `${country.region}`);
        let countryCode = cardDetails('Country Code', `${country.cca3}`);
        
        let latlng = country.latlng;
        
        let weatherButton = document.createElement('button');
        weatherButton.classList.add('btn', 'btn-outline-primary');
        weatherButton.innerText = 'Click for weather';
        weatherButton.addEventListener('click', function(){getWeather(latlng, weatherDetails)} );
        
        let weatherDetails = document.createElement('p');
        weatherDetails.setAttribute('id', 'weather-details');
        

        cardHeader.append(cardHeaderText);
        cardBody.append(cardImage, capital, region, countryCode);
        card.append(cardHeader, cardBody, weatherButton, weatherDetails);

        cardList.append(card);
    });
}


//function for creating card details

function cardDetails(key, value) {
    let mold = document.createElement('p');
    mold.innerText = `${key} : ${value}`;
    return mold;
}


// function for weather data

async function getWeather(location, weather) {
let apiKey= 'cbb40dad5baeb33e364a8c21be334197';

let lat = Math.round(location[0]);
let long = Math.round(location[1]);

let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`

let result = await fetch(url);
let data = await result.json();
console.log(data.weather[0].description);

weather.innerText = `Weather: ${data.weather[0].description}`;

}
const what1 =document.getElementById("parent")
what1.append(cardList);

getData();