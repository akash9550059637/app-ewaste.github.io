// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Initialize the map
  var map = L.map("map").setView([0, 0], 13); // Default center at [0, 0] and zoom level 13

  // Add a tile layer to the map (you can replace the URL with your preferred tile provider)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Locate button click event
  document.getElementById("locateBtn").addEventListener("click", function () {
    // Get the user's current location
    map.locate({ setView: true, maxZoom: 15 });

    function onLocationFound(e) {
      var radius = e.accuracy / 2;

      L.marker(e.latlng)
        .addTo(map)
        .bindPopup("You are within " + radius + " meters from this point")
        .openPopup();

      L.circle(e.latlng, radius).addTo(map);
    }

    function onLocationError(e) {
      alert(e.message);
    }

    map.on("locationfound", onLocationFound);
    map.on("locationerror", onLocationError);
  });
});
