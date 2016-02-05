
function initialize() {
  // Create a map to show the results, and an info window to
  // pop up if the user clicks on the place marker.
  var generalAssembly = new google.maps.LatLng(37.790841,-122.401280);

  var map = new google.maps.Map(document.getElementById('map'), {
   center: generalAssembly,
    zoom: 15,
    zoomControl: true,
    scaleControl: true
  });
  var request = {
        location: generalAssembly,
        radius: '300',
        types: ['restaurant']
      };
  var stylesArray = [
           {
             featureType: "poi",
             elementType: "labels",
             stylers: [
               { visibility: "on" }
             ]
           }
         ];
  map.setOptions({styles: stylesArray});

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

        service.nearbySearch(request, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          var y;
          var len = indexNumberUsed.length;
          for(y = 0; y<len; y++){
            var place = results[indexNumberUsed[y]];
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
          }
        }
      });
//END OF SERVICE.NEARBYSEARCH 

  document.getElementById('submit').addEventListener('click', function() {
    placeDetailsByPlaceId(service, map, infowindow);
  });
}

function placeDetailsByPlaceId(service, map, infowindow) {
  // Create and send the request to obtain details for a specific place,
  // using its Place ID.
  var request = {
    placeId: document.getElementById('place-id').value
  };

  service.getDetails(request, function (place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      // If the request succeeds, draw the place location on the map
      // as a marker, and register an event to handle a click on the marker.
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
          'Place ID: ' + place.place_id + '<br>' +
          place.formatted_address + '</div>');
        infowindow.open(map, this);
      });

      map.panTo(place.geometry.location);
    }
  });
}