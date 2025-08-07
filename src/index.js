import initMap from "./initializeMap";
import {
  addGeoJSONMarkers,
  addSingleMarker,
  deleteMarker,
  flyToMarkerLocation,
} from "./markerUtilities";
import { initResponsiveMap } from "./helper";
import { initHeatMapLayer } from "./heatmapUtility";

const MapWidgetSdk = {
  initMap,
  initResponsiveMap,
  addSingleMarker,
  deleteMarker,
  addGeoJSONMarkers,
  flyToMarkerLocation,
  initHeatMapLayer,
};

export default MapWidgetSdk;
