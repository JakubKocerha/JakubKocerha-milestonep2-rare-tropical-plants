function initMap() {
    // Maps initial options for different containers

    // default map view of South America
    var option1 = {
        zoom: 3,
        center: {
            lat: 11.852733,
            lng: -71.0000
        }
    }


    // default map view of South-East Asia
    var option2 = {
        zoom: 3,
        center: {
            lat: 14.431932,
            lng: 101.394869
        }
    }



    // New map for each container
    var mapA = new google.maps.Map(document.getElementById('map-a'), option1);
    var mapB = new google.maps.Map(document.getElementById('map-b'), option2);




    // Set the string of content into infoWindow
    var contentStringA =
        '<div>' +
        '<h2>Philodendron White Knight</h2>' +
        '<div>' +
        '<p>This rare beauty is native to the tropical forests of South America</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    var infowindowA = new google.maps.InfoWindow({
        content: contentStringA,
    });
    // Add marker for a map
    var markerA = new google.maps.Marker({
        position: {
            lat: 11.852733,
            lng: -71.0000
        },
        map: mapA,
        title: "Philodendron White Knight" // parameter of the map we have just created with var map
        // map: other div element
    });

    // listener triggering onclick function, rendering infoWindow
    markerA.addListener("click", () => {
        infowindowA.open({
            anchor: markerA,
            map: mapA,
            shouldFocus: false,
        });
    });



    var contentStringB =
        '<div>' +
        '<h2>Monstera Thai Constellation</h2>' +
        '<div>' +
        '<p>As not in case of its relatives, this special beauty found its birth in a laboratory in Thailand</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    var infowindowB = new google.maps.InfoWindow({
        content: contentStringB,
    });
    // Add marker for a map
    var markerB = new google.maps.Marker({
        position: {
            lat: 14.431932,
            lng: 101.394869
        },
        map: mapB,
        title: "Mostera Thai Constellation" // parameter of the map we have just created with var map
        // map: other div element
    });

    // listener triggering onclick function, rendering infoWindow
    markerB.addListener("click", () => {
        infowindowB.open({
            anchor: markerB,
            map: mapB,
            shouldFocus: false,
        });
    });
}