/* global google */

$(() => {

  $('form').validate();
});

//GOOGLE LOCATION AUTOCOMPLETE



//FILESTACK UPLOAD FUNCTION
// const button = document.getElementById('upload');
//
// button.addEventListener('click', (e) => {
//   const client = filestack.init('AzIEvsoFPTqyx3Hl6QM08z');
//   client.pick();
//
// });




var placeSearch, autocomplete, geocoder;

function initAutocomplete() {
geocoder = new google.maps.Geocoder();
  autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete'))/*,
      {types: ['(cities)']}*/);

autocomplete.addListener('place_changed', fillInAddress);
}

function codeAddress(address) {
geocoder.geocode( { 'address': address}, function(results, status) {
    if (status === 'OK') {
      console.log('Results geomtry location' + results[0].geometry.location);
    } else {
      console.log('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function fillInAddress() {
  var place = autocomplete.getPlace();
  console.log(place);
  const lat = document.querySelector('[name=lat]');
  const lng = document.querySelector('[name=lng]');
  const location = place.geometry.location.toJSON();
  lat.value = location.lat;
  lng.value = location.lng;
  console.log(location.lat);
  console.log(location.lat);
  //   codeAddress(document.getElementById('autocomplete').value);
}





//
// var geocoder;
// var map;
// var mapOptions = {
//   zoom: 17,
//   center: { lat: 51.5, lng: -0.08 },
//   mapTypeId: google.maps.MapTypeId.ROADMAP
// };
// var marker;
// function initialize() {
//   geocoder = new google.maps.Geocoder();
//   map = new google.maps.Map(document.getElementById('map'), mapOptions);
//   console.log('hello');
//   // codeAddress();
// }
// initialize();
// function codeAddress() {
//   var address = `${popup.address}`;
//   console.log('hello2');
//   geocoder.geocode( { 'address': address}, function(results, status) {
//     if (status === google.maps.GeocoderStatus.OK) {
//       map.setCenter(results[0].geometry.location);
//       if(marker)
//         marker.setMap(null);
//       marker = new google.maps.Marker({
//         map: map,
//         position: results[0].geometry.location,
//         draggable: true
//       });
//       google.maps.event.addListener(marker, 'dragend', function() {
// }
//
//
//
// 107
// var simpleGoogleMapsApiExample = simpleGoogleMapsApiExample || {};
//
// simpleGoogleMapsApiExample.map = function (mapDiv, latitude, longitude, accuracy) {
//   "use strict";
//
//   var createMap = function (mapDiv, coordinates) {
//     var mapOptions = {
//       center: coordinates,
//       mapTypeId: google.maps.MapTypeId.ROADMAP,
//       zoom: 15
//     };
//
//     return new google.maps.Map(mapDiv, mapOptions);
//   };
//
//   var addMarker = function (map, coordinates) {
//     var markerOptions = {
//       clickable: false,
//       map: map,
//       position: coordinates
//     };
//
//     return new google.maps.Marker(markerOptions);
//   };
//
//   var addCircle = function (map, coordinates, accuracy) {
//     var circleOptions = {
//       center: coordinates,
//       clickable: false,
//       fillColor: "blue",
//       fillOpacity: 0.15,
//       map: map,
//       radius: accuracy,
//       strokeColor: "blue",
//       strokeOpacity: 0.3,
//       strokeWeight: 2
//     };
//
//     return new google.maps.Circle(circleOptions);
//   };
//
//   var infoWindowVisible = (function () {
//     var currentlyVisible = false;
//
//     return function (visible) {
//       if (visible !== undefined) {
//         currentlyVisible = visible;
//       }
//
//       return currentlyVisible;
//     };
//   }());
//
//   var addInfoWindowListeners = function (map, marker, infoWindow) {
//     google.maps.event.addListener(marker, "click", function () {
//       if (infoWindowVisible()) {
//         infoWindow.close();
//         infoWindowVisible(false);
//       } else {
//         infoWindow.open(map, marker);
//         infoWindowVisible(true);
//       }
//     });
//
//     google.maps.event.addListener(infoWindow, "closeclick", function () {
//       infoWindowVisible(false);
//     });
//   };
//
//   var addInfoWindow = function (map, marker, address) {
//     var infoWindowOptions = {
//       content: address,
//       maxWidth: 200
//     };
//     var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
//
//     addInfoWindowListeners(map, marker, infoWindow);
//
//     return infoWindow;
//   };
//
//   var initialize = function (mapDiv, latitude, longitude, accuracy) {
//     var coordinates = new google.maps.LatLng(latitude, longitude);
//     var map = createMap(mapDiv, coordinates);
//     var marker = addMarker(map, coordinates);
//     var geocoder = new google.maps.Geocoder();
//
//     addCircle(map, coordinates, accuracy);
//
//     geocoder.geocode({
//       location: coordinates
//     }, function (results, status) {
//       if (status === google.maps.GeocoderStatus.OK && results[0]) {
//         marker.setClickable(true);
//         addInfoWindow(map, marker, results[0].formatted_address);
//       }
//     });
//   };
//
//   initialize(mapDiv, latitude, longitude, accuracy);
// };
//
// $(document).ready(function () {
//   "use strict";
//
//   simpleGoogleMapsApiExample.map($("#map")[0], 55.612278, 12.999406, 70);
// });
