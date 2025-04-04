import { useEffect } from "react";

export default function useMinorSettlementLabel(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  settlementMinorLabel: boolean,
  settlementMinorLabelColor: string,
  settlementMinorLabelHaloColor: string,
  font: string,
  fontWeight: string,
  fontSize: number
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }

    const settlementMinorLabelLayerId = "settlement-minor-label";

    if (settlementMinorLabel) {
      // Show the settlement-minor-label layer
      if (!mapboxInstance.current.getLayer(settlementMinorLabelLayerId)) {
        mapboxInstance.current.addLayer({
          id: settlementMinorLabelLayerId,
          type: "symbol",
          source: "composite",
          "source-layer": "place",
          layout: {
            "text-field": ["get", "name"],
            visibility: "visible",
            "text-size": fontSize,
          },
          filter: ["==", ["get", "class"], settlementMinorLabel],
        });
      } else {
        mapboxInstance.current.setLayoutProperty(
          settlementMinorLabelLayerId,
          "visibility",
          "visible"
        );
      }
    } else {
      // Hide the settlement-minor-label layer
      if (mapboxInstance.current.getLayer(settlementMinorLabelLayerId)) {
        mapboxInstance.current.setLayoutProperty(
          settlementMinorLabelLayerId,
          "visibility",
          "none"
        );
      }
    }

    if (mapboxInstance.current.getLayer(settlementMinorLabelLayerId)) {
      mapboxInstance.current.setPaintProperty(
        settlementMinorLabelLayerId,
        "text-color",
        settlementMinorLabelColor
      );
      mapboxInstance.current.setPaintProperty(
        settlementMinorLabelLayerId,
        "text-halo-color",
        settlementMinorLabelHaloColor
      );
      mapboxInstance.current.setLayoutProperty(
        "settlement-minor-label",
        "text-size",
        fontSize
      );
      mapboxInstance.current.setLayoutProperty(
        "settlement-minor-label",
        "text-font",
        [`${font} ${fontWeight}`]
      );
    }
  }, [
    mapboxInstance,
    settlementMinorLabel,
    settlementMinorLabelColor,
    settlementMinorLabelHaloColor,
    font,
    fontWeight,
    fontSize,
  ]);
}
