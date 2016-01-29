var weekly_quakes_endpoint =
  "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

var map;
var center = {
  lat: 11.6,
  lng: 43.16
}


map = new google.maps.Map(document.getElementById('map'), {
  center: center,
  zoom: 3
});

var marker = new google.maps.Marker({
  position: center,
  map: map,
  title: 'Hello World!'
});

$.ajax({
  type: 'GET',
  url: weekly_quakes_endpoint,
  dataType: 'json',
  success: function(data) {

    for (var i = 0; i < data.features.length; i++) {
      $('#info').append("<li>" + data.features[i].properties.title +
        "</li>");
      var latitude = data.features[i].geometry.coordinates[1];
      var longitude = data.features[i].geometry.coordinates[0];

      var marker = new google.maps.Marker({
        position: {
          lat: latitude,
          lng: longitude
        },
        map: map,
        title: 'Hello World!'
      });

    }


  }
});
