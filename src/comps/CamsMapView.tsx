import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect } from "react";
import { MapBoxPrivateKey } from "../constants/Secret";
import {forwardRef} from "react";
interface Props {
  drawerWidth: number;
}

const MapComponent = ({ drawerWidth }: Props, ref: any) => {


  return (
    <div
      id="mapcontainer"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        right: drawerWidth,
        margin: 0,
      }}
    >
      <div
        id="map"
        ref={ref}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "100%",
          margin: 0
        }}
      />

    </div>
  );
};



export default forwardRef(MapComponent);
