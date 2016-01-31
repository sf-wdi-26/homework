//What is the structure of the data? objects/properties/key:value pair
//How many earthquakes does it list? 2
//How would you grab the first earthquake? getelementbyid
//How would you grab it's title? getelementbytagname
//How would you grab it's geological coordinates: get coordinates
//latitude? coordinates = 1:y
//longitude? coordinates = 0:x
//When did it happen? properties => time in milliseconds: in x/1000 seconds
//How many hours ago is that? currentTime - timeWhenItOccured = timeTranspired

//Your short term goal is to render each title to the "info" section 
//of the page (see the commented example in your HTML)

//Psuedo Code:
//grab the data from the USGS endpoint. 
//loop over it
//add each title to the page

//Teacher's code!!

//Define all variables

var weeklyEarthquakeFeed = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";
var map;
var $getInfo;


// Create function to fetch data 
function fetchData (){
	$.get(weeklyEarthquakeFeed, function(response) {
		window.data = response;
		//Loop through
		response.features.forEach(function(quake){
			//Declare a variable called title
			var title = quake.properties.title;
			//Get the time difference between now and the earthquake; then convert to hours 
			var hoursAgo = Math.round (( Date.now() - quake.properties.time)/ (1000*60*60));
			//Add the info to the page
			//Create a variable that will be assigned a method that will 
			//Create a paragraph element
			var infoEl = document.createElement('p');
			//Create the expression or statement that will be added to the paragraph
			infoEl.innerText = title + " / " + hoursAgo + " hours ago";
			//Add the element plus the expression
			$getInfo.append(infoEl);

			//Create the map markers
			var lat = quake.geometry.coordinates[1];
			var lng = quake.geometry.coordinates[0];
			new google.maps.Marker({
				position: new google.maps.LatLng(lat,lng),
				map: map,
				title: title
			});
		});
	});
}	

//Function to create the map
function createMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.78, lng: -122.44 },
    zoom: 1
  });
}

function initData() {
	$getInfo = $('#info');
	fetchData();
	createMap();
};

