export interface DeviceDetailsResponse {
  success: boolean;
  device: Device | null;
  stream: Stream | null;
  streams: Stream[] | null;
  history: any; //History | null;
  sensors: any; //Sensors | null;
  actuators: Actuator[] | null;
  linked_devices: any[] | null;
  user: User | null;
  access: Access | null;
  aliases: Alias[] | null;
}

export interface Access {
  actuators: boolean;
  settings: boolean;
  history: boolean;
  history_video: boolean;
}

export interface Actuator {
  id: string;
  device_id: string;
  actuator: string;
  name: string;
  type: string;
  created_at: Date;
  controls: Control[];
}

export interface Control {
  id: string;
  actuator_id: string;
  property: string;
  state: string;
  name: string;
  block_for: string;
  confirm: string;
  created_at: Date;
}

export interface Alias {
  id: number;
  alias_id: string;
  name: string;
  last_login_at: Date;
}

export interface Device {
  uuid: string;
  user_id: string;
  name: string;
  code: string;
  city: string;
  state: string;
  last_location_lat: number;
  last_location_lon: number;
  last_location_alt: number;
  last_location_text: string;
  last_location_at: Date;
  last_telemetry_at: Date;
  stream_id: string;
  stream: null;
  is_streaming: boolean;
  project: null;
  visibility: string;
  kind: string;
  timezone: string;
  rtmp_stream_enabled: boolean;
  primary_sensor_temp_device_id: number;
  primary_sensor_temp_key: string;
  model: string;
  tower_id: null;
  display_device_uuid: null;
  is_aux_device: boolean;
  display_datetime: string;
  group_id: string;
  icon_url: string;
  watermark_url: null;
  video_record: boolean;
  video_record_retention: string;
  video_record_access: boolean;
  data_retention: string;
  primary_location_source: string;
  service_level: string;
  show_telemetry_from: string;
}

// TODO: Do not remove
// export interface History {
//   BMP280: HistoryBMP280;
//   ANEMOMETER_DAVIS: HistoryANEMOMETERDAVIS;
//   WINDVANE_DAVIS: HistoryWINDVANEDAVIS;
//   RAINGAUGE: HistoryRAINGAUGE;
//   WETBULB: HistoryWETBULB;
//   DS18B20_1: HistoryDS18B201;
//   DIAG_: Diag;
// }

export interface HistoryANEMOMETERDAVIS {
  WINDSPEED: WINDSPEEDElement[];
  MAX_WIND_SPEED_12_HOURS: MaxWindSpeedHours;
  MAX_WIND_SPEED_24_HOURS: MaxWindSpeedHours;
}

export interface MaxWindSpeedHours {
  value: string;
  property: string;
  sensor: string;
}

export interface WINDSPEEDElement {
  value: string;
  telemetry_at: Date;
}

export interface HistoryBMP280 {
  TEMP: WINDSPEEDElement[];
  HUMIDITY: WINDSPEEDElement[];
  DEWPOINT: WINDSPEEDElement[];
  PRESSURE: WINDSPEEDElement[];
  HEAT_INDEX: WINDSPEEDElement[];
}

export interface Diag {
  CPU_TEMP: WINDSPEEDElement[];
}

export interface HistoryDS18B201 {
  TEMP: WINDSPEEDElement[];
}

export interface HistoryRAINGAUGE {
  FLIP: WINDSPEEDElement[];
}

export interface HistoryWETBULB {
  GLOBE_TEMP: WINDSPEEDElement[];
}

export interface HistoryWINDVANEDAVIS {
  DEGREES: WINDSPEEDElement[];
}

export interface Sensors {
  BMP280: SensorsBMP280;
  GPS: Gps;
  ANEMOMETER_DAVIS: SensorsANEMOMETERDAVIS;
  WINDVANE_DAVIS: SensorsWINDVANEDAVIS;
  RAINGAUGE: SensorsRAINGAUGE;
  BOLTEK_LD_250: BoltekLd250;
  WETBULB: SensorsWETBULB;
  DS18B20_1: SensorsDS18B201;
}

export interface SensorsANEMOMETERDAVIS {
  WINDSPEED: STATUSClass;
}

export interface STATUSClass {
  id: string;
  device_id: string;
  sensor: string;
  property: string;
  name: string;
  unit: string;
  value_offset: string;
  value_max: string;
  value_max_fn: ValueMaxFn;
  extra1: string;
  extra2: string;
  tab: string;
  render: Render[];
  created_at: Date;
}

export enum Render {
  Current = "CURRENT",
  History = "HISTORY",
}

export enum ValueMaxFn {
  Limit = "LIMIT",
  Mod = "MOD",
}

export interface SensorsBMP280 {
  TEMP: STATUSClass;
  HUMIDITY: STATUSClass;
  DEWPOINT: STATUSClass;
  PRESSURE: STATUSClass;
  HEAT_INDEX: STATUSClass;
}

export interface BoltekLd250 {
  STRIKE: STATUSClass;
  STATUS: STATUSClass;
}

export interface SensorsDS18B201 {
  TEMP: STATUSClass;
}

export interface Gps {
  LOCATION: STATUSClass;
}

export interface SensorsRAINGAUGE {
  FLIP: STATUSClass;
}

export interface SensorsWETBULB {
  GLOBE_TEMP: STATUSClass;
}

export interface SensorsWINDVANEDAVIS {
  DEGREES: STATUSClass;
}

export interface Stream {
  source: string;
  camera_id: number;
  id: string;
  full_id?: string;
  lat: number;
  lon: number;
  name: string;
  description: string;
  url?: string;
  fallback_url?: string;
  rtmp_url?: string;
  viewers: number;
  plot: boolean;
  camera: Camera;
  feed_url?: string;
}

export interface Camera {
  id: number;
  name: string;
  stream_id: string;
  cam_id: string;
  visibility: string;
  ui_order: number;
  stream_active_at: Date;
  kind: string;
  video_width: number;
  video_height: number;
  panorama_fov_init: number;
  panorama_fov_min: number;
  panorama_fov_max: number;
  panorama_lat_init: number;
  panorama_lon_init: number;
  panorama_rotate_x: number;
  panorama_rotate_y: number;
  panorama_rotate_z: number;
  panorama_circle1_center_x: number;
  panorama_circle1_center_y: number;
  panorama_circle1_radius_x: number;
  panorama_circle1_radius_y: number;
  panorama_circle1_cover_x: number;
  panorama_circle1_cover_y: number;
  panorama_circle2_center_x: number;
  panorama_circle2_center_y: number;
  panorama_circle2_radius_x: number;
  panorama_circle2_radius_y: number;
  panorama_circle2_cover_x: number;
  panorama_circle2_cover_y: number;
}

export interface User {
  id: number;
  profile_pic_url: string;
  name: string;
  username: null;
  bio: string;
  twitter_handle: string;
  website_url: string;
  facebook_url: string;
  instagram_username: null;
}
