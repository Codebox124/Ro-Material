import { useEffect } from "react";

export default function useBackgroundColorNOpacity(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  color: string,
  opacity: string
) {
  function hexToRgba(hexColor: string, alpha: number) {
    const hex = hexColor.replace(/^#/, "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }

    const rgbaColor = hexToRgba(color, parseFloat(opacity));
    mapboxInstance.current.setPaintProperty(
      "background-1",
      "background-color",
      rgbaColor
    );
  }, [mapboxInstance, color, opacity]);
}
