import { useEffect } from "react";

export default function useSecondaryRoadNetwork(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  secondaryRoadNetwork: boolean,
  secondaryRoadNetworkColor: string,
  secondaryRoadNetworkWidth: string
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }
    const type = "secondary";
    const layerId = `${type}-road-network`;

    if (secondaryRoadNetwork) {
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
            visibility: secondaryRoadNetwork ? "visible" : "none",
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
        secondaryRoadNetworkColor
      );
      mapboxInstance.current.setPaintProperty(
        layerId,
        "line-width",
        parseFloat(secondaryRoadNetworkWidth)
      );
    }
  }, [
    mapboxInstance,
    secondaryRoadNetwork,
    secondaryRoadNetworkColor,
    secondaryRoadNetworkWidth,
  ]);
}
