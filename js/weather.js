$(function() {
	console.log("Hey there good looking!");
  	
	var updateResultsContainer = function(){
		var zip = $('#zip').val();
		var state = "IA";
		var city = "Iowa City";
		var apiKey = "c634029e8e35b2db";

		var url = "http://weather-api.herokuapp.com/weather/" + apiKey + "/conditions/z/" + zip + "/";
<<<<<<< HEAD
<<<<<<< HEAD
	
		if(zip != "" && location != "") {
=======

		
>>>>>>> master
=======

		
>>>>>>> 16647fe4e5373cbb784f561d252eb16b496b6324
			$.ajax({
				url: url,
				success: function(data) {
					var jData = JSON.parse(data)
<<<<<<< HEAD
<<<<<<< HEAD
				
=======

>>>>>>> master
=======

>>>>>>> 16647fe4e5373cbb784f561d252eb16b496b6324
					var currOb = jData.current_observation;
					var temp_f = currOb.temperature_string;
					var wind_mph = currOb.wind_mph;
					var weather = currOb.weather;
<<<<<<< HEAD
<<<<<<< HEAD
				
=======

>>>>>>> master
=======

>>>>>>> 16647fe4e5373cbb784f561d252eb16b496b6324
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
<<<<<<< HEAD
<<<<<<< HEAD
		}
=======
		
>>>>>>> master
=======
		
>>>>>>> 16647fe4e5373cbb784f561d252eb16b496b6324
	}

		$('#weather_data').submit(function() {
		updateResultsContainer();
		return false;
<<<<<<< HEAD
	});
<<<<<<< HEAD
=======
		});	
	
>>>>>>> master
	
=======

>>>>>>> 16647fe4e5373cbb784f561d252eb16b496b6324
	var input = document.getElementById('place');
	var options = {
		types: ['(cities)'],
		componentRestrictions: {country: 'us'}	
	};

	autocomplete = new google.maps.places.Autocomplete(input, options);
<<<<<<< HEAD
<<<<<<< HEAD
});
=======

	google.maps.event.addListener(autocomplete, 'place_changed', function() {
		var place = autocomplete.getPlace();
		
		var apiKey = "c634029e8e35b2db";
		var latitude = place.geometry.location.lat();
		var longitude = place.geometry.location.lng();
		var url = "http://weather-api.herokuapp.com/weather/" + apiKey + "/conditions/g/" + latitude +"/" + longitude + "/";
		
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
	})
=======

	google.maps.event.addListener(autocomplete, 'place_changed', function() {
		var place = autocomplete.getPlace();
		var apiKey = "c634029e8e35b2db";
		var latitude = place.geometry.location.lat();
		var longitude = place.geometry.location.lng();
		var url = "http://weather-api.herokuapp.com/weather/" + apiKey + "/conditions/q/" + latitude +"," + longitude + "/";

	
		});
		
	
>>>>>>> 16647fe4e5373cbb784f561d252eb16b496b6324
	
	
})
>>>>>>> master
