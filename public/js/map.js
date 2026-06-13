const coordinates = listing.geometry.coordinates;

const map = new maplibregl.Map({
  container: 'map',
  style: `https://maps.geoapify.com/v1/styles/klokantech-basic/style.json?apiKey=${mapToken}`,
  center: coordinates,
  zoom: 9
});

new maplibregl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .addTo(map);
