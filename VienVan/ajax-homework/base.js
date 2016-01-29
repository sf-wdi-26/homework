var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

var map;


  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 8
  });

$.ajax({
  type: 'GET',
  url: weekly_quakes_endpoint,
  dataType: 'json',
  success: function(data) {
    var featuresArray = data.features;
    for(var i = 0; i < data.features.length; i++) {
      $('#info').append("<li>" + data.features[i].properties.title + "</li>");
    }
  }
});
