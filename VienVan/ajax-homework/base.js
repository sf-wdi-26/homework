var weekly_quakes_endpoint =
  "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

var map;
var center = {
  lat: 11.6,
  lng: 43.16
}


map = new google.maps.Map(document.getElementById('map'), {
  center: center,
  zoom: 2
});

// var marker = new google.maps.Marker({
//   position: center,
//   map: map,
//   title: 'Hello World!'
// });

$.ajax({
  type: 'GET',
  url: weekly_quakes_endpoint,
  dataType: 'json',
  success: function(data) {
    // console.log(data);

    for (var i = 0; i < data.features.length; i++) {
      var timeInDays = Math.floor((Date.now() / (1000 * 60 * 60)) -
        (data.features[i].properties
          .time) / (
          1000 * 60 * 60));
      $('#info').append("<li>" + data.features[i].properties.place + " " +
        "<span>" + timeInDays + " hours ago.</span>" + "</li>");
      var marker = new google.maps.Marker({
        position: {
          lat: data.features[i].geometry.coordinates[1],
          lng: data.features[i].geometry.coordinates[0]
        },
        map: map,
        title: 'Hello World!'
      });
    }


  }
});

//Third bonus, I would add an if else statement to check whether the magnitude is larger or not
//Then I would add pictures of the dots and prepend the list items.
