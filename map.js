$(document).ready(function() {
    // Your Google Maps API key
    var apiKey = 'YOUR_GOOGLE_MAP_API_KEY'; // Replace Your Google Maps API key

    // The address you want to show on the map
    var address = '1600 Amphitheatre Parkway, Mountain View, CA'; // Replace
    
    var encodedAddress = encodeURIComponent(address);

    // Map parameters
    var zoom = 15;
    var size = '600x400';
    var mapType = 'roadmap';
    var mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&zoom=${zoom}&size=${size}&maptype=${mapType}&markers=color:red%7Clabel:A%7C${encodedAddress}&key=${apiKey}`;
    $('#location-map').attr('src', mapUrl);
});
