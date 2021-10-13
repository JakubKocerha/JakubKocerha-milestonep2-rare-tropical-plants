function initMap() {
    // Maps options
    var options = {
        zoom: 4,
        center: {
            lat: 42.0000,
            lng: -71.0000
        }
    }
    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Add marker
    var marker = new google.maps.Marker({
        position: {
            lat: 42.4668,
            lng: -70.0000
        },
        map: map
    });
}