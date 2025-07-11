const apiKey = 'ec2a47e3143f8078b58168d360841d61'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const error = document.querySelector('.error')
const weather = document.querySelector('.weather')
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status === 404) {
        alert('enter valid city name')
        error.style.display = 'block'
        weather.style.display = 'none'
    } else {
        let data = await response.json()

        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'
        document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


        weather.style.display = 'block'
        error.style.display = 'none'
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})
