import { DeviceDetailsResponse } from "../dto/DeviceDetailsResponse.tsx";

export const getTemp = (details: DeviceDetailsResponse): number => {
  const sensor = details.device?.primary_sensor_temp_key as string;
  const history = details.history;
  const array = history[sensor].TEMP;
  if (array === undefined) return 0; // TODO can this be better? Similar below
  const arrayLength = array.length;
  return arrayLength > 0 ? parseFloat(array[arrayLength - 1].value) : 0;
};

export const getHumidity = (details: DeviceDetailsResponse) => {
  const sensor = details.device?.primary_sensor_temp_key as string;
  const history = details.history;
  const array = history[sensor].HUMIDITY;
  if (array === undefined) return "NA";
  const arrayLength = array.length;
  const latestTemp =
    arrayLength > 0 ? parseFloat(array[arrayLength - 1].value) : 0;
  return latestTemp.toFixed(1) + "%";
};

export const getDewPoint = (details: DeviceDetailsResponse): number => {
  const sensor = details.device?.primary_sensor_temp_key as string;
  const history = details.history;
  const array = history[sensor].DEWPOINT;
  if (array === undefined) return 0;
  const arrayLength = array.length;
  return arrayLength > 0 ? parseFloat(array[arrayLength - 1].value) : 0;
};

export const getHeatIndex = (details: DeviceDetailsResponse) => {
  const sensor = details.device?.primary_sensor_temp_key as string;
  const history = details.history;
  const array = history[sensor].HEAT_INDEX;
  if (array === undefined) return "NA";
  const arrayLength = array.length;
  const latestTemp =
    arrayLength > 0 ? parseFloat(array[arrayLength - 1].value) : 0;
  return latestTemp.toFixed(1) + "℉";
};

export const getXAxisDataSet = (details: DeviceDetailsResponse) => {
  const sensor = details.device?.primary_sensor_temp_key as string;
  const history = details.history;
  const array = history[sensor].TEMP;
  return array.map((a: any) => new Date(a.telemetry_at));
};

export const getYAxisDataSet = (details: DeviceDetailsResponse): number[] => {
  const sensor = details.device?.primary_sensor_temp_key as string;
  const history = details.history;
  const array = history[sensor].TEMP;
  return array.map((a: any) => a.value);
};
