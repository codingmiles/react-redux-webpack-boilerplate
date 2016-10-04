import { httpGet } from './APIUtils'

function fetchWeatherInfoUrl (city) {
	return `http://api.openweathermap.org/data/2.5/weather?q={${city}}&APPID=558acd4ed3303e5da9f9e006c9df9e79`
}

function fetchWeatherInfo({ city }) {
	const url = fetchWeatherInfoUrl(city)
	return httpGet(url).then(
    ({ body }) => ({
      weatherInfo: body,
    })
  )
}

export default {
	fetchWeatherInfo,
}