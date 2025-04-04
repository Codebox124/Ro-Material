import { DeviceDetailsResponse } from "../dto/DeviceDetailsResponse.tsx";

export const getWetbultLatest = (details: DeviceDetailsResponse) => {
  const sensor = "WETBULB";
  const history = details.history;
  const array = history[sensor].GLOBE_TEMP;
  const arrayLength = array.length;
  return arrayLength > 0 ? parseFloat(array[arrayLength - 1].value) : 0;
};

export const determineWbgtRegion = (region: string | null): number | string => {
  if (
    region == null ||
    (typeof region === "string" && region.trim().length === 0)
  ) {
    return 1;
  } else {
    const regionInt = parseInt(region);
    if (isNaN(regionInt)) {
      if (region === "FCS01") {
        return region;
      }
      return 1;
    } else {
      if (regionInt < 1) {
        return 1;
      } else if (regionInt > 3) {
        return 3;
      }
    }
    return regionInt;
  }
};

const regionThreatText = [
  "Low Risk",
  "Elevated Risk",
  "Moderate Risk",
  "High Risk",
  "Extreme Risk",
];

const regionThreatTextFCS01 = [
  "Low Risk",
  "Moderate Risk",
  "Substantial Risk",
  "Severe Risk",
  "Critical Risk",
];

export const threatLevelColorTable = [
  "#22C521",
  "#FFFF32",
  "#FF9900",
  "#FF0000",
  "#595959",
];

const regionBorderColors = [
  "#BCFFD9",
  "#FFE132",
  "#FF6900",
  "#BE0000",
  "#968D8D",
];
const regionThreatTextColor = [
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#FFFFFF",
];

const regions: { [key: string]: [number, number][] } = {
  1: [
    [-1000000, 72.3],
    [72.3, 76.1],
    [76.1, 80.1],
    [80.1, 84.0],
    [84.0, 1000000],
  ],
  2: [
    [-1000000, 75.9],
    [75.9, 78.7],
    [78.7, 83.7],
    [83.7, 87.6],
    [87.6, 1000000],
  ],
  3: [
    [-1000000, 78.3],
    [78.3, 82.0],
    [82.0, 86.0],
    [86.0, 90.0],
    [90.0, 1000000],
  ],
  FCS01: [
    [-1000000, 82],
    [82, 86.9],
    [86.9, 89.9],
    [89.9, 92.0],
    [92.0, 1000000],
  ],
};

export const threatLevel = (
  deviceSensors: DeviceDetailsResponse
): [string, string, string, number] => {
  let title = "";
  let backgroundColor = "";
  let textColor = "";
  let index = 0;
  const sensorKey = "WETBULB";
  const propertyKey = "GLOBE_TEMP";
  const region = determineWbgtRegion(
    deviceSensors.sensors[sensorKey][propertyKey].extra1
  );
  const activeRegion = regions[region];
  const v = getWetbultLatest(deviceSensors);
  activeRegion.forEach((r, idx) => {
    if (v > r[0] && v <= r[1]) {
      title = regionThreatText[idx];
      backgroundColor = threatLevelColorTable[idx];
      textColor = regionThreatTextColor[idx];
      index = idx;
    }
  });
  return [title, backgroundColor, textColor, index];
};

export const appendDegree = (num: number): string => {
  return num.toFixed(1) + "°";
};

export const getWBAverageForSeconds = (seconds: number, array: any): number => {
  const lastIndex = array.length;
  let count = 0;
  let gust: number = +array[lastIndex - 1].value;
  const lastTimeStamp = array[lastIndex - 1].telemetry_at;
  for (let i = lastIndex - 2; i >= 0; i--) {
    const item = array[i];
    const timeDiff =
      new Date(lastTimeStamp).valueOf() - new Date(item.telemetry_at).valueOf();
    if (timeDiff > seconds) {
      // console.log("breaking at: " + timeDiff + " index: " + i);
      break;
    } else {
      const newItem: number = +item.value;
      gust = gust + newItem;
      count++;
    }
  }
  if (count === 0 || array.length == 0) return 0;
  return gust / count;
};

export const get5MinsAvg = (details: DeviceDetailsResponse) => {
  const sensor = "WETBULB";
  const history = details.history;
  const array = history[sensor].GLOBE_TEMP;
  return getWBAverageForSeconds(5 * 60 * 1000, array);
};

export const get15MinsAvg = (details: DeviceDetailsResponse) => {
  const sensor = "WETBULB";
  const history = details.history;
  const array = history[sensor].GLOBE_TEMP;
  return getWBAverageForSeconds(15 * 60 * 1000, array);
};

export const getXAxisDataSet = (details: DeviceDetailsResponse) => {
  const sensor = "WETBULB";
  const history = details.history;
  const array = history[sensor].GLOBE_TEMP;
  return array.map((a: any) => new Date(a.telemetry_at));
};

export const getYAxisDataSet = (details: DeviceDetailsResponse): number[] => {
  const sensor = "WETBULB";
  const history = details.history;
  const array = history[sensor].GLOBE_TEMP;
  return array.map((a: any) => a.value);
};
