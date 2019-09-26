/*!
 * Map insert*
 *Taken from https://developers.google.com/maps/documentation/javascript/examples/marker-simple *
 */

function initMap() {

/* Position center of the map to approx center of the US */
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: {lat: 38.8283, lng: -98.5795}
    });

/* NYC */
    var marker = new google.maps.Marker({
      position: {lat: 40.7128, lng: -74.0059},
      map: map
    }); 
    
/* Philadelphia */
    var marker = new google.maps.Marker({
      position: {lat: 39.9526, lng: -75.1652},
      map: map
    });
    
/* SF */
    var marker = new google.maps.Marker({
      position: {lat: 37.7749, lng: -122.4194},
      map: map
    });
    
/* Cincinnati */
    var marker = new google.maps.Marker({
      position: {lat: 39.1031, lng: -84.5120},
      map: map
    });

/* Portland */ 
    var marker = new google.maps.Marker({
      position: {lat: 45.5231, lng: -122.6765},
      map: map
    });

/* Cleveland */ 
    var marker = new google.maps.Marker({
      position: {lat: 41.4993, lng: -81.6944},
      map: map
    });

/* St. Louis */ 
    var marker = new google.maps.Marker({
      position: {lat: 38.6270, lng: -90.1994},
      map: map
    });
    
/* Toledo, OH */ 
    var marker = new google.maps.Marker({
      position: {lat: 41.6639, lng: -83.5552},
      map: map
    });
}

