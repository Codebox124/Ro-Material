import { CircularProgress, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import { useEffect, useState } from "react";
import { DeviceDetailsUrl } from "../constants/Constants.tsx";
import { CamsMarker } from "../dto/CamsMarker.tsx";
import { DeviceDetailsResponse } from "../dto/DeviceDetailsResponse.tsx";
import {
  getDewPoint,
  getHumidity,
  getTemp,
} from "../utils/PrimarySensorUtil.tsx";
import ROVideoPlayer from "../vid/ROVideoPlayer.tsx";

type Props = {
  marker: CamsMarker;
  drawerWidth: number;
};

export const DrawerItem = ({ marker, drawerWidth }: Props) => {
  const itemHeight = 250;
  const [markerDetails, setMarkerDetails] =
    useState<DeviceDetailsResponse | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get<DeviceDetailsResponse>(DeviceDetailsUrl, {
        params: {
          device: marker.uuid,
          limit: 1,
        },
      })
      .then((response) => {
        const arr = response.data;
        setMarkerDetails(arr);
        setLoaded(true);
      });
    // return () => console.log("dialog clean up");
  }, [marker.uuid]);

  function getTime(details: CamsMarker): string {
    const date = new Date(details?.last_telemetry_at as Date);
    return (
      "Last update: " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
    );
  }

  function getCurrentTime(): string {
    const date = new Date();
    return (
      "🕗 " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
    );
  }

  return (
    <div style={{ width: drawerWidth, height: itemHeight }}>
      <Card
        variant="solid"
        color="primary"
        sx={{
          boxShadow: "lg",
          width: drawerWidth - 20,
          maxWidth: "100%",
          overflow: "auto",
          resize: "horizontal",
          margin: "10px",
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            sx={{ mb: 2 }}
          >
            <Grid size={{ xs: 6, sm: 6 }}>
              <ROVideoPlayer uuid={marker.uuid} />
            </Grid>
            <Grid size={{ xs: 3, sm: 3 }}>
              <Typography fontSize={17} style={{ wordWrap: "break-word" }}>
                {"📍" + marker?.name}
              </Typography>
              <Typography fontSize={14}>Primary Sensor Data 📈</Typography>
              <Typography fontSize={14}>Outdoor temperature</Typography>
              <Typography variant="h2" color="#22C521">
                {markerDetails === null && loaded === false ? (
                  <CircularProgress
                    sx={{
                      color: "white",
                    }}
                    size="2rem"
                  />
                ) : (
                  <strong>
                    {markerDetails === null
                      ? "NA"
                      : getTemp(markerDetails).toFixed(1) + "℉"}
                  </strong>
                )}
              </Typography>
            </Grid>
            <Grid size={{ xs: 3, sm: 3 }}>
              <Typography textAlign="right" fontSize={14}>
                {getCurrentTime()}
              </Typography>
              <Typography textAlign="right" fontSize={12}>
                {getTime(marker)}
              </Typography>
              <br />
              <Typography color="white" textAlign="right">
                Humidity:&nbsp;&nbsp;
                {markerDetails === null && loaded === false ? (
                  <CircularProgress
                    sx={{
                      color: "white",
                    }}
                    size="2rem"
                  />
                ) : (
                  <Typography display="inline" variant={"h6"} color="white">
                    {markerDetails === null ? "NA" : getHumidity(markerDetails)}
                  </Typography>
                )}
              </Typography>

              <Typography color="white" textAlign="right">
                Dew Point:&nbsp;&nbsp;
                {markerDetails === null && loaded === false ? (
                  <CircularProgress
                    sx={{
                      color: "white",
                    }}
                    size="2rem"
                  />
                ) : (
                  <Typography display="inline" variant={"h6"} color="#01579b">
                    {markerDetails === null
                      ? "NA"
                      : getDewPoint(markerDetails).toFixed(1) + "℉"}
                  </Typography>
                )}
              </Typography>
            </Grid>
          </Grid>
        </DialogTitle>
      </Card>
    </div>
  );
};
