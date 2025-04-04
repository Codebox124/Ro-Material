import { useEffect } from "react";

export default function useSatelliteLayer(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  satelliteLayer: boolean,
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }

    mapboxInstance.current?.setLayoutProperty(
      "mapbox-satellite",
      "visibility",
      satelliteLayer ? "visible" : "none"
    );
  }, [mapboxInstance, satelliteLayer]);
}

