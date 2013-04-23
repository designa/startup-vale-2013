;(function(w, d, u) {

  var marker, position, map;

  position = new google.maps.LatLng(-23.156371,-45.792925),

  config = {
      center: position,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      zoom: 16
  };

  map = new google.maps.Map(d.getElementById("location-map"), config);

  marker = new google.maps.Marker({
      animation: google.maps.Animation.BOUNCE,
      map: map,
      position: position
  });

}(window, document, undefined));