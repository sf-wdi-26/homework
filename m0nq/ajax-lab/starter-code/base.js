var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

var map;

$(function main() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 11.6, lng: 43.16},
    zoom: 8
  });

  // grab the data from the usgs endpoint
  $.ajax({
    url: weekly_quakes_endpoint,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      // loop over it
      for (var set in data) {
        if (set === "title") {
          $('#info').append('<h1>' + data[set] + '</h1>');
        }
      }    
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // body...
    }
  });
  // add each title to the page

});

/*
  else if (typeof data[set] === "object") {
          success(data[set]);
        } else if (Array.isArray(data[set])) {
          data[set].forEach(function (element, i) {
            if (element[i] === "object") {
              success(element[i]);
            }
          });
        }
*/