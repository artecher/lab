$(document).ready(function(){

  pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "pannellum/sf_logo.png",
    preview: 'pannellum/sf_logo.png'
  });

  let fullScreen = () => {
    $('#panorama').toggleClass('full-screen');
  }
});
