import axios from "axios";
import { useEffect, useState } from "react";
import { DeviceDetailsUrl } from "../constants/Constants.tsx";
import { DeviceDetailsResponse } from "../dto/DeviceDetailsResponse.tsx";

export interface Device {
  uuid: string;
  name: string;
}

export default function useMarkerDetails(
  deviceId: string,
  details: DeviceDetailsResponse[],
  onDeviceDetailsUpdated: (newDevices: DeviceDetailsResponse[]) => void
) {
  const [deviceDataReady, setDeviceDataReady] = useState(false);
  const [tabs, setTabs] = useState<Device[]>();
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    axios
      .get<DeviceDetailsResponse>(DeviceDetailsUrl, {
        params: {
          device: deviceId,
          limit: 120,
        },
      })
      .then((response) => {
        // console.log("details: " + response.data.device?.uuid);
        configureTabs(response.data);
        const arr = [response.data];
        if (response.data.linked_devices) {
          response.data.linked_devices.forEach(() => {
            arr.push({ success: false } as DeviceDetailsResponse);
          });
        }
        // setDetails(arr);
        onDeviceDetailsUpdated(arr);
        console.log("updating deviceDataReady");
        setDeviceDataReady(true);
      });
    // return () => console.log("dialog clean up");
  }, [deviceId]);

  function tabChanged(index: number) {
    console.log("tab changed to: " + index);
    if (index <= details.length && details[index].success) {
      // changing data
      setCurrentTab(index);
    } else {
      // might have to download
      downloadData((tabs as Device[])[index].uuid, index);
    }
  }

  function downloadData(uuid: string, index: number) {
    console.log("downloading data for: " + uuid);
    axios
      .get<DeviceDetailsResponse>(DeviceDetailsUrl, {
        params: {
          device: uuid,
          limit: 120,
        },
      })
      .then((response) => {
        // console.log("details: " + response.data.device?.uuid);
        const newDetails = details;
        newDetails[index] = response.data;
        onDeviceDetailsUpdated(newDetails);
        setCurrentTab(index);
      });
  }

  function configureTabs(data: DeviceDetailsResponse) {
    const currentDevice: Device = {
      name: data.device?.name as string,
      uuid: data.device?.uuid as string,
    };
    const arr = [currentDevice];
    data.linked_devices?.forEach((element) => {
      arr.push({ name: element.name, uuid: element.uuid });
    });
    setTabs(arr);
  }

  return { deviceDataReady, currentTab, tabChanged, tabs };
}
