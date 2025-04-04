import { useEffect } from "react";

export default function useProjection(
  mapboxInstance: React.MutableRefObject<mapboxgl.Map | null>,
  projection: string,
) {
  useEffect(() => {
    if (!mapboxInstance.current?.isStyleLoaded()) {
      return;
    }

    mapboxInstance.current?.setProjection(projection);
  }, [mapboxInstance, projection]);

}

