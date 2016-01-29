var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

var map;
var quakeData;
var quakeTitles = [];
var markers = [];
// show M4.0 or greater earthquakes on the map

// List details about the earthquake
// Put a pin on the map at the epicenter

map = new google.maps.Map(document.getElementById('map'), {
  center: { lat: 37.78, lng: -122.44},
  zoom: 8
});

var markerSF = new google.maps.Marker({
  map: map,
  position: { lat: 37.78, lng: -122.44 }
});

$.ajax({
  type: 'GET',
  url: weekly_quakes_endpoint,
  success: function(data){
      quakeData = data;
      for(var i = 0; i < (quakeData.features).length; i++){
        if((quakeData.features)[i].properties.mag >= 4){
          console.log("success!!");
          // store lat/long in marker
          var quakeLat = (quakeData.features)[i].geometry.coordinates[1];
          var quakeLong = (quakeData.features)[i].geometry.coordinates[0];
          var quakeTitle = (quakeData.features)[i].properties.title;
          var marker = new google.maps.Marker({
            map: map,
            position: { lat: quakeLat, lng: quakeLong }
          });
          quakeTitles.push(quakeTitle);
          markers.push(marker);

        }

      }
      for(var j = 0; j < quakeTitles.length; j++){
        $('#info').append("<p>" + quakeTitles[j] + "</p>");
      }
  }
});

// loop through quakeData
// if (quake magnitude >= 4)
// quakeData.features[1].properties.mag
