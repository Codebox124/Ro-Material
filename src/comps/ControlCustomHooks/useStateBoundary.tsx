import { useEffect } from "react";

export default function useStateBoundary(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  admin1Boundary: boolean,
  admin1BoundaryColor: string,
  admin1BoundaryWidth: string
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }
    if (admin1Boundary) {
      // Show the admin-1-boundary layer
      if (!mapboxInstance.current.getLayer("admin-1-boundary")) {
        mapboxInstance.current.addLayer({
          id: "admin-1-boundary",
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
          "admin-1-boundary",
          "visibility",
          "visible"
        );
      }
    } else {
      // Hide the admin-1-boundary layer
      if (mapboxInstance.current.getLayer("admin-1-boundary")) {
        mapboxInstance.current.setLayoutProperty(
          "admin-1-boundary",
          "visibility",
          "none"
        );
      }
    }
    if (mapboxInstance.current?.getLayer("admin-1-boundary")) {
      mapboxInstance.current.setPaintProperty(
        "admin-1-boundary",
        "line-color",
        admin1BoundaryColor
      );
      mapboxInstance.current.setPaintProperty(
        "admin-1-boundary",
        "line-width",
        parseFloat(admin1BoundaryWidth)
      );
    }
  }, [
    mapboxInstance,
    admin1Boundary,
    admin1BoundaryColor,
    admin1BoundaryWidth,
  ]);
}
