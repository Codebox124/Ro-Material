import moment from "moment";

export function getStartDate(type: string): string {
  switch (type) {
    case "LAST_HOUR":
      return moment.utc().subtract(1, "hour").format("YYYY-MM-DD HH:mm:ss");
    case "SINCE_MIDNIGHT":
      return moment.utc().startOf("day").format("YYYY-MM-DD HH:mm:ss");
    case "LAST_24_HOUR":
      return moment.utc().subtract(24, "hours").format("YYYY-MM-DD HH:mm:ss");
    case "LAST_7_DAYS":
      return moment.utc().subtract(7, "days").format("YYYY-MM-DD 00:00:00");
    case "MTD":
      return moment.utc().startOf("month").format("YYYY-MM-DD HH:mm:ss");
    case "YTD":
      return moment.utc().startOf("year").format("YYYY-MM-DD HH:mm:ss");
  }
  return "";
}

export function getEndDate(nowUtc: string, type: string) {
  switch (type) {
    case "LAST_HOUR":
      return nowUtc;
    case "SINCE_MIDNIGHT":
      return moment.utc().endOf("day").format("YYYY-MM-DD HH:mm:ss");
    case "LAST_24_HOUR":
      return nowUtc;
    case "LAST_7_DAYS":
      return moment.utc().add(1, "days").format("YYYY-MM-DD 00:00:00");
    case "MTD":
      return moment.utc().endOf("month").format("YYYY-MM-DD HH:mm:ss");
    case "YTD":
      return moment.utc().endOf("year").format("YYYY-MM-DD HH:mm:ss");
  }
  return "";
}
