var map;

$(document).ready(function(){

	//a variable storing the lat/lon of san francisco
	var sanFran = {lat: 37.78, lng: -122.44};

	//This will make a map appear on the DOM if the key permissions is allowed
	map = new google.maps.Map(document.getElementById('map'), {
		center: sanFran,
		zoom: 2
	});

	//builds a new date object
	var dayTime = new Date();

	//this will drop a pin on san francisco
	// var sfMarker = new google.maps.Marker({
	// 	position: sanFran,
	// 	map: map,
	// 	title: "Here's San Francisco"
	// });

	//this is the url we'll use to access the api we're workign with
	var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

	//here we access the JSON and make the callback event we're using, 'data'
	$.get(weekly_quakes_endpoint, function (data) {

		//We define the variable earthquakeNum as the amount of earthquakes that have happened this week.
		//This will be used to iterate through the JSON to get all of the titles
		var earthquakeNum = data.metadata.count;

		//We are appending the number of earthquakes to the html.  This  also allows quick feedback to see if the title
		//quantity and number of earthquakes match.
		$("#earthquakeCount").append(earthquakeNum);

		//This for loop will iterate through the number of titles from the metadata and append their titles
		//as an unordered list, then does all of the work with the data from api, dropping pins and calculating
		//the time since
		for (x = 0; x < earthquakeNum; x++) {
			$("#info").append("<li>" + "<a href=\"" + data.features[x].properties.url + "\"</a>" + data.features[x].properties.title + "</li>");

			//gets the time of the earthquake
			var quakeTime = data.features[x].properties.time;
			
			//gets the time right now
			var timeNow = dayTime.getTime();
			
			//calculates how long it's been since the earthquake
			var timeAgo = Math.round((timeNow - quakeTime) / (1000 * 60 * 60));
			
			//scales an image to be used if the magnitude is less than 4
			var magLessThan4 = new google.maps.MarkerImage (
				"CSS/artist-animals-funny-memes.jpg",
				null,
				null,
				null,
				new google.maps.Size(40, 40)
			);

			//scales an image to be used if hte magnitude is more than 4 and less than 5
			var magGtrThan4 = new google.maps.MarkerImage(
				"CSS/ff2bda18d8a8f6f202d0c9c7dd329863b0d33727_m.jpg",
				null,
				null,
				null,
				new google.maps.Size(40, 40)
			);

			//scales an image to be used if the magnitude is more than 5
			var magGtrThan5 = new google.maps.MarkerImage (
				"CSS/Another+derpy+cat+post+herp+herp+derp_b8ab4b_5418229.jpg",
				null,
				null,
				null,
				new google.maps.Size(40, 40)
			);

			//sets the icon to use, default is less than 4
			var imgUsed = magLessThan4;

			//if else statement that decides the image and sets it equal to imgUsed based off magnitude of earthquak
			if (data.features[x].properties.mag > 4 && data.features[x].properties.mag < 5) {
				imgUsed = magGtrThan4;
			} else if (data.features[x].properties.mag > 5) {
				imgUsed = magGtrThan5;
			}

			//appends how long ago the earthquake occured
			$("#info").append("<p>This earthquake occured " + timeAgo + " hours ago.</p><hr>");

			//variables that grab the latitude, longitude, and place the earthquake happened
			var geoLat = data.features[x].geometry.coordinates[1];
			var geoLng = data.features[x].geometry.coordinates[0];
			var place = data.features[x].properties.place;

			//builds a new marker on the map using the above data from the api, gives it a title, and places an icon on the map
			new google.maps.Marker ({
				position: {lat: geoLat, lng: geoLng},
				map: map, 
				title: place,
				icon: imgUsed
			});
		}


	});

});


















