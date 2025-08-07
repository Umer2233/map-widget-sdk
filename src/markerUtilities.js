import mapboxgl from "mapbox-gl";

const addSingleMarker = (map, lat, lng, popUplabel) => {
  const newMarker = new mapboxgl.Marker()
    .setLngLat([lng, lat])
    .setPopup(new mapboxgl.Popup().setHTML(`<strong>${popUplabel}</strong>`))
    .addTo(map);

  return newMarker;
};

const deleteMarker = (marker) => {
  marker.remove();
};

const addGeoJSONMarkers = (map, markersGeoJson) => {
  markersGeoJson.features.forEach((marker) => {
    const { lat, lng, label } = marker.properties;
    addSingleMarker(map, lat, lng, label);
  });
};

const flyToMarkerLocation = (map, lng, lat, zoom = 15) => {
  map.flyTo({
    center: [lng, lat],
    zoom,
    speed: 1.3,
    curve: 1,
    essential: true,
  });
};

export {
  addSingleMarker,
  deleteMarker,
  addGeoJSONMarkers,
  flyToMarkerLocation,
};
