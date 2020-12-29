/* global google */

$(() => {

  $('form').validate();


  const $ratingValue = $('.ratingValue');
  const $stars = $('[name=rating]');

  $stars.change(function(e) {
    $ratingValue.val($(e.target).val());
  });

  // FILESTACK UPLOAD FUNCTION


  const button = document.getElementById('upload');
  const gallery = document.getElementById('gallery');
  const imgPreview = document.getElementById('imgPreview');
  const input = document.getElementById('imageUpload');

  let transformURL = 'https://cdn.filestack.com/watermark=file:';



  if (button) button.addEventListener('click', () => {
    const client = filestack.init('AdNrYxHMbT6CV8LNskM1iz');
    client.pick({
      fromSources:['local_file_system','imagesearch','facebook','instagram','webcam'],
      accept: 'image/*',
      maxFiles: 3,
      transformations: {
        crop: { force: true },
        crop: { aspectRatio:1.333 }
      }
    }).then(function(result) {
      let fileUrl = result.filesUploaded[0].url;
      console.log(fileUrl);
      // gallery.setAttribute('src', fileUrl);
      input.value = fileUrl;
      // imgPreview.src = fileUrl;
      console.log(input.value);


    });
  });


  // USER RATINGS






  // jquery loader
});


//GOOGLE LOCATION AUTOCOMPLETE

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
