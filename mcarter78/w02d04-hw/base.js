var today = new Date();
var currentTime = today.getTime();
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";
var map;
var quakeData;                                      // variable to store ajax response
var quakeTimes = [];                                // empty array to store times in
var quakeTitles = [];                               // empty array to store titles in
var markers = [];                                   // empty array to store google maps markers
var msConvert = 60 * 60 * 1000;                     // convert milliseconds to hours

map = new google.maps.Map(document.getElementById('map'), {   // display google map in #map div
  center: { lat: 37.78, lng: -122.44},                        // SF coordinates
  zoom: 8
});

var markerSF = new google.maps.Marker({                       // marker for SF
  map: map,
  position: { lat: 37.78, lng: -122.44 }
});

$.ajax({                                                      // request to USGS api for earthquake data
  type: 'GET',
  url: weekly_quakes_endpoint,
  success: function(data){
      quakeData = data;                                       // store response data
      for(var i = 0; i < (quakeData.features).length; i++){   // loop through response
        if((quakeData.features)[i].properties.mag >= 4){      // if earthquake magnitude is >= 4.0
          var quakeLat = (quakeData.features)[i].geometry.coordinates[1]; // store lattitude of quake
          var quakeLong = (quakeData.features)[i].geometry.coordinates[0];// store longitude of quake
          var quakeTime = (quakeData.features)[i].properties.time;   // store time of quake
          var quakeTitle = (quakeData.features)[i].properties.title;      // store the title of quake
          console.log(quakeTitle);
          var marker = new google.maps.Marker({                           // new google maps marker for quake
            map: map,
            position: { lat: quakeLat, lng: quakeLong }                   // lattitude / longitude of quake
          });
          var timeAgo = Math.round((currentTime - quakeTime) / msConvert);  // stores difference between times and converts to hours
          $('#info').append("<p>" + timeAgo + " hours ago: " + quakeTitle + "</p>");  // append time and title to #info div
          quakeTimes.push(quakeTime);                                     // push quake time to times array
          quakeTitles.push(quakeTitle);                                   // push quake title to titles array
          markers.push(marker);                                           // push marker to markers array

        }

      }


  }
});
