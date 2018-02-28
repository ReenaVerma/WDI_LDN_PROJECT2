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
  const input = document.getElementById('imageUpload');

  let transformURL = 'https://cdn.filestack.com/watermark=file:';



  if (button) button.addEventListener('click', () => {
    const client = filestack.init('AzIEvsoFPTqyx3Hl6QM08z');
    client.pick({
      fromSources:['local_file_system','imagesearch','facebook','instagram','webcam'],
      accept: 'image/*',
      maxFiles: 5,
      transformations: {
        crop: { force: true },
        crop: { aspectRatio:1.333 }
      }
    }).then(function(result) {
      let fileUrl = result.filesUploaded[0].url;
      console.log(fileUrl);
      // gallery.setAttribute('src', fileUrl);
      input.value = fileUrl;
      console.log(input.value);


    });
  });


  // USER RATINGS

  const reviewsCount = document.getElementById('reviewsCount');
  const userRating = document.getElementById('userRating');

  const star5 = document.getElementById('star5');
  const star4 = document.getElementById('star4');
  const star3 = document.getElementById('star3');
  const star2 = document.getElementById('star2');
  const star1 = document.getElementById('star1');

  let rating = 0;

  function upCount() {
    console.log('clicked ' + rating + 'times');
    rating++;
    // averageCount = rating;
    console.log('incremented');
    reviewsCount.innerHTML = rating + ' ratings!';
    // console.log(averageCount);
    // total value clicked divide by rating
    // console.log(values);
    //
    // sum + rating/ ratings.length;
  }

  // 5 STARS
  star5.addEventListener('click', () => {
    upCount();
  });

  // 4 STARS
  star4.addEventListener('click', () => {
    upCount();
  });

  // 3 STARS
  star3.addEventListener('click', () => {
    upCount();
  });

  // 2 STARS
  star2.addEventListener('click', () => {
    upCount();
  });

  // 1 STARS
  star1.addEventListener('click', () => {
    upCount();
  });



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
  console.log(place.photos[0].getUrl);
  const lat = document.querySelector('[name=lat]');
  const lng = document.querySelector('[name=lng]');
  const location = place.geometry.location.toJSON();
  lat.value = location.lat;
  lng.value = location.lng;
  console.log(location.lat);
  console.log(location.lat);
  //   codeAddress(document.getElementById('autocomplete').value);
}
