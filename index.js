

const container =document.querySelector('.container');
const search =document.querySelector('.search-box button');
const weatherbox =document.querySelector('.weather-box');
const weatherdetails =document.querySelector('.weather-details');

search.addEventListener('click', () =>{
   
    const APIKey ='06aaf0727ce7276c93da66e734d33669';
    const city = document.querySelector('.search-box input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
    console.log(`Fetching data from: ${url}`);

    fetch(url)
    .then(response => response.json())
    .then( json=>{

       
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description= document.querySelector('.weather-box .description');
        const humidity= document.querySelector('.weather-details .humidity span');
        const wind= document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;

            case 'Rain':
                image.src = 'images/rain.png';
                break;

            case 'Snow':
                image.src = 'images/snow.png';
                break;

            case 'Clouds':
                image.src = 'images/clouds.png';
                break;

            case 'Haze':
                image.src = 'images/mist.png';
                break;

            default:
                image.src = '';
        }

    
    temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
    description.innerHTML = `${json.weather[0].description}`;
    humidity.innerHTML = `${json.main.humidity}`;
    wind.innerHTML = `${json.wind.speed}`;
    weatherbox.style.display = '';
    weatherdetails.style.display = '';
    weatherbox.classList.add('fadeIn');
    weatherdetails.classList.add('fadeIn');
    container.style.height = '590px';

    
});

})