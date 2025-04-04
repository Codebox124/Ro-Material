import { useEffect } from "react";

export default function useCountryBoundary(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  admin0Boundary: boolean,
  admin0BoundaryColor: string,
  admin0BoundaryWidth: string
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }

    if (admin0Boundary) {
      // Show the admin-0-boundary layer
      if (!mapboxInstance.current.getLayer("admin-0-boundary")) {
        mapboxInstance.current.addLayer({
          id: "admin-0-boundary",
          type: "line",
          source: "composite",
          "source-layer": "admin",
          layout: {
            visibility: "visible",
          },
          filter: [
            "all",
            ["==", ["get", "admin_level"], 2],
            ["==", ["get", "maritime_boundary"], false],
          ],
        });
      } else {
        mapboxInstance.current.setLayoutProperty(
          "admin-0-boundary",
          "visibility",
          "visible"
        );
      }
    } else {
      // Hide the admin-0-boundary layer
      if (mapboxInstance.current.getLayer("admin-0-boundary")) {
        mapboxInstance.current.setLayoutProperty(
          "admin-0-boundary",
          "visibility",
          "none"
        );
      }
    }
    if (mapboxInstance.current?.getLayer("admin-0-boundary")) {
      mapboxInstance.current.setPaintProperty(
        "admin-0-boundary",
        "line-color",
        admin0BoundaryColor
      );
      mapboxInstance.current.setPaintProperty(
        "admin-0-boundary",
        "line-width",
        parseFloat(admin0BoundaryWidth)
      );
    }
  }, [
    mapboxInstance,
    admin0Boundary,
    admin0BoundaryColor,
    admin0BoundaryWidth,
  ]);
}
