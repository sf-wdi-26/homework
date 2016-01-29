var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

var map;

$(function main() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 8
  });

  // grab the data from the usgs endpoint
  $.ajax({
    url: weekly_quakes_endpoint,
    dataType: "json",
    success: function success(data) {
      // loop over it
      for (var set in data) {
        if (set === "title") {
          // add each title to the page
          $('#info').append('<p>' + data[set] + '</p>');
        } else if (typeof data[set] === "object") {
          success(data[set]);
        }
      }    
    }
  });
});