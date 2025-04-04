import { useEffect } from "react";
import { RoomResponse } from "../dto/RoomResponse.tsx";
import Streamer from "../socket/streamer";

export default function useDeviceUpdates(
  deviceId: string,
  deviceDetailsReady: boolean,
  onDeviceReceivedUpdates: (data: RoomResponse) => void
) {
  const roomId = "device-" + deviceId;
  const eventId = "telemetry-update";

  useEffect(() => {
    if (!deviceDetailsReady) {
      console.log("not connecting socket as details are not ready");
      return;
    }
    console.log("**Connecting");
    const socket = new Streamer();
    socket.connect();
    socket.onConnect(() => {
      console.log("connection ready");
      socket.listenToRoom(roomId, eventId, (data: RoomResponse) => {
        // console.log("data: "+data);
        onDeviceReceivedUpdates(data);
      });
    });
    return () => {
      console.log("**Disconnecting");
      socket.disconnect();
    };
  }, [deviceDetailsReady]);
}
