import { DeviceDetailsResponse } from "../dto/DeviceDetailsResponse";

export const getSpeedForSeconds = (seconds: number, array: any): number => {
  const lastIndex = array.length;
  let gust = array[lastIndex - 1].value;
  const lastTimeStamp = array[lastIndex - 1].telemetry_at;
  for (let i = lastIndex - 2; i >= 0; i--) {
    const item = array[i];
    const timeDiff =
      new Date(lastTimeStamp).valueOf() - new Date(item.telemetry_at).valueOf();
    if (timeDiff > seconds) {
      // console.log("breaking at: " + timeDiff + " index: " + i);
      break;
    } else {
      if (item.value > gust) {
        gust = item.value;
      }
    }
  }
  return gust;
};

export const getWindvaneSensorKey = (
  deviceSensors: Record<string, any>
): string => {
  let windvaneSensorKey = "ABC";
  const allWindvaneSensors = [
    "WINDVANE",
    "WINDVANE_INSPEED",
    "WINDVANE_DAVIS",
    "WINDVANE_RAINWISE",
    "WEATHERFLOW",
    "WEATHERFLOW_VIRTUAL",
    "DAVIS",
    "DAVIS_VIRTUAL",
    "NMEA",
    "CUMULUS",
    "WIRELESS1_WINDVANE",
    "WIRELESS2_WINDVANE",
    "WIRELESS3_WINDVANE",
    "YOUNG_92000",
    "YOUNG_91000",
    "YOUNG_09101",
  ];

  allWindvaneSensors.forEach((s) => {
    if (deviceSensors[s] !== undefined && windvaneSensorKey === "ABC") {
      windvaneSensorKey = s;
    }
  });

  return windvaneSensorKey;
};

export const directionUsingDegrees = (val: number): string => {
  if (val >= 0 && val < 22.5) {
    return "N";
  } else if (val >= 22.5 && val < 45) {
    return "NNE";
  } else if (val >= 45 && val < 67.5) {
    return "NE";
  } else if (val >= 67.5 && val < 90) {
    return "ENE";
  } else if (val >= 90 && val < 112.5) {
    return "E";
  } else if (val >= 112.5 && val < 135) {
    return "ESE";
  } else if (val >= 135 && val < 157.5) {
    return "SE";
  } else if (val >= 157.5 && val < 180) {
    return "SSE";
  } else if (val >= 180 && val < 202.5) {
    return "S";
  } else if (val >= 202.5 && val < 225) {
    return "SSW";
  } else if (val >= 225 && val < 247.5) {
    return "SW";
  } else if (val >= 247.5 && val < 270) {
    return "WSW";
  } else if (val >= 270 && val < 292.5) {
    return "W";
  } else if (val >= 292.5 && val < 315) {
    return "WNW";
  } else if (val >= 315 && val < 337.5) {
    return "NW";
  } else if (val >= 337.5 && val < 360) {
    return "NNW";
  }
  return "";
};

export const getWindSpeed = (det: DeviceDetailsResponse): number => {
  const sensor = "ANEMOMETER_DAVIS";
  const history = det.history;
  const array = history[sensor].WINDSPEED;
  if (array === undefined) return 0;
  const arrayLength = array.length;
  return arrayLength > 0 ? parseFloat(array[arrayLength - 1].value) : 0;
};

export const getXAxisDataSet = (det: DeviceDetailsResponse) => {
  const sensor = "ANEMOMETER_DAVIS";
  const history = det.history;
  const array = history[sensor].WINDSPEED;
  if (array === undefined) return [];
  return array.map((a: any) => new Date(a.telemetry_at));
};

export const getYAxisDataSet = (det: DeviceDetailsResponse): number[] => {
  const sensor = "ANEMOMETER_DAVIS";
  const history = det.history;
  const array = history[sensor].WINDSPEED;
  if (array === undefined) return [];
  return array.map((a: any) => a.value);
};

export const getWindDirectionDegrees = (det: DeviceDetailsResponse): number => {
  const sensor = getWindvaneSensorKey(det.sensors);
  if (sensor == "ABC") return 0; // invalid sensor
  const history = det.history;
  const array = history[sensor].DEGREES;
  if (array === undefined) return 0;
  const arrayLength = array.length;
  return arrayLength > 0 ? parseFloat(array[arrayLength - 1].value) : 0;
};

export const gustDataArray = [
  { timeInterval: 10, timeString: "10 Seconds" },
  { timeInterval: 30, timeString: "30 Seconds" },
  { timeInterval: 60, timeString: "60 Seconds" },
  { timeInterval: 300, timeString: "5 Minutes" },
];

export interface Gust {
  speed1: string;
  speed2: string;
}

export const gustRows = (det: DeviceDetailsResponse): Gust[] => {
  const dataRows: Gust[] = [];
  const sensor = "ANEMOMETER_DAVIS";
  const history = det.history;
  const array = history[sensor].WINDSPEED;
  if (array !== undefined) {
    gustDataArray.forEach((element) => {
      const sec10 = getSpeedForSeconds(element.timeInterval * 1000, array);
      dataRows.push(createData(element.timeString, sec10 + " MPH"));
    });
  }

  const speed12Hr = history[sensor].MAX_WIND_SPEED_12_HOURS;
  if (speed12Hr !== undefined && speed12Hr.value !== null) {
    dataRows.push(createData("12 Hour", speed12Hr.value + " MPH"));
  }

  const speed24Hr = history[sensor].MAX_WIND_SPEED_24_HOURS;
  if (speed24Hr !== undefined && speed24Hr.value !== null) {
    dataRows.push(createData("24 Hour", speed24Hr.value + " MPH"));
  }

  return dataRows;
};

function createData(speed1: string, speed2: string): Gust {
  return { speed1: speed1, speed2: speed2 };
}
