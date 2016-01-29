var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";
var map;

$(document).ready(function(){

//get data from endpoint
  $.get(weekly_quakes_endpoint,function(x) {
    newData = x;
    for (i=0;i<x.features.length;i++){
      //assign titles
      var title = x.features[i].properties.title;
      //time since last quake (converted to hours)
      var time = Math.floor((Date.now() - x.features[i].properties.time)/ (1000*60*60));
      //append titles to info section
      $('#info').append('<p>'+title+' / '+time+' hours ago.</p>');


    //create google map flags
      var lat = newData.features[i].geometry.coordinates[1];
      var lng = newData.features[i].geometry.coordinates[0];
      new google.maps.Marker({
        position: new google.maps.LatLng(lat,lng),
        map: map,
        title: title
      });
    }
  });

//map code
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 2
  });


});