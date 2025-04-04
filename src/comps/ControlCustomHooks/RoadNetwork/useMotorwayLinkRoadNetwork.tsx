import { useEffect } from "react";

export default function useMotorwayLinkRoadNetwork(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  motorwayLinkRoadNetwork: boolean,
  motorwayLinkRoadNetworkColor: string,
  motorwayLinkRoadNetworkWidth: string
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }
    const type = "motorway_link";
    const layerId = `${type}-road-network`;

    if (motorwayLinkRoadNetwork) {
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
            visibility: motorwayLinkRoadNetwork ? "visible" : "none",
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
        motorwayLinkRoadNetworkColor
      );
      mapboxInstance.current.setPaintProperty(
        layerId,
        "line-width",
        parseFloat(motorwayLinkRoadNetworkWidth)
      );
    }
  }, [
    mapboxInstance,
    motorwayLinkRoadNetwork,
    motorwayLinkRoadNetworkColor,
    motorwayLinkRoadNetworkWidth,
  ]);
}
