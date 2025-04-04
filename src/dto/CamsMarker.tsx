interface CamsMarkerFeatureProperties {
  name: string;
}

interface CamsMarkerFeature
  extends GeoJSON.Feature<GeoJSON.Point, CamsMarkerFeatureProperties> {}

export interface MarkerResponse {
  devices: CamsMarker[];
  perf: Perf | null;
}

export interface Perf {
  fetch_latency_ms: number;
}

export interface CamsMarker {
  uuid: string;
  user_id: string;
  name: string;
  code: string;
  city: string;
  state: string;
  last_location_lat: number;
  last_location_lon: number;
  last_location_alt: number;
  last_location_text: null | string;
  last_location_at: Date | null;
  last_telemetry_at: Date | null;
  stream_id: string;
  stream: Stream | null;
  is_streaming: boolean;
  project: null;
  visibility: Visibility;
  kind: string;
  timezone: string;
  rtmp_stream_enabled: boolean;
  primary_sensor_temp_device_id: number;
  primary_sensor_temp_key: PrimarySensorTempKey;
  model: Model;
  tower_id: null;
  display_device_uuid: null | string;
  is_aux_device: boolean;
  display_datetime: DisplayDatetime;
  group_id: null | string;
  icon_url: null | string;
  watermark_url: null | string;
  video_record: boolean;
  video_record_retention: string;
  video_record_access: boolean;
  data_retention: string;
  primary_location_source: string;
  service_level: null | string;
  show_telemetry_from: ShowTelemetryFrom;
}

export interface Stream {
  source: string;
  camera_id: number | null;
  id: string;
  full_id: string;
  lat: number;
  lon: number;
  name: string;
  description: string;
  url: string;
  fallback_url: string;
  rtmp_url: string;
  viewers: number;
  plot: boolean;
}

export enum Visibility {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export const SupportedKind = ["STATION", "LIGHTNING"];

export enum PrimarySensorTempKey {
  Am2302 = "AM2302",
  Bme280 = "BME280",
  Bmp280 = "BMP280",
  Cumulus = "CUMULUS",
  Davis = "DAVIS",
  Ecowitt = "ECOWITT",
  Scd40 = "SCD40",
  Weatherflow = "WEATHERFLOW",
  Young92000 = "YOUNG_92000",
}

export enum Model {
  Cumulus = "CUMULUS",
  CycloneportV1 = "CYCLONEPORT_V1",
  Davis = "DAVIS",
  Ecowitt = "ECOWITT",
  Lora = "LORA",
  Weatherflow = "WEATHERFLOW",
}

export enum DisplayDatetime {
  AmericaChicago = "America/Chicago",
  AmericaDetroit = "America/Detroit",
  AmericaNewYork = "America/New_York",
  EuropeLondon = "Europe/London",
  UTC = "UTC",
}

export enum ShowTelemetryFrom {
  MetarsAutomatedOffset = "METARS_AUTOMATED_OFFSET",
  Sensors = "SENSORS",
  WeatherAPI = "WEATHER_API",
}

export type { CamsMarkerFeature as CamsMarkerFeatureType };
