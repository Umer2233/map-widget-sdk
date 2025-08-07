import initMap from "./initializeMap";
import {
  addGeoJSONMarkers,
  addSingleMarker,
  deleteMarker,
  flyToMarkerLocation,
} from "./markerUtilities";
import { initResponsiveMap } from "./helper";

const MapWidgetSdk = {
  initMap,
  initResponsiveMap,
  addSingleMarker,
  deleteMarker,
  addGeoJSONMarkers,
  flyToMarkerLocation,
};

export default MapWidgetSdk;
