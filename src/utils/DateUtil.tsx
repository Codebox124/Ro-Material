export const toUTC = (telemetryAt: number) => {
  const date: Date = new Date(telemetryAt);
  return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
};
