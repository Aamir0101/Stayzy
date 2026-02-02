const map = new maplibregl.Map({
  container: 'map',
  style: `https://maps.geoapify.com/v1/styles/klokantech-basic/style.json?apiKey=${mapToken}`, // stylesheet location
  center: coordinates, // starting position [lng, lat]
  zoom: 9 // starting zoom
});


const marker= new maplibregl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .addTo(map);