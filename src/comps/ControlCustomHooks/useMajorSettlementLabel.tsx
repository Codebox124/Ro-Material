import { useEffect } from "react";

export default function useMajorSettlementLabel(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  settlementMajorLabel: boolean,
  settlementMajorLabelColor: string,
  settlementMajorLabelHaloColor: string,
  font: string,
  fontWeight: string,
  fontSize: number
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }

    const settlementMajorLabelLayerId = "settlement-major-label";

    if (settlementMajorLabel) {
      // Show the settlement-major-label layer
      if (!mapboxInstance.current.getLayer(settlementMajorLabelLayerId)) {
        mapboxInstance.current.addLayer({
          id: settlementMajorLabelLayerId,
          type: "symbol",
          source: "composite",
          "source-layer": "place",
          layout: {
            "text-field": ["get", "name"],
            visibility: "visible",
            "text-size": fontSize,
          },
          filter: ["==", ["get", "class"], settlementMajorLabel],
        });
      } else {
        mapboxInstance.current.setLayoutProperty(
          settlementMajorLabelLayerId,
          "visibility",
          "visible"
        );
      }
    } else {
      // Hide the settlement-major-label layer
      if (mapboxInstance.current.getLayer(settlementMajorLabelLayerId)) {
        mapboxInstance.current.setLayoutProperty(
          settlementMajorLabelLayerId,
          "visibility",
          "none"
        );
      }
    }

    if (mapboxInstance.current.getLayer(settlementMajorLabelLayerId)) {
      mapboxInstance.current.setPaintProperty(
        settlementMajorLabelLayerId,
        "text-color",
        settlementMajorLabelColor
      );
      mapboxInstance.current.setPaintProperty(
        settlementMajorLabelLayerId,
        "text-halo-color",
        settlementMajorLabelHaloColor
      );
      mapboxInstance.current.setLayoutProperty(
        "settlement-major-label",
        "text-size",
        fontSize
      );
      mapboxInstance.current.setLayoutProperty(
        "settlement-major-label",
        "text-font",
        [`${font} ${fontWeight}`]
      );
    }
  }, [
    mapboxInstance,
    settlementMajorLabel,
    settlementMajorLabelColor,
    settlementMajorLabelHaloColor,
    font,
    fontWeight,
    fontSize,
  ]);
}
