import { useEffect } from "react";

export default function useStreetRoadNetwork(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  streetRoadNetwork: boolean,
  streetRoadNetworkColor: string,
  streetRoadNetworkWidth: string
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }
    const type = "street";
    const layerId = `${type}-road-network`;

    if (streetRoadNetwork) {
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
            visibility: streetRoadNetwork ? "visible" : "none",
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
        streetRoadNetworkColor
      );
      mapboxInstance.current.setPaintProperty(
        layerId,
        "line-width",
        parseFloat(streetRoadNetworkWidth)
      );
    }
  }, [
    mapboxInstance,
    streetRoadNetwork,
    streetRoadNetworkColor,
    streetRoadNetworkWidth,
  ]);
}
