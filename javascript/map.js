function initialize() {
    var latlng = new google.maps.LatLng(47.3926533, 8.0511396);
    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
            myOptions);

    var markers = [{
            title: 'Rapperswil',
            position: {
                lat: 47.3935702,
                lng: 8.0544502
            },
            content: "<h2>Laurenzenvorstadt 131 <br> 5000 Aarau</h2><br><p>Tel: 062 832 32 92 <br> Gratisnummer: 0800 81 10 10</p>",
            marker: null
        },
        {
            title: 'Zürich Zoo',
            position: {
                lat: 47.39259,
                lng: 8.051514
            },
            content: "<h2>Laurenzenvorstadt 131 <br> 5000 Aarau</h2><br><p>Tel: 062 832 32 92 <br> Gratisnummer: 0800 81 10 10</p>",
            marker: null
        },
        {
            title: 'Bahnhofstrasse',
            position: {
                lat: 47.3926554,
                lng: 8.0483705
            },
            content: "<h2>Laurenzenvorstadt 131 <br> 5000 Aarau</h2><br><p>Tel: 062 832 32 92 <br> Gratisnummer: 0800 81 10 10</p>",
            marker: null
        }];
    addNewMarkers(markers, map);

    function addNewMarkers(markers, map) {

        var currentInfoWindow = null;

        var markersAmnt = markers.length;
        for (var i = 0; i < markersAmnt; i++) {

            var markerPos = new google.maps.LatLng(markers[i].position.lat, markers[i].position.lng);

            var marker = new google.maps.Marker({
                position: markerPos,
                map: map,
                title: markers[i].title,
            });

            var infoWindow = new google.maps.InfoWindow({
                // content: markers[i].content
            });

            google.maps.event.addListener(marker, 'click', function (pointer, bubble) {
                infoWindow.setContent(markers[i].content);
                return function () {
                    infoWindow.open(map, pointer);
                };
            }(marker, infoWindow));
        }
    }
}


