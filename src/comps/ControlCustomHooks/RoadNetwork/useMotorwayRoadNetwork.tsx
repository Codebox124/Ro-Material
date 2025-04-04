import { useEffect } from "react";

export default function useMotorwayRoadNetwork(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  motorwayRoadNetwork: boolean,
  motorwayRoadNetworkColor: string,
  motorwayRoadNetworkWidth: string
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }
    const type = "motorway";
    const layerId = `${type}-road-network`;

    if (motorwayRoadNetwork) {
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
            visibility: motorwayRoadNetwork ? "visible" : "none",
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
        motorwayRoadNetworkColor
      );
      mapboxInstance.current.setPaintProperty(
        layerId,
        "line-width",
        parseFloat(motorwayRoadNetworkWidth)
      );
    }
  }, [
    mapboxInstance,
    motorwayRoadNetwork,
    motorwayRoadNetworkColor,
    motorwayRoadNetworkWidth,
  ]);
}
