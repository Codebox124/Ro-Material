export interface RoomResponse {
  timestamp: number;
  sensors: Sensors;
}

export interface Sensors {
  RAINGAUGE: Raingauge; // NA
  BMP280: Bmp280;
  WETBULB: Wetbulb;
  BOLTEK_LD_250: BoltekLd250; // NA
  WINDVANE_DAVIS: WindvaneDavis;
  ANEMOMETER_DAVIS: AnemometerDavis;
}

export interface WindvaneDavis {
  DEGREES: Degrees;
}

export interface Degrees {
  value: number;
}

export interface AnemometerDavis {
  WINDSPEED: Windspeed;
}

export interface Windspeed {
  value: number;
}

export interface Raingauge {
  FLIP: Flip;
}

export interface Flip {
  value: number;
}

export interface Bmp280 {
  TEMP: Temp; // 1
  PRESSURE: Pressure;
  HUMIDITY: Humidity; // 2
  DEWPOINT: Dewpoint; // 3
  HEAT_INDEX: HeatIndex; // 4
}

export interface Temp {
  value: number;
}

export interface Pressure {
  value: number;
}

export interface Humidity {
  value: number;
}

export interface Dewpoint {
  value: number;
}

export interface HeatIndex {
  value: number;
}
export interface Wetbulb {
  GLOBE_TEMP: GlobeTemp;
}

export interface GlobeTemp {
  value: number;
}

export interface BoltekLd250 {
  STATUS: Status;
}

export interface Status {
  value: Value;
}

export interface Value {
  close_strike_rate: number;
  total_strike_rate: number;
  close_alarm_status: number;
  severe_alarm_status: number;
  current_heading: number;
  checksum: number;
}
