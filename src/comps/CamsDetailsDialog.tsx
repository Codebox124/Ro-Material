import { Box, CircularProgress, useMediaQuery, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import useDeviceUpdates from "../CustomHooks/useDeviceUpdates.tsx";
import useMarkerDetails from "../CustomHooks/useMarkerDetails.tsx";
import {
  DeviceDetailsResponse,
  WINDSPEEDElement,
} from "../dto/DeviceDetailsResponse.tsx";
import { RoomResponse, Sensors } from "../dto/RoomResponse.tsx";
import { toUTC } from "../utils/DateUtil.tsx";
import ROVideoPlayer from "../vid/ROVideoPlayer";
import TabbedData from "./TabbedData.tsx";
import TabComp from "./TabComp";
import TitleHeaderComp from "./TitleHeaderComp";

interface Props {
  setOpen: (value: boolean) => void;
  deviceId: string;
}

export default function CamsDetailsDialog({ setOpen, deviceId }: Props) {
  const initialDetails = {
    success: false,
  };

  const [details, setDetails] = useState<DeviceDetailsResponse[]>([
    initialDetails as DeviceDetailsResponse,
  ]);

  const onDeviceDetailsUpdated = (newDetails: DeviceDetailsResponse[]) => {
    setDetails(newDetails);
  };

  function updateDataForSensor(
    BMP280: any,
    oldDetails: DeviceDetailsResponse,
    data: RoomResponse,
    dataType: string
  ): DeviceDetailsResponse {
    const device = oldDetails.device;
    const sensor = device?.primary_sensor_temp_key as string; // e.g. BMP280
    const history = oldDetails.history;
    const array = history[sensor][dataType];
    if (array !== undefined) {
      const newTemp: WINDSPEEDElement = {
        value: BMP280[dataType].value + "",
        telemetry_at: toUTC(data.timestamp),
      };
      array.push(newTemp);
    }
    return oldDetails;
  }

  function updateBasicSensorData(
    oldDetails: DeviceDetailsResponse,
    sensors: Sensors,
    data: RoomResponse
  ) {
    // console.log("onDeviceReceivedUpdates" + JSON.stringify(data));
    const SUPPORTED_BMP_SENSORS = [
      "TEMP",
      "HUMIDITY",
      "DEWPOINT",
      "HEAT_INDEX",
      "PRESSURE",
    ];
    const BMP280 = sensors.BMP280;
    SUPPORTED_BMP_SENSORS.forEach((element) => {
      oldDetails = updateDataForSensor(BMP280, oldDetails, data, element);
    });

    const SUPPORTED_OTHER_SENSOR_DETAILS = [
      { sensor: "WETBULB", dataType: "GLOBE_TEMP" },
      { sensor: "RAINGAUGE", dataType: "FLIP" },
    ];
    SUPPORTED_OTHER_SENSOR_DETAILS.forEach((element) => {
      oldDetails = updateWindSensorData(
        oldDetails,
        element.sensor,
        element.dataType,
        sensors,
        data
      );
    });

    const newDetailsArray = [oldDetails];
    details.forEach((datum, index) => {
      if (index > 0) {
        newDetailsArray.push(datum);
      }
    });
    setDetails(newDetailsArray);
    // console.log("BMP Data updated");
  }

  function updateWindSensorData(
    oldDetails: DeviceDetailsResponse,
    sensor: string,
    dataType: string,
    windDataSensor: any,
    data: RoomResponse
  ) {
    const history = oldDetails.history;
    const array = history[sensor][dataType];
    if (array !== undefined && windDataSensor[sensor] !== undefined) {
      const newData: WINDSPEEDElement = {
        value: windDataSensor[sensor][dataType].value + "",
        telemetry_at: toUTC(data.timestamp),
      };
      array.push(newData);
    }
    return oldDetails;
  }

  function updateWindWaneSensorData(
    oldDetails: DeviceDetailsResponse,
    windDataSensor: Sensors,
    data: RoomResponse
  ) {
    // console.log("onDeviceReceivedUpdates" + JSON.stringify(data));
    const SUPPORTED_WIND_SENSOR_DETAILS = [
      { sensor: "WINDVANE_DAVIS", dataType: "DEGREES" },
      { sensor: "ANEMOMETER_DAVIS", dataType: "WINDSPEED" },
    ];
    SUPPORTED_WIND_SENSOR_DETAILS.forEach((element) => {
      oldDetails = updateWindSensorData(
        oldDetails,
        element.sensor,
        element.dataType,
        windDataSensor,
        data
      );
    });

    const newDetailsArray = [oldDetails];
    details.forEach((datum, index) => {
      if (index > 0) {
        newDetailsArray.push(datum);
      }
    });
    setDetails(newDetailsArray);
    // console.log("Wind Data updated");
  }

  const onDeviceReceivedUpdates = (data: RoomResponse) => {
    const oldDetails = details[0];
    if (!oldDetails.success) {
      console.log("Existing data wasn't ready");
      return;
    }
    const messageType = getMessageType(data);
    // console.log("Message Type: " + messageType);
    switch (messageType) {
      case UpdateType.BasicSensor:
        updateBasicSensorData(oldDetails, data.sensors, data);
        break;
      case UpdateType.WindSensor:
        updateWindWaneSensorData(oldDetails, data.sensors, data);
        break;
      case UpdateType.Unsupported:
        // console.log("Unsupported message received" + JSON.stringify(data));
        break;
    }
  };

  enum UpdateType {
    BasicSensor,
    WindSensor,
    Unsupported,
  }
  const getMessageType = (data: RoomResponse): UpdateType => {
    if (data.sensors.BMP280 !== undefined && data.sensors.BMP280 !== null) {
      return UpdateType.BasicSensor;
    }
    if (
      data.sensors.WINDVANE_DAVIS !== undefined &&
      data.sensors.WINDVANE_DAVIS !== null &&
      data.sensors.ANEMOMETER_DAVIS !== undefined &&
      data.sensors.ANEMOMETER_DAVIS !== null
    ) {
      return UpdateType.WindSensor;
    }
    return UpdateType.Unsupported;
  };

  const { deviceDataReady, currentTab, tabChanged, tabs } = useMarkerDetails(
    deviceId,
    details,
    onDeviceDetailsUpdated
  );
  useDeviceUpdates(deviceId, deviceDataReady, onDeviceReceivedUpdates);

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}
      >
        {!deviceDataReady ? (
          <Box
            m={2}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CircularProgress
              sx={{
                color: "#1a90ff",
              }}
              size="3rem"
            />
          </Box>
        ) : (
          <div>
            <ErrorBoundary
              fallback={
                <Box m={2}>
                  <div>Failed to load the location details</div>
                </Box>
              }
            >
              <ErrorBoundary
                fallback={<div>Error loading the cycloneport data</div>}
              >
                <TitleHeaderComp setOpen={setOpen} details={details[0]} />
              </ErrorBoundary>
              <ErrorBoundary fallback={<div>Error loading the details</div>}>
                <DialogContent dividers>
                  <ErrorBoundary
                    fallback={<div>Error loading the live stream</div>}
                  >
                    <ROVideoPlayer
                      uuid={(details[0].device ? details[0].device.uuid : "")!}
                    />
                    <br />
                  </ErrorBoundary>
                  <ErrorBoundary
                    fallback={<div>Error loading the linked devices</div>}
                  >
                    <TabComp
                      tabs={tabs?.map((e) => e.name) ?? []}
                      onChange={tabChanged}
                    />
                    <ErrorBoundary
                      fallback={<div>Error loading linked device data</div>}
                    >
                      <TabbedData details={details[currentTab]} />
                    </ErrorBoundary>
                  </ErrorBoundary>
                </DialogContent>
              </ErrorBoundary>
            </ErrorBoundary>
          </div>
        )}
      </Dialog>
    </>
  );
}
