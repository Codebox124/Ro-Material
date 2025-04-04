import { blue, green, purple, red, yellow } from "@mui/material/colors";

// Graph color
export const PRESSURE_GRAPH_COLOR = yellow[500];
export const TEMPERATURE_GRAPH_COLOR = "#00e5ff";
export const RAINFALL_GRAPH_COLOR = "#00e5ff";
export const WETBULB_GRAPH_COLOR = purple[300];
export const WINDSPEED_GRAPH_COLOR = green[500];

export const color = {
  temperature: function (val: number): string {
    if (val <= -40) {
      return "#818281";
    } else if (val <= -35 && val > -40) {
      return "#CCCCCD";
    } else if (val <= -30 && val > -35) {
      return "#FFFFFF";
    } else if (val <= -25 && val > -30) {
      return "#FDE6FF";
    } else if (val <= -20 && val > -25) {
      return "#FAC8FE";
    } else if (val <= -15 && val > -20) {
      return "#FAC8FE";
    } else if (val <= -10 && val > -15) {
      return "#E104E2";
    } else if (val <= -5 && val > -10) {
      return "#B164C0";
    } else if (val <= 0 && val > -5) {
      return "#8C01AF";
    } else if (val <= 5 && val > 0) {
      return "#0C0096";
    } else if (val <= 10 && val > 5) {
      return "#1400C8";
    } else if (val <= 15 && val > 10) {
      return "#233CFD";
    } else if (val <= 20 && val > 15) {
      return "#338CF0";
    } else if (val <= 25 && val > 20) {
      return "#41B5FD";
    } else if (val <= 30 && val > 25) {
      return "#96E7FE";
    } else if (val <= 35 && val > 30) {
      return "#217802";
    } else if (val <= 40 && val > 35) {
      return "#32A131";
    } else if (val <= 45 && val > 40) {
      return "#3EC805";
    } else if (val <= 50 && val > 45) {
      return "#64E764";
    } else if (val <= 55 && val > 50) {
      return "#8CFF8C";
    } else if (val <= 60 && val > 55) {
      return "#B4FFB5";
    } else if (val <= 65 && val > 60) {
      return "#FAFBA0";
    } else if (val <= 70 && val > 65) {
      return "#F9F673";
    } else if (val <= 75 && val > 70) {
      return "#F5DD5A";
    } else if (val <= 80 && val > 75) {
      return "#F7B429";
    } else if (val <= 85 && val > 80) {
      return "#F08C12";
    } else if (val <= 90 && val > 85) {
      return "#DC5004";
    } else if (val <= 95 && val > 90) {
      return "#B42703";
    } else if (val <= 100 && val > 95) {
      return "#8C0101";
    } else if (val <= 105 && val > 100) {
      return "#F0273C";
    } else if (val <= 110 && val > 105) {
      return "#FAC8DC";
    } else if (val > 110) {
      return "#FDF0F0";
    }
    return "#000000";
  },
  dewpoint: function (val: number): string {
    if (val <= -30) {
      return "#D7D7C4";
    } else if (val <= -20 && val > -30) {
      return "#B6BE95";
    } else if (val <= -10 && val > -20) {
      return "#ECCC79";
    } else if (val <= 0 && val > -10) {
      return "#FFCC66";
    } else if (val < 10 && val > 0) {
      return "#B6BE95";
    } else if (val < 20 && val >= 10) {
      return "#6D92BE";
    } else if (val < 25 && val >= 20) {
      return "#4983D4";
    } else if (val < 30 && val >= 25) {
      return "#2474E9";
    } else if (val < 35 && val >= 30) {
      return "#0066FF";
    } else if (val < 40 && val >= 35) {
      return "#0079DF";
    } else if (val < 45 && val >= 40) {
      return "#008CBF";
    } else if (val < 50 && val >= 45) {
      return "#009F9F";
    } else if (val < 55 && val >= 50) {
      return "#00B37F";
    } else if (val < 60 && val >= 55) {
      return "#00C65F";
    } else if (val < 65 && val >= 60) {
      return "#00D93F";
    } else if (val < 70 && val >= 65) {
      return "#00EC1F";
    } else if (val < 75 && val >= 70) {
      return "#00CC00";
    } else if (val >= 75) {
      return "#007100";
    }

    return "#000000";
  },
  windSpeed: function (val: number): string {
    if (val >= 0 && val < 5) {
      return "#B6FF00";
    } else if (val >= 5 && val < 10) {
      return "#DEFF0A";
    } else if (val >= 10 && val < 15) {
      return "#FAFF00";
    } else if (val >= 15 && val < 20) {
      return "#FFF200";
    } else if (val >= 20 && val < 25) {
      return "#FFE500";
    } else if (val >= 25 && val < 30) {
      return "#FFD000";
    } else if (val >= 30 && val < 40) {
      return "#FFA011";
    } else if (val >= 40 && val < 50) {
      return "#FF6607";
    } else if (val >= 50 && val < 60) {
      return "#FF1505";
    } else if (val >= 60 && val < 70) {
      return "#FF0083";
    } else if (val >= 70 && val < 80) {
      return "#FF11E7";
    } else if (val >= 80) {
      return "#D400FF";
    }

    return "#000000";
  },
  pressure: function (val: number): string {
    if (val < 960) {
      return "#232387";
    } else if (val >= 960 && val < 970) {
      return "#3B3BE2";
    } else if (val >= 970 && val < 980) {
      return "#3BAA9B";
    } else if (val >= 980 && val < 990) {
      return "#3BAA46";
    } else if (val >= 990 && val < 1000) {
      return "#3BB600";
    } else if (val >= 1000 && val < 1010) {
      return "#AAB600";
    } else if (val >= 1010 && val < 1020) {
      return "#FFB600";
    } else if (val >= 1020 && val < 1030) {
      return "#FF6900";
    } else if (val >= 1030) {
      return "#FF3300";
    }

    return "#000000";
  },
  moisture: function (val: number): string {
    if (val < 1) {
      return "#C4A995";
    } else if (val >= 1 && val < 2) {
      return "#FFDCC1";
    } else if (val >= 2 && val < 3) {
      return "#FFF9C1";
    } else if (val >= 3 && val < 4) {
      return "#ECF9C1";
    } else if (val >= 4 && val < 5) {
      return "#D1F9C1";
    } else if (val >= 5 && val < 6) {
      return "#CFF2BF";
    } else if (val >= 6 && val < 7) {
      return "#B9F29F";
    } else if (val >= 7 && val < 8) {
      return "#98F26F";
    } else if (val >= 8 && val < 9) {
      return "#8FE268";
    } else if (val >= 9 && val < 10) {
      return "#82CE5F";
    }

    return "#5C9144";
  },
};
