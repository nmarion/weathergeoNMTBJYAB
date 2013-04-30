$(function() {
  console.log("Hi");
  var updateResultsContainer = function() {
    var html = [results];
    html.push("<li>");
    html.push("Current Weather:" + html['current_observation']['weather']);
    html.push("</li>");
	html.push("<li>");
    html.push("Current Temperature: " + jData[temp_f]);
    html.push("</li>");
	html.push("<li>");
    html.push("Current Wind speed:" + jData[wind_mph]);
    html.push("</li>");
    $('#results').html(html.join(""));
  };

  $('#results_test').submit(function() {
    updateResultsContainer();
    return false;
  });

  
document.getElementById("button").onclick = function(){
	zip = $("#zip").val();
	};
	var weatherData = function(zip){
    var apiKey = "c634029e8e35b2db";
    var url = "http://weather-api.herokuapp.com/weather/" + apiKey + "/conditions/z/" + zip + ".json";
	
	/*$.ajax({
      url: url,	 
		success : function(data) {
			var jData = JSON.parse(data)
			updateResultsContainer(jData);
			
		var location = jData['location']['city'];
		var temp_f = jData['current_observation']['temp_f'];
		alert("Current temperature in " + location + " is: " + temp_f); 			
		console.log("SUCCESS");

      },*/
	  $.ajax({
                url: "http://api.wunderground.com/api/<Your API Key>/geolookup/conditions/q/KY/Murray.json",
                dataType: "jsonp",
                success: function (parsed_json) {
                    current = (parsed_json['current_observation']['weather']);
                    $('#skyCondValue').append($('<option>', { value: "skyCond" }).text(parsed_json['current_observation']['weather']));
                    $('#humidValue').val(parsed_json['current_observation']['dewpoint_f']);
                    $("#windSpeedVal").val(parsed_json['current_observation']['wind_mph']);
                    $("#windDirVal").append($('<option>', { value: "windDir" }).text(parsed_json['current_observation']['wind_dir']));
                    $('#envInfo').text(parsed_json['current_observation']['temp_f'] + " " + parsed_json['current_observation']['weather'] + " " + parsed_json['current_observation']['dewpoint_f'] + " " +
                    parsed_json['current_observation']['wind_mph'] + " " + parsed_json['current_observation']['wind_dir']);
                },
  

      error: function() {
        console.log("Error");
      }
	  
    });
}; // end function weatherData..
	
	
	
 
  



})