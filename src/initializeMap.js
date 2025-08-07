import mapboxgl from "mapbox-gl";

const initMap = (id, mapOptions = {}) => {
  const accessToken = mapOptions?.accessToken;

  if (!mapboxgl.accessToken) {
    mapboxgl.accessToken = accessToken;
  }

  const { center = [0, 0], zoom = 5, style = "satelliteView" } = mapOptions;

  const mapStyleOptions = {
    streetsView: "mapbox://styles/mapbox/streets-v11",
    satelliteView: "mapbox://styles/mapbox/satellite-v9",
  };

  const mapStyle = mapStyleOptions[style] || style;

  const mapInstance = new mapboxgl.Map({
    container: id,
    style: mapStyle,
    center,
    zoom,
  });

  mapInstance.addControl(new mapboxgl.NavigationControl());

  return mapInstance;
};

export default initMap;
