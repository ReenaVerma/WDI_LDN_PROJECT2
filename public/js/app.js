$(() => {
  $('form').validate();

  // function initMap() {
  //   const map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 2,
  //     center: new google.maps.LatLng(2.8,-187.3),
  //     mapTypeId: 'terrain'
  //   });
  // }

  // filepicker.setKey("AfcnFThTU4ebKMjxRMngSz");

  const button = document.getElementById('upload');

  button.addEventListener('click', (e) => {
    const client = filestack.init('AzIEvsoFPTqyx3Hl6QM08z');
    client.pick();

  });



});
