var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"
var map;


$(document).ready(function(){

	console.log("base.js working..");
  
	var myLatLng = {lat: 37.78, lng: -122.44};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8,
		center: myLatLng
	});



	  // var marker = new google.maps.Marker({
	  //   position: myLatLng,
	  //   map: map,
	  //   title: 'Hello World!'
	  // });

	
	$.get(weekly_quakes_endpoint).done(function(response_data){
		// console.log("hello world");
		// console.log(response_data);

		var newData = response_data;
		//window.newDataw = response_data;
		// var title;
		// var lng;
		// var lat;



		for (var i = 0; i < newData.features.length; i++) {


			//better
			//var infoEl = $('<p></p>').html(title + '/' + hoursAgo + 'hours ago')
			//infoE.innerText = title + '/' + hoursAgo + 'hours ago';
			//$('$info').append($infoEl)
			var title = newData.features[i].properties.title; 
			$('#info').append('<div>' + title + '</div>');

			var lng = newData.features[i].geometry.coordinates[0];
			var lat = newData.features[i].geometry.coordinates[1];
			 
			new google.maps.Marker({
				position: new google.maps.LatLng(lat,lng),
				map: map,
				title: title
			});


		}



	});

});

		// function initialize() {

  //       var locations = [
  //           ['San Francisco', 37.78, -122.44],
  //           ['Point Atkinson', 49.329925, -123.264994]
  //       ];

  //       var mapOptions = {
  //           center: new google.maps.LatLng(49.343085, -123.305938),
  //           zoom: 13,
  //           mapTypeControl: false,
  //           panControl: false,
  //           streetViewControl: false,
  //           zoomControl: false,
  //           disableDoubleClickZoom: true,
  //       };
  //       var map = new google.maps.Map(document.getElementById('map'),
  //           mapOptions);

  //       var marker, i;

  //       for(i=0; i < locations.length; i++){
  //           marker = new google.maps.Marker({
  //           position: new google.maps.LatLng(locations[i][1], locations[i][2]),
  //           map: map
  //       });
  //   }
  //   google.maps.event.addDomListener(window, 'load', initialize);


//AIzaSyBNNV_gG0iPOHNwB6aYx7zYbJTCceF243g

		// Kingdom of Chocolate //Moon of Pizza
			// console.log('daniel was here', i)
			// console.log(title);
			// newTitle.push(title);
			// console.log(newTitle);

		//$('#info').html(title);

	





// $.get(weekly_quakes_endpoint, function(response_data) {
//   // creating a global variable to inspect the new data is good
//   // just remember to make it local once your done inspecting!
//   newData = response_data;





// });




