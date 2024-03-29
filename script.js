const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9bb17c7ac1msh7fbc42cf8118e31p1b900bjsn40d39a70add7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) =>{
	cityname.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct 
		// temp.innerHTML = response.temp 
		feels_like.innerHTML = response.feels_like 
		humidity.innerHTML = response.humidity 
		min_temp.innerHTML = response.min_temp 
		max_temp.innerHTML = response.max_temp 
		wind_speed.innerHTML = response.wind_speed 
		wind_degrees.innerHTML = response.wind_degrees 
		sunrise.innerHTML = response.sunrise 
		sunset.innerHTML = response.sunset 
		
		
	}
		
		
		
		)
	.catch(err => console.error(err));

}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")

	const timeEl = document.getElementById('time');
	const dateEl = document.getElementById('date');
	const currentWeatherItemsEl = document.getElementById('current-weather-items');
	const timezone = document.getElementById('time-zone');
	const countryEl = document.getElementById('country');
	const weatherForecastEl = document.getElementById('weather-forecast');
	const currentTempEl = document.getElementById('current-temp');
	
	
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	setInterval(() => {
		const time = new Date();
		const month = time.getMonth();
		const date = time.getDate();
		const day = time.getDay();
		const hour = time.getHours();
		const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
		const minutes = time.getMinutes();
		const ampm = hour >=12 ? 'PM' : 'AM'
	
		timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`
	
		dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]
	
	}, 1000);	