import { useEffect } from "react";

export default function useCountyBoundary(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  admin2Boundary: boolean,
  admin2BoundaryColor: string,
  admin2BoundaryWidth: string
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }

    if (admin2Boundary) {
      // Show the admin-2-boundary layer
      if (!mapboxInstance.current.getLayer("admin-2-boundary")) {
        mapboxInstance.current.addLayer({
          id: "admin-2-boundary",
          type: "line",
          source: "composite",
          "source-layer": "admin",
          layout: {
            visibility: "visible",
          },
          filter: ["==", ["get", "admin_level"], 2],
        });
      } else {
        mapboxInstance.current.setLayoutProperty(
          "admin-2-boundary",
          "visibility",
          "visible"
        );
      }
    } else {
      // Hide the admin-2-boundary layer
      if (mapboxInstance.current.getLayer("admin-2-boundary")) {
        mapboxInstance.current.setLayoutProperty(
          "admin-2-boundary",
          "visibility",
          "none"
        );
      }
    }

    if (mapboxInstance.current?.getLayer("admin-2-boundary")) {
      mapboxInstance.current.setPaintProperty(
        "admin-2-boundary",
        "line-color",
        admin2BoundaryColor
      );
      mapboxInstance.current.setPaintProperty(
        "admin-2-boundary",
        "line-width",
        parseFloat(admin2BoundaryWidth)
      );
    }
  }, [
    mapboxInstance,
    admin2Boundary,
    admin2BoundaryColor,
    admin2BoundaryWidth,
  ]);
}
