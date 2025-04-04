import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { color } from "../constants/Color";
import { TEMPERATURE_GRAPH_COLOR } from "../constants/Color.tsx";
import { DeviceDetailsResponse } from "../dto/DeviceDetailsResponse";
import {
  getDewPoint,
  getHeatIndex,
  getHumidity,
  getTemp,
  getXAxisDataSet,
  getYAxisDataSet,
} from "../utils/PrimarySensorUtil.tsx";
import ChartCard from "./ChartCard";
import GenericLineChart from "./GenericLineChart";

type SensorCardProps = {
  title: string;
  value: string;
  color: string;
};

const SensorCard: FC<SensorCardProps> = ({ title, value, color }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="overline" color="textSecondary">
          {title}
        </Typography>
        <Typography variant={"h6"} color={color}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

interface Props {
  details: DeviceDetailsResponse;
}

export default function TemperatureComp({ details }: Props) {
  return (
    <div>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Primary Sensor Data
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mb: 2 }}
      >
        <Grid size={{ xs: 6, sm: 6 }}>
          <SensorCard
            title="Temperature"
            value={getTemp(details).toFixed(1) + "℉"}
            color={color.temperature(getTemp(details))}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 6 }}>
          <SensorCard
            title="Humidity"
            value={getHumidity(details)}
            color={"textPrimary"}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 6 }}>
          <SensorCard
            title="Dew point"
            value={getDewPoint(details).toFixed(1) + "℉"}
            color={color.dewpoint(getDewPoint(details))}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 6 }}>
          <SensorCard
            title="Heat Index"
            value={getHeatIndex(details)}
            color={"textPrimary"}
          />
        </Grid>
      </Grid>

      <ChartCard
        title="Measurement Trends"
        chart={
          <GenericLineChart
            xDataset={getXAxisDataSet(details)}
            yDataset={getYAxisDataSet(details)}
            labelString="Outdoor Temp (℉)"
            color={TEMPERATURE_GRAPH_COLOR}
          />
        }
      />
    </div>
  );
}
