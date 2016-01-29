
var $info_row_target;
var quakesendpoint= 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson'; 
var map;

$(document).ready(function(){

$info_row_target = $("#info");
createMap();
quakeData();

  // //places "thoughts" into a list on site
  //   $("#list-id").append("<li>" + words + "</li>");
  //   $(this).find('textarea').val('');

});

function quakeData(){
	$.get(quakesendpoint, function(response){
		response.features.forEach(function renderRowAndMarker(quake){
			var title = quake.properties.title;
			$info_row_target.append("<p>" + title + "</p>");
			var lat = quake.geometry.coordinates[1];
			var lng = quake.geometry.coordinates[0];
			new google.maps.Marker ({
				position: new google.maps.LatLng(lat,lng),
				map: map,
				title: title
			});
		});

	})
}

function createMap(){
	map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 2
  });
}





