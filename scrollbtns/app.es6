

$(document).ready(function(){
  pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "pannellum/sf_logo.png",
    preview: 'pannellum/sf_logo.png'
  });


  function doOnOrientationChange()
  {
    console.log('here');

    setTimeout(function(){
      $('#panorama > *').remove();
      // for(var node in childNodes){
      //   console.log(childNodes[node].remove());
      //
      // }

      pannellum.viewer('panorama', {
        "type": "equirectangular",
        "panorama": "pannellum/sf_logo.png",
        preview: 'pannellum/sf_logo.png'
      });
    }, 2000)
  }

  window.addEventListener('orientationchange', doOnOrientationChange);



})
