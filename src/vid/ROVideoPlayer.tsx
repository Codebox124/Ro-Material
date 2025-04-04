import axios from "axios";
import throttle from "lodash-es/throttle";
import { useEffect, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ReactHlsPlayer from "react-hls-video-player";
import { DeviceDetailsUrl } from "../constants/Constants";
import { DeviceDetailsResponse } from "../dto/DeviceDetailsResponse";

interface Props {
  uuid: string;
}

interface HlsInstance {
  on: (event: string, callback: () => void) => void;
}

export default function ROVideoPlayer({ uuid }: Props) {
  const deviceId = uuid;
  const playerRef = useRef() as any;
  const [details, setDetails] = useState<DeviceDetailsResponse>();
  const [hlsInstance, setHlsInstance] = useState<HlsInstance>();

  // Use throttle to prevent hammering the server with requests
  const fireOnVideoInterrupted = throttle(function () {
    downloadData().then(() => {
      playerRef.current.play();
    });
  }, 5000);

  // When the value of HLS instance changes trigger this effect
  useEffect(() => {
    if (!hlsInstance) {
      // bail out if HLS instance is not available
      return;
    }

    // listen for HLS errors on the hls instance
    hlsInstance.on("hlsError", fireOnVideoInterrupted);
  }, [hlsInstance]);

  useEffect(() => {
    downloadData().catch((error) => {
      console.error(error);
    });
  }, []);

  function downloadData() {
    return axios
      .get<DeviceDetailsResponse>(DeviceDetailsUrl, {
        params: {
          device: deviceId,
          limit: 120,
        },
      })
      .then((response) => {
        setDetails(response.data);
      });
  }

  const videoClicked = () => {
    playerRef.current.requestFullscreen();
  };

  return details !== null &&
    details?.stream?.url !== null &&
    details?.stream?.url !== "" ? (
    <ErrorBoundary fallback={<div>Error loading the live stream</div>}>
      <ReactHlsPlayer
        playerRef={playerRef}
        controls={false}
        autoPlay={true}
        playsInline={true}
        style={{
          width: "100%",
          height: "440",
          cursor: "pointer",
        }}
        src={(details && details.stream ? details.stream.url : "")!}
        getHLSInstance={setHlsInstance}
        onClick={videoClicked}
      />
    </ErrorBoundary>
  ) : null;
}
