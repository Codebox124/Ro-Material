import { useEffect } from "react";

export default function usePrimaryRoadNetwork(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  primaryRoadNetwork: boolean,
  primaryRoadNetworkColor: string,
  primaryRoadNetworkWidth: string
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }
    const type = "primary";
    const layerId = `${type}-road-network`;

    if (primaryRoadNetwork) {
      // Show the settlement-major-label layer
      if (mapboxInstance.current.getLayer(layerId)) {
        console.log("layer present show");
        mapboxInstance.current.setLayoutProperty(
          layerId,
          "visibility",
          "visible"
        );
      } else {
        mapboxInstance.current.addLayer({
          id: layerId,
          type: "line",
          source: "composite",
          "source-layer": "road",
          layout: {
            visibility: primaryRoadNetwork ? "visible" : "none",
          },
          filter: ["==", ["get", "class"], type],
        });
      }
    } else {
      // Hide the settlement-major-label layer
      if (mapboxInstance.current.getLayer(layerId)) {
        console.log("layer present hide");
        mapboxInstance.current.setLayoutProperty(layerId, "visibility", "none");
      } else {
        console.log("layer not present");
      }
    }
    if (mapboxInstance.current?.getLayer(layerId)) {
      mapboxInstance.current.setPaintProperty(
        layerId,
        "line-color",
        primaryRoadNetworkColor
      );
      mapboxInstance.current.setPaintProperty(
        layerId,
        "line-width",
        parseFloat(primaryRoadNetworkWidth)
      );
    }
  }, [
    mapboxInstance,
    primaryRoadNetwork,
    primaryRoadNetworkColor,
    primaryRoadNetworkWidth,
  ]);
}
