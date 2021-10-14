function initMap() {
    // Maps initial options for different containers

    // default map view of North/South America
    var option1 = {
        zoom: 3,
        center: {lat: 11.8527, lng: -71.0000}
    };

    // default map view of South-East Asia
    var option2 = {
        zoom: 3,
        center: {lat: 14.4319, lng: 101.3948}
    };

     // default map view of South America
    var option3 = {
        zoom: 3,
        center: {lat: 1.623183, lng:  -71.141397}
    };

    // default map view of South America
    var option4 = {
        zoom: 3,
        center: {lat: 1.623183, lng:  -71.141397}
    };

    var option5 = {
        zoom: 3,
        center: {lat: 11.340078, lng:  -84.863427}
    };

    var option6 = {
        zoom: 3,
        center: {lat: 15.478299, lng:  -87.009321}
    }; 
    var option7 = {
        zoom: 3,
        center: {lat: 14.437863, lng:  -84.752535}
    };

    // New map for each container
    var mapA = new google.maps.Map(document.getElementById('map-a'), option1);
    var mapB = new google.maps.Map(document.getElementById('map-b'), option2);
    var mapC = new google.maps.Map(document.getElementById('map-c'), option3);
    var mapD = new google.maps.Map(document.getElementById('map-d'), option4);
    var mapE = new google.maps.Map(document.getElementById('map-e'), option5);
    var mapF = new google.maps.Map(document.getElementById('map-f'), option6);
    var mapG = new google.maps.Map(document.getElementById('map-g'), option7);

    // Set the string of content into infoWindow
    var contentStringA =
        '<div>' +
        '<h2>Philodendron White Knight</h2>' +
        '<div>' +
        '<p>This rare beauty is native to the tropical forests of South America</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    var infoWindowA = new google.maps.InfoWindow({
        content: contentStringA
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
        infoWindowA.open({
            anchor: markerA,
            map: mapA,
            shouldFocus: false,
        });
    });


    // Set the string of content into infoWindow
    var contentStringB =
        '<div>' +
        '<h2>Monstera Thai Constellation</h2>' +
        '<div>' +
        '<p>As not in case of its relatives, this special beauty found its birth in a laboratory in Thailand</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    var infoWindowB = new google.maps.InfoWindow({
        content: contentStringB
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
        infoWindowB.open({
            anchor: markerB,
            map: mapB,
            shouldFocus: false,
        });
    });

    // Set the string of content into infoWindow
    var contentStringC =
        '<div>' +
        '<h2>Philodendron White Princess</h2>' +
        '<div>' +
        '<p>The home of this eye-catching beauty is in rainforests of South America</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    var infoWindowC = new google.maps.InfoWindow({
        content: contentStringC
    });
    // Add marker for a map
    var markerC = new google.maps.Marker({
        position: {
            lat: 1.623183,
            lng:  -71.141397
        },
        map: mapC,
        title: "Philodendron White Princess" // parameter of the map we have just created with var map
        // map: other div element
    });

    // listener triggering onclick function, rendering infoWindow
    markerC.addListener("click", () => {
        infoWindowC.open({
            anchor: markerC,
            map: mapC,
            shouldFocus: false,
        });
    });

    // Set the string of content into infoWindow
    var contentStringD =
        '<div>' +
        '<h2>Philodendron Pink Princess</h2>' +
        '<div>' +
        '<p>Rainforests of Ecuador and Colombia are places where you would find this trendy plant growing wildly.</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    var infoWindowD = new google.maps.InfoWindow({
        content: contentStringD
    });
    // Add marker for a map
    var markerD = new google.maps.Marker({
        position: {
            lat: 1.623183,
            lng:  -71.141397
        },
        map: mapD,
        title: "Philodendron Pink Princess" // parameter of the map we have just created with var map
        // map: other div element
    });

    // listener triggering onclick function, rendering infoWindow
    markerD.addListener("click", () => {
        infoWindowD.open({
            anchor: markerD,
            map: mapD,
            shouldFocus: false,
        });
    });

    // Set the string of content into infoWindow
    var contentStringE =
        '<div>' +
        '<h2>Syngonium Confetti</h2>' +
        '<div>' +
        '<p>Syngonium Confetti likes to climb up to 20 meters on trees and its native area is the whole Central and South America.</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    var infoWindowE = new google.maps.InfoWindow({
        content: contentStringE
    });
    // Add marker for a map
    var markerE = new google.maps.Marker({
        position: {
            lat: 1.623183,
            lng:  -71.141397
        },
        map: mapE,
        title: "Syngonium Confetti" // parameter of the map we have just created with var map
        // map: other div element
    });

    // listener triggering onclick function, rendering infoWindow
    markerE.addListener("click", () => {
        infoWindowE.open({
            anchor: markerE,
            map: mapE,
            shouldFocus: false,
        });
    });

    // Set the string of content into infoWindow
    var contentStringF =
        '<div>' +
        '<h2>Monstera Albo</h2>' +
        '<div>' +
        '<p>You would find it very difficult to see this variegated form in free nature as it is so rare. The green form is could be seen in forests of Central and South America.</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    var infoWindowF = new google.maps.InfoWindow({
        content: contentStringF
    });
    // Add marker for a map
    var markerF = new google.maps.Marker({
        position: {
            lat: 15.478299,
            lng:  -87.009321
        },
        map: mapF,
        title: "Monstera Albo" // parameter of the map we have just created with var map
        // map: other div element
    });
    
    // listener triggering onclick function, rendering infoWindow
    markerF.addListener("click", () => {
        infoWindowF.open({
            anchor: markerF,
            map: mapF,
            shouldFocus: false,
        });
    });

    // Set the string of content into infoWindow
    var contentStringG =
        '<div>' +
        '<h2>Syngonium Podophyllum Albo</h2>' +
        '<div>' +
        '<p>You would mostly find Syngonium Albo in tropical forests of Central America.</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    var infoWindowG = new google.maps.InfoWindow({
        content: contentStringG
    });
    // Add marker for a map
    var markerG = new google.maps.Marker({
        position: {
            lat: 14.437863,
            lng:  -84.752535
        },
        map: mapG,
        title: "Syngonium Podophyllum Albo" // parameter of the map we have just created with var map
        // map: other div element
    });
    
    // listener triggering onclick function, rendering infoWindow
    markerG.addListener("click", () => {
        infoWindowG.open({
            anchor: markerG,
            map: mapG,
            shouldFocus: false,
        });
    });
}