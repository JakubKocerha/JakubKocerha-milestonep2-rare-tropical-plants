function initMap() {
    // Maps initial options for different containers 
    // var option* content from youtube.com https://www.youtube.com/watch?v=Zxf1mnP5zcw&t=96s - Traversy media
    // default map view of North/South America
    const option1 = {
        zoom: 3,
        center: {lat: 11.8527, lng: -71.0000}
    };

    // default map view of South-East Asia
    const option2 = {
        zoom: 3,
        center: {lat: 14.4319, lng: 101.3948}
    };

     // default map view of South America
    const option3 = {
        zoom: 3,
        center: {lat: 1.623183, lng:  -71.141397}
    };

    // default map view of South America
    const option4 = {
        zoom: 3,
        center: {lat: 1.623183, lng:  -71.141397}
    };

    const option5 = {
        zoom: 3,
        center: {lat: 11.340078, lng:  -84.863427}
    };

    const option6 = {
        zoom: 3,
        center: {lat: 15.478299, lng:  -87.009321}
    }; 
    const option7 = {
        zoom: 3,
        center: {lat: 14.437863, lng:  -84.752535}
    };

    // Coded with a samples on Google API - documentation
    // A map for each container
    const mapA = new google.maps.Map(document.getElementById('map-a'), option1);
    const mapB = new google.maps.Map(document.getElementById('map-b'), option2);
    const mapC = new google.maps.Map(document.getElementById('map-c'), option3);
    const mapD = new google.maps.Map(document.getElementById('map-d'), option4);
    const mapE = new google.maps.Map(document.getElementById('map-e'), option5);
    const mapF = new google.maps.Map(document.getElementById('map-f'), option6);
    const mapG = new google.maps.Map(document.getElementById('map-g'), option7);

    // Set the string of content into infoWindow
    const contentStringA =
        '<div>' +
        '<h5>Philodendron White Knight</h5>' +
        '<div>' +
        '<p>This rare beauty is native to the tropical forests of South America</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    const infoWindowA = new google.maps.InfoWindow({
        content: contentStringA
    });
    // Add marker for a map
    const markerA = new google.maps.Marker({
        position: {
            lat: 11.852733,
            lng: -71.0000
        },
        map: mapA,
        title: "Philodendron White Knight" 
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
    const contentStringB =
        '<div>' +
        '<h5>Monstera Thai Constellation</h5>' +
        '<div>' +
        '<p>As not in case of its relatives, this special beauty found its birth in a laboratory in Thailand</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    const infoWindowB = new google.maps.InfoWindow({
        content: contentStringB
    });
    // Add marker for a map
    const markerB = new google.maps.Marker({
        position: {
            lat: 14.431932,
            lng: 101.394869
        },
        map: mapB,
        title: "Mostera Thai Constellation"
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
    const contentStringC =
        '<div>' +
        '<h5>Philodendron White Princess</h5>' +
        '<div>' +
        '<p>The home of this eye-catching beauty is in rainforests of South America</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    const infoWindowC = new google.maps.InfoWindow({
        content: contentStringC
    });
    // Add marker for a map
    const markerC = new google.maps.Marker({
        position: {
            lat: 1.623183,
            lng:  -71.141397
        },
        map: mapC,
        title: "Philodendron White Princess"
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
    const contentStringD =
        '<div>' +
        '<h5>Philodendron Pink Princess</h5>' +
        '<div>' +
        '<p>Rainforests of Ecuador and Colombia are places where you would find this trendy plant growing wildly.</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    const infoWindowD = new google.maps.InfoWindow({
        content: contentStringD
    });
    // Add marker for a map
    const markerD = new google.maps.Marker({
        position: {
            lat: 1.623183,
            lng:  -71.141397
        },
        map: mapD,
        title: "Philodendron Pink Princess"
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
    const contentStringE =
        '<div>' +
        '<h5>Syngonium Confetti</h5>' +
        '<div>' +
        '<p>Syngonium Confetti likes to climb up to 20 meters on trees and its native area is the whole Central and South America.</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    const infoWindowE = new google.maps.InfoWindow({
        content: contentStringE
    });
    // Add marker for a map
    const markerE = new google.maps.Marker({
        position: {
            lat: 1.623183,
            lng:  -71.141397
        },
        map: mapE,
        title: "Syngonium Confetti"
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
    const contentStringF =
        '<div>' +
        '<h5>Monstera Albo</h5>' +
        '<div>' +
        '<p>You would find it very difficult to see this variegated form in free nature as it is so rare. The green form is could be seen in forests of Central and South America.</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    const infoWindowF = new google.maps.InfoWindow({
        content: contentStringF
    });
    // Add marker for a map
    const markerF = new google.maps.Marker({
        position: {
            lat: 15.478299,
            lng:  -87.009321
        },
        map: mapF,
        title: "Monstera Albo"
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
    const contentStringG =
        '<div>' +
        '<h5>Syngonium Podophyllum Albo</h5>' +
        '<div>' +
        '<p>You would mostly find Syngonium Albo in tropical forests of Central America.</p>' +
        '</div>' +
        '</div>';

    // Google Apis documentation - Setting infowndow with contentString variable
    const infoWindowG = new google.maps.InfoWindow({
        content: contentStringG
    });
    // Add marker for a map
    const markerG = new google.maps.Marker({
        position: {
            lat: 14.437863,
            lng:  -84.752535
        },
        map: mapG,
        title: "Syngonium Podophyllum Albo"
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