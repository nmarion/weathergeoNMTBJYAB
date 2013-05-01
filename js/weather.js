$(function() {
	console.log("Hey there good looking!");
  	
	var updateResultsContainer = function(){
		var zip = $('#zip').val();
		var state = "IA";
		var city = "Iowa City";
		var apiKey = "c634029e8e35b2db";

		var url = "http://weather-api.herokuapp.com/weather/" + apiKey + "/conditions/z/" + zip + "/";
	
		if(zip != "" && location != "") {
			$.ajax({
				url: url,
				success: function(data) {
					var jData = JSON.parse(data)
				
					var currOb = jData.current_observation;
					var temp_f = currOb.temperature_string;
					var wind_mph = currOb.wind_mph;
					var weather = currOb.weather;
				
					var results = $("div#results")
					results.html("<h1>Results:</h1>");
					results.append("<li>Current Weather: " + weather + "</li>");
					results.append("<li>Current Temperature: " + temp_f + "</li>");
					results.append("<li>Current Wind Speed: " + wind_mph + "</li>");
				},
				error: function() {
					console.log("Error");
				}
			})
		}
	}

	$('#weather_data').submit(function() {
		updateResultsContainer();
		return false;
	});
	
	var input = document.getElementById('place');
	var options = {
		types: ['(cities)'],
		componentRestrictions: {country: 'us'}	
	};

	autocomplete = new google.maps.places.Autocomplete(input, options);
});
