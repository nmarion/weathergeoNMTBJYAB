$(function() {
	console.log("Hey there good looking!");
  	
	var updateResultsContainer = function(){
		var zip = $('#zip').val();
		var apiKey = "c634029e8e35b2db";
		var url = "http://weather-api.herokuapp.com/weather/" + apiKey + "/conditions/z/" + zip + ".json";
	
		$.ajax({
			url: url,
			success: function(data) {
				var jData = JSON.parse(data)
				alert(jData);
				/*
				location = jData.location;
				temp_f = jData.current_observation.temp_f;
				*/
			},
			error: function() {
				console.log("Error");
			}
		})
	
		var results = $("div#results")
		results.html("<h1>Results:</h1>");
		//results.html("<li>Current Temperature: " + temp_f + "</li>");
		//results.html("<li>Current Wind Speed: " + wind_mph + "</li>");
	}

	$('#weather_data').submit(function() {
		updateResultsContainer();
		return false;
	});
})
