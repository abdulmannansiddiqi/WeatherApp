const apiKey = 'ec2a47e3143f8078b58168d360841d61'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const error = document.querySelector('.error')
const weather = document.querySelector('.weather') // Assuming you have a weather container

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status === 404) {
       
        error.style.display = 'block'
        weather.style.display = 'none'
    } else {
        let data = await response.json()

        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'

        weather.style.display = 'block'
        error.style.display = 'none'
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})
