var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

var map;

$(function main() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 2
  });

  // grab the data from the usgs endpoint
  $.ajax({
    url: weekly_quakes_endpoint,
    dataType: "json",
    success: function success(data) {
      // loop over it
      // debugger;
      for (var set in data) {
        if (set === "title") {
          // add each title to the page
          $('#info').append('<p>' + data[set] + '</p>');
        } else if (set === "coordinates") {
          makeMarker(data[set][1], data[set][0])();
        } else if (typeof data[set] === "object") {
          success(data[set]);
        }
      }    
    }
  });

  function makeMarker (latitude, longitude) {
    
    return (function initMap() {
              var myLatLng = {lat: latitude, lng: longitude};
        
              var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Last weeks earthquakes'
              });
            });
  }
});