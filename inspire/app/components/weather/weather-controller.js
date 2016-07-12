	


//(function () {

	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		console.log(weather);

		var displaytemp = toFarhenheit()
		function toFarhenheit() {
			var temp = weather.main.temp;
			temp = 9 / 5 * (temp - 273) + 32;
			return Math.floor(temp);
		}


		//What can you do with this weather object?
		$("#weather").append(weather.name + '<br>' + displaytemp + 'F&#186')
	
});


