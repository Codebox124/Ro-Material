import { useEffect } from "react";

export default function useTertiaryRoadNetwork(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  tertiaryRoadNetwork: boolean,
  tertiaryRoadNetworkColor: string,
  tertiaryRoadNetworkWidth: string
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }
    const type = "tertiary";
    const layerId = `${type}-road-network`;

    if (tertiaryRoadNetwork) {
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
            visibility: tertiaryRoadNetwork ? "visible" : "none",
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
        tertiaryRoadNetworkColor
      );
      mapboxInstance.current.setPaintProperty(
        layerId,
        "line-width",
        parseFloat(tertiaryRoadNetworkWidth)
      );
    }
  }, [
    mapboxInstance,
    tertiaryRoadNetwork,
    tertiaryRoadNetworkColor,
    tertiaryRoadNetworkWidth,
  ]);
}
