import { useEffect } from "react";

export default function useTrunkRoadNetwork(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  trunkRoadNetwork: boolean,
  trunkRoadNetworkColor: string,
  trunkRoadNetworkWidth: string
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }
    const type = "trunk";
    const layerId = `${type}-road-network`;

    if (trunkRoadNetwork) {
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
            visibility: trunkRoadNetwork ? "visible" : "none",
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
        trunkRoadNetworkColor
      );
      mapboxInstance.current.setPaintProperty(
        layerId,
        "line-width",
        parseFloat(trunkRoadNetworkWidth)
      );
    }
  }, [
    mapboxInstance,
    trunkRoadNetwork,
    trunkRoadNetworkColor,
    trunkRoadNetworkWidth,
  ]);
}
