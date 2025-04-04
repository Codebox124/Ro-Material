import { useEffect } from "react";

export default function useContourLayer(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  contourLayer: boolean,
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }

    const map = mapboxInstance.current;

    const visibility = contourLayer ? "visible" : "none";

    // Set visibility
    map.setLayoutProperty("contour-label", "visibility", visibility);
    map.setLayoutProperty("contour-line", "visibility", visibility);

    // If making visible, ensure proper layer order
    if (contourLayer) {
      // Move contour layers to top
      map.moveLayer("contour-line");
      map.moveLayer("contour-label");
    }
  }, [mapboxInstance, contourLayer]);
}

