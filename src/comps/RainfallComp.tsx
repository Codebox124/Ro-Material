import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { RAINFALL_GRAPH_COLOR } from "../constants/Color.tsx";
import { DeviceDetailsResponse } from "../dto/DeviceDetailsResponse";
import ChartCard from "./ChartCard";
import GenericLineChart from "./GenericLineChart";
import { RainFallSensorCard } from "./RainFallSensorCard.tsx";

interface Props {
  details: DeviceDetailsResponse;
}

export default function RainfallComp({ details }: Props) {
  const getXAxisDataSet = () => {
    const sensor = "RAINGAUGE";
    const history = details.history;
    const array = history[sensor].FLIP;
    return array.map((a: any) => new Date(a.telemetry_at));
  };

  const getYAxisDataSet = (): number[] => {
    const sensor = "RAINGAUGE";
    const history = details.history;
    const array = history[sensor].FLIP;
    return array.map((a: any) => a.value);
  };

  const getSecondTitle = (): string => {
    const sensor = "RAINGAUGE";
    const property = "FLIP";
    return details.sensors[sensor][property].name;
  };

  return (
    <div>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mb: 2 }}
      >
        <Grid size={{ xs: 12, sm: 7 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Rainfall Measurements
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 5 }}>
          <Typography variant="h6" sx={{ mb: 1 }} align={"right"}>
            {getSecondTitle()}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mb: 2 }}
      >
        <Grid size={{ xs: 6, sm: 4 }}>
          <RainFallSensorCard
            title="60 Minutes"
            type="LAST_HOUR"
            deviceId={details.device?.uuid ?? ""}
            delay={0}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
          <RainFallSensorCard
            title="Since Midnight"
            type="SINCE_MIDNIGHT"
            deviceId={details.device?.uuid ?? ""}
            delay={200}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
          <RainFallSensorCard
            title="Last 24/HR"
            type="LAST_24_HOUR"
            deviceId={details.device?.uuid ?? ""}
            delay={400}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
          <RainFallSensorCard
            title="Last 7 Days"
            type="LAST_7_DAYS"
            deviceId={details.device?.uuid ?? ""}
            delay={600}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
          <RainFallSensorCard
            title="MTD"
            type="MTD"
            deviceId={details.device?.uuid ?? ""}
            delay={800}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
          <RainFallSensorCard
            title="YTD"
            type="YTD"
            deviceId={details.device?.uuid ?? ""}
            delay={1000}
          />
        </Grid>
      </Grid>

      <ChartCard
        title="Measurement Trends"
        chart={
          <GenericLineChart
            xDataset={getXAxisDataSet()}
            yDataset={getYAxisDataSet()}
            labelString="Rainfall Rate"
            color={RAINFALL_GRAPH_COLOR}
          />
        }
      />
    </div>
  );
}
