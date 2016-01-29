var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

var map;

$(document).ready(function(){

  // map = new google.maps.Map(document.getElementById('map'), {
  //   center: {lat: 11.6, lng: 43.16},
  //   zoom: 8
  // });


   map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 1
  });




  $.ajax({
  type: 'GET',
  url: weekly_quakes_endpoint,
  success: function(data) {
    //celebrate!
    console.log(data);
    console.log(data.features[0].properties.title);
    console.log(data.features[0].geometry.coordinates);

    var featuresArray = data.features;

	for(var i=0; i < featuresArray.length; i++){

		var li = document.createElement('li');

		$(li).html(featuresArray[i].properties.title);

		$('#info').append(li);

		var myLatLng = {lat: featuresArray[i].geometry.coordinates[1], lng: featuresArray[i].geometry.coordinates[0]};

		var marker = new google.maps.Marker({
		    position: myLatLng,
		    map: map
		  });
	}

	
 	 }
	});


});

